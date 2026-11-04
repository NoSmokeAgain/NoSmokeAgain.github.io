-- 誰是臥底線上版。所有判定都在這裡，資料表不開放前端直接讀取。
create table if not exists public.uc_pairs (
  id int primary key, cat text not null, a text not null, b text not null,
  s text[] not null, al text[] not null, bl text[] not null, active boolean not null default true
);
create table if not exists public.uc_aliases (word text not null, alias text not null, primary key (word, alias));
create table if not exists public.uc_personas (name text primary key, tmpl text[] not null);
create table if not exists public.uc_players (
  player uuid primary key, played int not null default 0, right_n int not null default 0,
  score int not null default 0, streak int not null default 0, best int not null default 0,
  updated_at timestamptz not null default now()
);
create table if not exists public.uc_sentences (
  id bigint generated always as identity primary key,
  pair_id int not null references public.uc_pairs(id), side text not null check (side in ('a','b')),
  player uuid not null, nickname text not null, body text not null,
  status text not null default 'pending' check (status in ('pending','live','rejected','hidden')),
  shown_civ int not null default 0, sus_civ int not null default 0,
  shown_spy int not null default 0, sus_spy int not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists uc_sentences_pool on public.uc_sentences (pair_id, side, status);
create index if not exists uc_sentences_player on public.uc_sentences (player, created_at desc);
create index if not exists uc_sentences_pending on public.uc_sentences (created_at) where status = 'pending';
create table if not exists public.uc_rounds (
  id uuid primary key default gen_random_uuid(),
  player uuid not null, pair_id int not null references public.uc_pairs(id),
  civ_side text not null, you_spy boolean not null, mode text not null, day date,
  seats jsonb not null, my_sid bigint, pick int, sure boolean,
  status text not null default 'say' check (status in ('say','vote','comeback','done')),
  culprit int, tally jsonb, back boolean, pts int, is_right boolean, challenge uuid,
  created_at timestamptz not null default now()
);
create unique index if not exists uc_rounds_daily on public.uc_rounds (player, day) where mode = 'daily';
create index if not exists uc_rounds_player on public.uc_rounds (player, created_at desc);
create index if not exists uc_rounds_time on public.uc_rounds (created_at);
create table if not exists public.uc_reports (
  sid bigint not null references public.uc_sentences(id) on delete cascade,
  player uuid not null, created_at timestamptz not null default now(), primary key (sid, player)
);

alter table public.uc_pairs enable row level security;
alter table public.uc_aliases enable row level security;
alter table public.uc_personas enable row level security;
alter table public.uc_players enable row level security;
alter table public.uc_sentences enable row level security;
alter table public.uc_rounds enable row level security;
alter table public.uc_reports enable row level security;
revoke all on public.uc_pairs, public.uc_aliases, public.uc_personas, public.uc_players, public.uc_sentences, public.uc_rounds, public.uc_reports from anon, authenticated;

create or replace function public.uc_norm(t text) returns text
language sql immutable set search_path = public as $$
  select regexp_replace(lower(coalesce(t,'')), '[[:space:]\-_.,，。「」、！？!?]', '', 'g')
$$;

create or replace function public.uc_today() returns date
language sql stable set search_path = public as $$ select (now() at time zone 'Asia/Taipei')::date $$;

create or replace function public.uc_stats_json(p uuid) returns jsonb
language sql stable set search_path = public as $$
  select coalesce((select jsonb_build_object('played',played,'right',right_n,'score',score,'streak',streak,'best',best) from uc_players where player = p),
                  jsonb_build_object('played',0,'right',0,'score',0,'streak',0,'best',0))
$$;

create or replace function public.uc_shuffle(a text[]) returns text[]
language sql volatile set search_path = public as $$
  select coalesce(array_agg(x order by random()), '{}') from unnest(a) x
$$;

create or replace function public.uc_dress(p_name text, p_line text) returns text
language plpgsql volatile set search_path = public as $$
declare t text[];
begin
  select tmpl into t from uc_personas where name = p_name;
  if t is null or random() >= 0.75 then return p_line; end if;
  return replace(t[1 + floor(random() * array_length(t,1))::int], '{l}', p_line);
end $$;

-- 組一桌：優先用通過審核的真人句子，不足時用系統角色補
create or replace function public.uc_build_seats(p_pair uc_pairs, p_civ text, p_you_spy boolean, p_player uuid, p_friend bigint default null)
returns jsonb language plpgsql volatile set search_path = public as $$
declare
  spy_side text := case when p_civ = 'a' then 'b' else 'a' end;
  civ_own text[] := uc_shuffle(case when p_civ = 'a' then p_pair.al else p_pair.bl end);
  spy_own text[] := uc_shuffle(case when p_civ = 'a' then p_pair.bl else p_pair.al end);
  shared text[] := uc_shuffle(p_pair.s);
  sys_civ text[];
  sys_spy text;
  names text[] := array(select name from uc_personas order by random());
  ni int := 1; si int := 1;
  seats jsonb := '[]';
  need_spy int := case when p_you_spy then 0 else 1 end;
  need_civ int;
  f record; r record; nm text;
begin
  if p_friend is not null then
    select * into f from uc_sentences where id = p_friend;
    if found then
      seats := seats || jsonb_build_array(jsonb_build_object('sid',f.id,'name',f.nickname,'text',f.body,'spy',f.side <> p_civ,'sys',false,'friend',true));
      if f.side <> p_civ then need_spy := 0; end if;
    end if;
  end if;
  need_civ := 5 - jsonb_array_length(seats) - need_spy;

  sys_civ := shared[1:3] || civ_own;
  sys_spy := case when random() < 0.5 then shared[4] else spy_own[1] end;

  -- 多數方座位
  for r in select id, nickname, body from uc_sentences
           where pair_id = p_pair.id and side = p_civ and status = 'live' and player <> p_player and id is distinct from p_friend
           order by random() limit need_civ loop
    seats := seats || jsonb_build_array(jsonb_build_object('sid',r.id,'name',r.nickname,'text',r.body,'spy',false,'sys',false));
    need_civ := need_civ - 1;
  end loop;
  while need_civ > 0 loop
    nm := names[ni]; ni := ni + 1;
    seats := seats || jsonb_build_array(jsonb_build_object('sid',null,'name',nm,'text',uc_dress(nm, sys_civ[si]),'spy',false,'sys',true));
    si := si + 1; need_civ := need_civ - 1;
  end loop;
  -- 臥底座位
  if need_spy > 0 then
    select id, nickname, body into r from uc_sentences
      where pair_id = p_pair.id and side = spy_side and status = 'live' and player <> p_player and id is distinct from p_friend
      order by random() limit 1;
    if found then
      seats := seats || jsonb_build_array(jsonb_build_object('sid',r.id,'name',r.nickname,'text',r.body,'spy',true,'sys',false));
    else
      nm := names[ni];
      seats := seats || jsonb_build_array(jsonb_build_object('sid',null,'name',nm,'text',uc_dress(nm, sys_spy),'spy',true,'sys',true));
    end if;
  end if;
  return (select jsonb_agg(v order by random()) from jsonb_array_elements(seats) v);
end $$;

create or replace function public.uc_seat_view(p_seats jsonb, p_from int, p_to int) returns jsonb
language sql stable set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object('i',o-1,'sid',v->'sid','name',v->'name','text',v->'text','sys',v->'sys','friend',coalesce(v->'friend','false'::jsonb)) order by o),'[]'::jsonb)
  from jsonb_array_elements(p_seats) with ordinality t(v,o) where o-1 between p_from and p_to
$$;

create or replace function public.uc_start(p_player uuid, p_mode text default 'random', p_cat text default null, p_challenge uuid default null)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare
  pr uc_pairs; civ text; spy boolean; dy date := null; v_mode text := coalesce(p_mode,'random');
  ch uc_rounds; friend bigint := null; fname text := null; rid uuid; st jsonb; word text; fside text;
begin
  if p_player is null then return jsonb_build_object('error','bad_player'); end if;
  if (select count(*) from uc_rounds where created_at > now() - interval '1 minute') >= 600 then return jsonb_build_object('error','busy'); end if;
  if exists (select 1 from uc_rounds where player = p_player and created_at > now() - interval '1 second') then return jsonb_build_object('error','too_fast'); end if;

  if v_mode = 'daily' then
    dy := uc_today();
    if exists (select 1 from uc_rounds where player = p_player and day = dy and uc_rounds.mode = 'daily') then return jsonb_build_object('error','daily_done'); end if;
    select * into pr from uc_pairs where active order by md5(id::text || dy::text) limit 1;
    civ := case when mod(abs(hashtext(dy::text)),2) = 0 then 'a' else 'b' end;
    spy := mod(abs(hashtext(dy::text || p_player::text)),10) < 3;
  elsif v_mode = 'challenge' then
    select * into ch from uc_rounds where id = p_challenge and my_sid is not null;
    if not found or ch.player = p_player then return jsonb_build_object('error','bad_challenge'); end if;
    select id, nickname, side into friend, fname, fside from uc_sentences where id = ch.my_sid and status in ('pending','live');
    if friend is null then return jsonb_build_object('error','bad_challenge'); end if;
    select * into pr from uc_pairs where id = ch.pair_id;
    civ := ch.civ_side; spy := false;
  else
    v_mode := 'random';
    select * into pr from uc_pairs p where p.active and (p_cat is null or p_cat = '全部' or p.cat = p_cat)
      and p.id not in (select r.pair_id from uc_rounds r where r.player = p_player order by r.created_at desc limit 40)
      order by random() limit 1;
    if not found then select * into pr from uc_pairs p where p.active and (p_cat is null or p_cat = '全部' or p.cat = p_cat) order by random() limit 1; end if;
    if not found then return jsonb_build_object('error','no_pair'); end if;
    civ := case when random() < 0.5 then 'a' else 'b' end;
    spy := random() < 0.3;
  end if;

  insert into uc_rounds (player, pair_id, civ_side, you_spy, mode, day, seats, challenge)
    values (p_player, pr.id, civ, spy, v_mode, dy, uc_build_seats(pr, civ, spy, p_player, friend), p_challenge)
    returning id, seats into rid, st;
  word := case when (civ = 'a') <> spy then pr.a else pr.b end;
  return jsonb_build_object('id',rid,'word',word,'mode',v_mode,'cat',pr.cat,'seats',uc_seat_view(st,0,2),'stats',uc_stats_json(p_player),'friend',fname);
end $$;

create or replace function public.uc_say(p_round uuid, p_player uuid, p_text text, p_name text default null)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare
  r uc_rounds; pr uc_pairs; side text; word text; t text; n text; low text; sid bigint;
begin
  select * into r from uc_rounds where id = p_round and player = p_player for update;
  if not found or r.status <> 'say' then return jsonb_build_object('error','bad_round'); end if;
  select * into pr from uc_pairs where id = r.pair_id;
  side := case when (r.civ_side = 'a') <> r.you_spy then 'a' else 'b' end;
  word := case when side = 'a' then pr.a else pr.b end;
  t := btrim(regexp_replace(coalesce(p_text,''), '[[:cntrl:]]', '', 'g'));
  low := uc_norm(t);
  if char_length(t) < 2 then return jsonb_build_object('error','short'); end if;
  if char_length(t) > 30 then return jsonb_build_object('error','long'); end if;
  if position(uc_norm(word) in low) > 0 then return jsonb_build_object('error','word'); end if;
  if exists (select 1 from lb_blocked_words w where position(w.word in low) > 0) then return jsonb_build_object('error','bad'); end if;
  if t ~* '09[0-9]{8}|[0-9]{6,}|@|https?:|www\.|\.com|\.tw|加賴|line[[:space:]]*id' then return jsonb_build_object('error','private'); end if;
  if low ~ '^(不知道|很好|還好|就那樣|沒有|隨便|好吃|不錯|哈+|嗯+)$' or low ~ '^(.)\1+$' then return jsonb_build_object('error','empty'); end if;
  if (select count(*) from uc_sentences where player = p_player and created_at > now() - interval '1 day') >= 200 then return jsonb_build_object('error','too_many'); end if;
  n := btrim(regexp_replace(coalesce(p_name,''), '[[:cntrl:]]', '', 'g'));
  if char_length(n) < 1 or char_length(n) > 8 or exists (select 1 from lb_blocked_words w where position(w.word in uc_norm(n)) > 0) then n := '匿名網友'; end if;
  insert into uc_sentences (pair_id, side, player, nickname, body) values (r.pair_id, side, p_player, n, t) returning id into sid;
  update uc_rounds set my_sid = sid, status = 'vote' where id = r.id;
  return jsonb_build_object('ok',true,'seats',uc_seat_view(r.seats,3,4));
end $$;

-- 結算：分數和連勝只在這裡計算
create or replace function public.uc_close(p_id uuid, p_back boolean) returns jsonb
language plpgsql volatile set search_path = public as $$
declare
  r uc_rounds; pr uc_pairs; picked boolean := false; yv int; v_pts int := 0; ok boolean; bot_back boolean := false;
  civ_w text; spy_w text; spy_seat int := null; o int;
begin
  select * into r from uc_rounds where id = p_id;
  select * into pr from uc_pairs where id = r.pair_id;
  civ_w := case when r.civ_side = 'a' then pr.a else pr.b end;
  spy_w := case when r.civ_side = 'a' then pr.b else pr.a end;
  for o in 0..4 loop if (r.seats->o->>'spy')::boolean then spy_seat := o; end if; end loop;
  if r.pick < 5 then picked := (r.seats->r.pick->>'spy')::boolean; else picked := r.you_spy; end if;
  yv := coalesce((r.tally->>5)::int, 0);
  if r.you_spy then
    if r.culprit = 5 then v_pts := case when p_back then 3 else 0 end; ok := coalesce(p_back,false);
    elsif r.pick = 5 then v_pts := case when r.sure then 3 else 1 end; ok := true;
    else v_pts := 3; ok := true; end if;
  else
    ok := picked;
    if r.pick = 5 then v_pts := case when r.sure then -2 else 0 end;
    elsif picked then v_pts := case when r.sure then 3 else 1 end;
    elsif r.sure then v_pts := -2; end if;
    -- 被抓的系統臥底有機會翻盤
    if r.culprit < 5 and (r.seats->r.culprit->>'spy')::boolean and (r.seats->r.culprit->>'sys')::boolean then bot_back := random() < 0.3; end if;
  end if;
  insert into uc_players (player, played, right_n, score, streak, best)
    values (r.player, 1, ok::int, greatest(0,v_pts), ok::int, ok::int)
    on conflict (player) do update set
      played = uc_players.played + 1,
      right_n = uc_players.right_n + ok::int,
      score = greatest(0, uc_players.score + v_pts),
      streak = case when ok then uc_players.streak + 1 else 0 end,
      best = greatest(uc_players.best, case when ok then uc_players.streak + 1 else 0 end),
      updated_at = now();
  update uc_rounds set status = 'done', back = p_back, pts = v_pts, is_right = ok where id = r.id;
  return jsonb_build_object('done',true,'pts',v_pts,'right',ok,'culprit',r.culprit,'tally',r.tally,'spy_seat',spy_seat,'you_spy',r.you_spy,
    'pick',r.pick,'picked_spy',picked,'sure',r.sure,'back',coalesce(p_back,false),'bot_back',bot_back,'civ',civ_w,'spy',spy_w,'your_votes',yv,'stats',uc_stats_json(r.player));
end $$;

-- 投票：其他五人的票依每句過去被懷疑的比例換算，只有玩家自己那一票是真的
create or replace function public.uc_vote(p_round uuid, p_player uuid, p_pick int, p_sure boolean)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare
  r uc_rounds; w numeric[] := array[0,0,0,0,0,0]::numeric[]; t int[] := array[0,0,0,0,0,0]; i int; j int; v jsonb; s uc_sentences;
  roll numeric; total numeric; m int; cu int := -1; idx int[];
begin
  select * into r from uc_rounds where id = p_round and player = p_player for update;
  if not found or r.status <> 'vote' then return jsonb_build_object('error','bad_round'); end if;
  if p_pick is null or p_pick < 0 or p_pick > 5 then return jsonb_build_object('error','bad_pick'); end if;
  for i in 0..4 loop
    v := r.seats->i;
    if (v->>'sid') is not null then
      select * into s from uc_sentences where id = (v->>'sid')::bigint;
      if (v->>'spy')::boolean then
        w[i+1] := (s.sus_spy + 2.4) / (s.shown_spy + 6.0) * 6;
        update uc_sentences set shown_spy = shown_spy + 1, sus_spy = sus_spy + (p_pick = i)::int where id = s.id;
      else
        w[i+1] := (s.sus_civ + 1.0) / (s.shown_civ + 6.0) * 6;
        update uc_sentences set shown_civ = shown_civ + 1, sus_civ = sus_civ + (p_pick = i)::int where id = s.id;
      end if;
    else
      w[i+1] := case when (v->>'spy')::boolean then 2.4 else 1 end;
    end if;
  end loop;
  w[6] := case when r.you_spy then 1.6 else 1 end;
  for i in 1..5 loop
    total := 0; for j in 1..6 loop if j <> i then total := total + w[j]; end if; end loop;
    roll := random()::numeric * total;
    for j in 1..6 loop
      if j <> i then
        roll := roll - w[j];
        if roll <= 0 then t[j] := t[j] + 1; exit; end if;
      end if;
    end loop;
  end loop;
  t[p_pick+1] := t[p_pick+1] + 1;
  m := (select max(x) from unnest(t) x);
  select array_agg(o-1 order by random()) into idx from unnest(t) with ordinality u(x,o) where x = m;
  cu := idx[1];
  update uc_rounds set pick = p_pick, sure = coalesce(p_sure,false), culprit = cu, tally = to_jsonb(t),
    status = case when cu = 5 and r.you_spy then 'comeback' else 'vote' end where id = r.id;
  if cu = 5 and r.you_spy then
    return jsonb_build_object('need_comeback',true,'tally',to_jsonb(t),'culprit',cu,'stats',uc_stats_json(p_player));
  end if;
  return uc_close(r.id, null);
end $$;

create or replace function public.uc_comeback(p_round uuid, p_player uuid, p_guess text)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare r uc_rounds; pr uc_pairs; civ_w text; mine text; a text; w text; ok boolean;
begin
  select * into r from uc_rounds where id = p_round and player = p_player for update;
  if not found or r.status <> 'comeback' then return jsonb_build_object('error','bad_round'); end if;
  select * into pr from uc_pairs where id = r.pair_id;
  civ_w := case when r.civ_side = 'a' then pr.a else pr.b end;
  mine := case when r.civ_side = 'a' then pr.b else pr.a end;
  a := uc_norm(p_guess); w := uc_norm(civ_w);
  if char_length(a) < 2 then return jsonb_build_object('error','short'); end if;
  if a = uc_norm(mine) then return jsonb_build_object('error','own'); end if;
  ok := a = w or exists (select 1 from uc_aliases x where x.word = civ_w and uc_norm(x.alias) = a)
     or (position(w in a) > 0 and char_length(a) <= char_length(w) + 2)
     or (position(a in w) > 0 and char_length(a)::numeric / char_length(w) >= 0.6);
  return uc_close(r.id, ok);
end $$;

create or replace function public.uc_mine(p_player uuid) returns jsonb
language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object('text',body,'word',case when s.side='a' then p.a else p.b end,'status',s.status,
    'shown',s.shown_civ+s.shown_spy,'suspected',s.sus_civ+s.sus_spy) order by s.created_at desc),'[]'::jsonb)
  from (select * from uc_sentences where player = p_player order by created_at desc limit 20) s join uc_pairs p on p.id = s.pair_id
$$;

create or replace function public.uc_report(p_player uuid, p_sid bigint) returns jsonb
language plpgsql volatile security definer set search_path = public as $$
declare n int;
begin
  if p_player is null or not exists (select 1 from uc_sentences where id = p_sid) then return jsonb_build_object('ok',false); end if;
  insert into uc_reports (sid, player) values (p_sid, p_player) on conflict do nothing;
  select count(*) into n from uc_reports where sid = p_sid;
  if n >= 3 then update uc_sentences set status = 'hidden' where id = p_sid and status in ('pending','live'); end if;
  return jsonb_build_object('ok',true);
end $$;

-- 昨日榜：只看每日一題那組詞、通過審核、被看過至少 5 次的句子
create or replace function public.uc_board() returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare dy date := uc_today() - 1; pr uc_pairs; best jsonb; worst jsonb;
begin
  select * into pr from uc_pairs where active order by md5(id::text || dy::text) limit 1;
  if not found then return null; end if;
  select jsonb_build_object('name',nickname,'text',body) into best from uc_sentences
    where pair_id = pr.id and status = 'live' and shown_spy >= 5 and created_at < uc_today()
    order by sus_spy::numeric / shown_spy, shown_spy desc limit 1;
  select jsonb_build_object('name',nickname,'text',body) into worst from uc_sentences
    where pair_id = pr.id and status = 'live' and shown_civ >= 5 and created_at < uc_today()
    order by sus_civ::numeric / shown_civ desc, shown_civ desc limit 1;
  return jsonb_build_object('a',pr.a,'b',pr.b,'best',best,'worst',worst);
end $$;

create or replace function public.uc_home(p_player uuid) returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object('stats',uc_stats_json(p_player),
    'daily_done',exists (select 1 from uc_rounds where player = p_player and day = uc_today() and mode = 'daily'),
    'cats',(select jsonb_agg(jsonb_build_object('cat',cat,'n',n) order by n desc) from (select cat, count(*) n from uc_pairs where active group by cat) c),
    'total',(select count(*) from uc_pairs where active),
    'mine',uc_mine(p_player),'board',uc_board())
$$;

do $$ declare f record; begin
  for f in select p.oid::regprocedure sig from pg_proc p join pg_namespace n on n.oid=p.pronamespace
           where n.nspname='public' and p.proname like 'uc\_%' loop
    execute format('revoke all on function %s from public, anon, authenticated', f.sig);
  end loop;
end $$;
grant execute on function public.uc_start(uuid,text,text,uuid), public.uc_say(uuid,uuid,text,text), public.uc_vote(uuid,uuid,int,boolean),
  public.uc_comeback(uuid,uuid,text), public.uc_report(uuid,bigint), public.uc_home(uuid) to anon, authenticated;

-- 詞庫
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (1,'美食','鹽酥雞','雞排',ARRAY['下班經過很難不買','半夜吃最有罪惡感','老闆會問你要不要辣','炸物的香味飄很遠']::text[],ARRAY['九層塔一定要加','一包可以好幾個人分']::text[],ARRAY['要不要切是個問題','一片就很有飽足感']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (2,'美食','魯肉飯','控肉飯',ARRAY['加半熟蛋更好吃','每個人都有心中第一名','再加一碗湯就是一餐','醬汁拌飯最重要']::text[],ARRAY['肉要切得很碎','小碗的才是真愛']::text[],ARRAY['一大塊肥瘦相間','筷子一夾就散開']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (3,'美食','珍珠奶茶','仙草凍奶',ARRAY['飲料店的招牌','喝完會有點後悔','甜度要先想好','吸管不夠粗不行']::text[],ARRAY['大顆小顆都有人堅持','咬到最後剩一堆在杯底']::text[],ARRAY['黑黑的一塊一塊','聽起來很退火']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (4,'美食','水餃','鍋貼',ARRAY['沾醬每個人配法不同','一次會點很多顆','韭菜口味有人愛有人怕','宵夜也很合適']::text[],ARRAY['煮的比較清爽','冷凍庫常備']::text[],ARRAY['底部煎得脆脆的','長長一條比較油']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (5,'美食','火鍋','燒烤',ARRAY['一群人吃最開心','吃完衣服都有味道','聊天比吃還久','肉片是主角']::text[],ARRAY['湯底要選','冬天最有感']::text[],ARRAY['要有人負責顧火','中秋節的氣氛']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (6,'美食','滷味','鹹酥雞',ARRAY['夜市常見','選料時很難收手','最後才知道多少錢','王子麵總會被加進去']::text[],ARRAY['湯汁很入味','老滷是招牌']::text[],ARRAY['一下油鍋就很香','最後灑胡椒粉']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (7,'美食','牛肉麵','羊肉爐',ARRAY['湯頭是靈魂','一碗下去很暖','愛的人很愛','味道很重的人會加很多酸菜']::text[],ARRAY['紅燒清燉要二選一','有名店都要排隊']::text[],ARRAY['冬天才想到','常配一壺米酒']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (8,'美食','豆花','愛玉',ARRAY['夏天吃很消暑','常見的傳統甜點','滑滑的很好入口','可以加很多料']::text[],ARRAY['花生加粉圓最對味','冬天吃熱的也行']::text[],ARRAY['常加檸檬','有人知道它是種子洗出來的']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (9,'美食','臭豆腐','麻辣鴨血',ARRAY['小吃攤老闆都很有個性','愛的人覺得很香','夜市常見','泡菜是好搭檔']::text[],ARRAY['遠遠就聞得到','炸或蒸都有人吃']::text[],ARRAY['湯是紅的','滑滑一塊一塊']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (10,'美食','便當','自助餐',ARRAY['中午最常見的選擇','一個人也能吃','價錢算過後還好','配菜最重要']::text[],ARRAY['三菜一肉很固定','排骨雞腿選一個']::text[],ARRAY['夾太多會被算很貴','每次都夾到同一種菜']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (11,'美食','肉圓','碗粿',ARRAY['台灣傳統小吃','醬料很重要','彰化或台南常被提起','半透明或米香都有人愛']::text[],ARRAY['外皮QQ的','炸或蒸都有人吃']::text[],ARRAY['用小碗裝著','吃的時候要用竹片切']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (12,'美食','蛋餅','飯糰',ARRAY['早餐店必點','最常被加肉鬆','趕上班時很方便','加辣才過癮']::text[],ARRAY['餅皮要煎得酥','醬油膏要多一點']::text[],ARRAY['裡面會包油條','要用手握著吃']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (13,'美食','早餐店奶茶','超商拿鐵',ARRAY['上班路上會買','早上不喝會沒精神','加冰比較多','常常一天喝不只一杯']::text[],ARRAY['甜甜的有點粉粉的','老闆會直接問「大冰奶嗎」']::text[],ARRAY['自己按機器就好','第二杯半價才買']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (14,'美食','刈包','潤餅',ARRAY['傳統小吃也能當一餐','裡面有花生粉和香菜','咬一口餡料會掉','不是每家都好吃']::text[],ARRAY['像一張嘴夾著肉','也叫虎咬豬']::text[],ARRAY['清明節最常見','皮很薄要捲起來']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (15,'美食','地瓜球','QQ蛋',ARRAY['夜市小孩最愛','一袋很快吃完','吃的時候要小心燙','圓圓一顆一顆']::text[],ARRAY['中間是空心的','老闆要壓很多下']::text[],ARRAY['像鵪鶉蛋的尺寸','外層甜甜的很有彈性']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (16,'美食','吃到飽','無菜單料理',ARRAY['吃之前會很期待','價格不便宜','要先預訂比較安全','吃完想走路回家']::text[],ARRAY['一定要吃回本','限時兩小時']::text[],ARRAY['你不知道下一道是什麼','師傅會介紹食材']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (17,'美食','拉麵','烏龍麵',ARRAY['日本料理店常見','湯是關鍵','吃時會發出聲音','也會有人加蛋']::text[],ARRAY['豚骨濃到黏嘴','排隊排很久']::text[],ARRAY['麵粗粗的很彈','讚岐很有名']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (18,'美食','生魚片','握壽司',ARRAY['要夠新鮮','沾點芥末','吃日料必點','師傅刀工很重要']::text[],ARRAY['一片一片直接吃','常放在冰上']::text[],ARRAY['下面有醋飯','一口一個剛好']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (19,'美食','美式咖啡','手搖茶',ARRAY['上班不喝會累','常常不小心喝太多','買一送一會衝動','晚上喝會睡不著']::text[],ARRAY['苦苦的沒有糖','冰的最多人點']::text[],ARRAY['甜度冰塊要先講','店名一直換新']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (20,'美食','鐵板燒','熱炒',ARRAY['油煙很多','吃飯氣氛很吵','師傅手腳很快','豆芽菜常是配菜']::text[],ARRAY['坐在師傅前面看他炒','一人一份套餐']::text[],ARRAY['啤酒一手接一手','菜一盤一百出頭']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (21,'美食','刨冰','霜淇淋',ARRAY['夏天很難拒絕','吃太快頭會痛','要趁它融化前吃完','排隊也值得']::text[],ARRAY['芒果的季節最熱門','料可以加到滿']::text[],ARRAY['超商新口味就想試','捲成一球一球']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (22,'美食','泡麵','鍋燒意麵',ARRAY['半夜會想吃','加顆蛋就很滿足','一個人也能吃','吃完覺得很罪惡']::text[],ARRAY['煮或泡都可以','櫃子裡總有幾包']::text[],ARRAY['常有魚板和蝦','巷口小吃店常賣']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (23,'美食','炒飯','炒麵',ARRAY['熱炒店常見','火候最重要','加蛋才對','吃不完可以外帶']::text[],ARRAY['粒粒分明才算功夫','隔夜的材料最好']::text[],ARRAY['要吸飽醬汁','夜市攤車也常見']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (24,'美食','蔥油餅','胡椒餅',ARRAY['路邊排隊都很長','要趁熱吃','蔥很重要','咬下去會很香']::text[],ARRAY['加蛋更好','三星最有名']::text[],ARRAY['肉汁會噴出來','用大爐子貼著烤']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (25,'美食','蛋糕','布丁',ARRAY['生日很可能出現','吃多了會膩','甜點店必有','挖一口很開心']::text[],ARRAY['要點蠟燭','一整個要切開']::text[],ARRAY['焦糖是靈魂','滑滑的抖來抖去']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (26,'職場','老闆','主管',ARRAY['下班傳訊息最可怕','開會一定講很久','一句話改掉你三天的工作','看到他就想找事做']::text[],ARRAY['年終多少他說了算','很愛說我們是一家人']::text[],ARRAY['夾在中間其實也可憐','打考績的那個人']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (27,'職場','加班','值班',ARRAY['下班時間還在公司','回家路上很累','朋友約吃飯常常不能去','家人問你怎麼這麼晚']::text[],ARRAY['通常沒人說有加給','因為事情做不完']::text[],ARRAY['照排班表輪','就算沒事也要待著']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (28,'職場','尾牙','春酒',ARRAY['公司一年一度的飯局','老闆會上台講話','常有抽獎','同事喝酒才敢講真話']::text[],ARRAY['年底才有的','大家都想抽現金']::text[],ARRAY['過完年才吃','開工的氣氛']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (29,'職場','年終獎金','三節獎金',ARRAY['發之前大家都在猜','金額比較會讓人不開心','聽到有人領很多就羨慕','是留下來的理由']::text[],ARRAY['等一整年','等完就有人離職']::text[],ARRAY['一年分好幾次','端午中秋都有']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (30,'職場','面試','試用期',ARRAY['進公司前的關卡','對方在看你適不適合','講話要小心','常常擔心不會過']::text[],ARRAY['要穿得體一點','常被問期望待遇']::text[],ARRAY['進來才知道是真是假','常常是三個月']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (31,'職場','離職','留職停薪',ARRAY['要跟主管談','大家都會問你要去哪','交接很麻煩','桌上的東西要收']::text[],ARRAY['寫好信再提','最後一天大家會聚餐']::text[],ARRAY['之後還可以回來','常因為家庭因素']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (32,'職場','Excel','PPT',ARRAY['上班幾乎天天用','老闆說要做得漂亮一點','常常改到半夜','存檔前當掉會想哭']::text[],ARRAY['公式打錯就全錯','表格一格一格']::text[],ARRAY['動畫效果一堆','開會時才用投影']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (33,'職場','週報','月報',ARRAY['主管會要求','常常寫得比做的還多','沒人真的看','快要交才在想']::text[],ARRAY['每星期都要交','週五下午最常見']::text[],ARRAY['一個月才交一次','數字要對過']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (34,'職場','開會','團購',ARRAY['會打斷你的工作','有人負責主揪','一定有人不看訊息','大家都說要參加']::text[],ARRAY['明明可以寄信就好','結束才發現沒結論']::text[],ARRAY['常揪飲料或零食','金額要算到小數點']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (35,'職場','實習生','新人',ARRAY['辦公室裡最年輕的','常常被叫去做雜事','很怕問太多問題','第一次叫大家早']::text[],ARRAY['通常有結束日期','薪水比較少']::text[],ARRAY['已經正式錄用','大家開始交真的工作給他']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (36,'職場','打卡','請假',ARRAY['人資最在意','手機上就能操作','一個月底會被算一次','忘記會有點麻煩']::text[],ARRAY['遲到一分鐘也看得到','上下班都要']::text[],ARRAY['要先問主管','病假事假分得很清楚']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (37,'職場','WFH','外派',ARRAY['不必每天進辦公室','有時很想念同事','開會全靠視訊','一開始很羨慕']::text[],ARRAY['穿睡衣也能工作','在家容易分心']::text[],ARRAY['要飛到別的國家','領的津貼比較多']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (38,'職場','業務','客服',ARRAY['每天都在跟人說話','常被客戶罵','要懂得陪笑','業績壓力不小']::text[],ARRAY['跑客戶才算真本事','領獎金靠成交']::text[],ARRAY['耳機戴一整天','每通電話都有錄音']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (39,'職場','自由工作者','斜槓青年',ARRAY['說出來大家都羨慕','收入不太穩定','常常半夜在趕東西','名片不太好寫']::text[],ARRAY['沒有公司只有案主','要自己報稅']::text[],ARRAY['白天上班晚上開店','IG 上看起來很厲害']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (40,'職場','勞基法','績效考核',ARRAY['公司 HR 最常提','員工會私下討論','常有爭議','每年會被拿出來講']::text[],ARRAY['規定工時和加班費','政府會來查']::text[],ARRAY['常被叫自評','會影響你明年的錢']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (41,'感情','前任','曖昧對象',ARRAY['半夜不該傳訊息給他','聽到某首歌就會想到','看限動會想太多','朋友都叫我別想了']::text[],ARRAY['已經結束了但還會想','相簿還留著一些照片']::text[],ARRAY['還不知道算不算數','回訊息要算好時間']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (42,'感情','約會','相親',ARRAY['要穿得好一點','聊天怕冷場','吃飯時會互相打量','回家朋友會問感想']::text[],ARRAY['電影票要先訂好','牽手是重要時刻']::text[],ARRAY['常常有長輩安排','一開始就問工作收入']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (43,'感情','閃婚','裸婚',ARRAY['家人聽到都嚇一跳','朋友會開始討論','說出來需要勇氣','婚禮可能會很簡單']::text[],ARRAY['才認識幾個月','大家懷疑是不是太快']::text[],ARRAY['沒房沒車沒禮金','不辦婚宴也沒關係']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (44,'感情','情人節','七夕',ARRAY['情侶最期待的日子','餐廳都會漲價','單身的人很難過','花店生意最好']::text[],ARRAY['二月的巧克力','西洋傳來的']::text[],ARRAY['牛郎織女的故事','農曆才算得準']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (45,'感情','渣男','工具人',ARRAY['常在 Threads 被討論','朋友都看得很清楚','本人很難察覺','跟誰都能傳訊息']::text[],ARRAY['同時跟好幾個人曖昧','很會講話']::text[],ARRAY['隨傳隨到','幫忙接送卻沒有名分']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (46,'感情','暈船','單戀',ARRAY['睡前都在想對方','朋友勸也沒用','看到訊息心情就好','一點點訊號都想太多']::text[],ARRAY['聊一陣子就陷下去','常發生在交友軟體']::text[],ARRAY['對方根本不知道','暗暗喜歡了很多年']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (47,'感情','遠距離','異地戀',ARRAY['常常要等視訊','見面都要安排','週末常在交通工具上','久了很考驗感情']::text[],ARRAY['時差也是難題','一年才見幾次']::text[],ARRAY['常常是不同縣市','靠高鐵維持']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (48,'感情','求婚','訂婚',ARRAY['戒指很重要','家人朋友都想知道日期','會拍很多照片','會有人哭']::text[],ARRAY['大家要偷偷幫忙布置','要單膝跪下']::text[],ARRAY['長輩一定要到','有禮俗要準備']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (49,'感情','交友軟體','婚友社',ARRAY['想脫單的人會用','照片很重要','常常聊一聊就沒下文','需要先填資料']::text[],ARRAY['手指左滑右滑','半夜最多人在線']::text[],ARRAY['有專人幫你配對','費用常常不便宜']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (50,'感情','吵架','冷戰',ARRAY['情侶最常見的問題','之後常常要有人先低頭','朋友會被拉來評理','之後心情很差']::text[],ARRAY['講話愈來愈大聲','隔壁都聽得到']::text[],ARRAY['已讀不回好幾天','兩人都不講話']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (51,'感情','分手','封鎖',ARRAY['結束時最痛苦','會把對方照片處理掉','朋友都會問怎麼了','一個決定很難反悔']::text[],ARRAY['要當面講才有禮貌','大家會開始選邊站']::text[],ARRAY['按一下就完成','對方會找不到你']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (52,'感情','小三','前女友',ARRAY['一提到就有人不開心','常在社群被討論','新女友會很在意','照片總是會被翻出來']::text[],ARRAY['八點檔最愛寫','被抓到會上新聞']::text[],ARRAY['以前真的在一起過','臉書還有共同朋友']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (53,'地方','高鐵','台鐵',ARRAY['坐過站會很麻煩','連假要搶票','長途才會想到','車上有人一路睡']::text[],ARRAY['票價讓人猶豫一下','車站常離市區有點遠']::text[],ARRAY['車上的便當很有名','誤點大家已經習慣']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (54,'地方','台南','嘉義',ARRAY['古早味很多','早餐就很豐盛','是南部人的驕傲','觀光客都愛去']::text[],ARRAY['廟比超商多','糖放很多']::text[],ARRAY['阿里山在這邊','雞肉飯很有名']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (55,'地方','花蓮','台東',ARRAY['適合連假去','看海很療癒','要有人開車才方便','坐火車很久才到']::text[],ARRAY['太魯閣很有名','麻糬是伴手禮']::text[],ARRAY['熱氣球最有名','池上便當很有名']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (56,'地方','九份','十分',ARRAY['新北很熱門','外國人都愛去','坐火車也能到','下雨機率不小']::text[],ARRAY['山城的樓梯很多','芋圓有名']::text[],ARRAY['可以放天燈','火車從老街中間開過']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (57,'地方','墾丁','澎湖',ARRAY['夏天的代名詞','防曬一定要擦','出門要租機車','海水超藍']::text[],ARRAY['大街晚上很熱鬧','最南端很有名']::text[],ARRAY['要坐船或飛機','花火節很有名']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (58,'地方','阿里山','合歡山',ARRAY['要看日出很早起','山上很冷','要開很久才會到','路彎到會暈']::text[],ARRAY['有小火車','神木是招牌']::text[],ARRAY['下雪的時候塞爆','人一定會去武嶺']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (59,'地方','士林夜市','逢甲夜市',ARRAY['大學生常去','人擠人走不動','外國遊客很愛','老闆常講好幾國語言']::text[],ARRAY['捷運坐到劍潭','地下室美食街']::text[],ARRAY['台中人都熟','新奇小吃都從這裡紅']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (60,'地方','西門町','信義區',ARRAY['週末最多年輕人','街頭常有表演','看電影很方便','逛街逛到腳痠']::text[],ARRAY['有很多日本品牌','紅樓在旁邊']::text[],ARRAY['百貨一棟接一棟','跨年要看煙火']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (61,'地方','一中街','審計新村',ARRAY['台中年輕人常去','週末人潮多','拍照很好看','小店很多']::text[],ARRAY['學生時代的回憶','珍奶起家地附近']::text[],ARRAY['文青小店聚集','老房子改造的']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (62,'地方','日月潭','清境',ARRAY['南投的招牌','情侶很愛去','民宿很多','週末有時塞車']::text[],ARRAY['騎單車很有名','坐船去看湖']::text[],ARRAY['羊很有名','霧一來就很涼']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (63,'地方','台北人','高雄人',ARRAY['聽口音大概猜得出來','會覺得自己城市最好','一直被開玩笑','常常被問在地美食']::text[],ARRAY['捷運是日常','走路特別快']::text[],ARRAY['熱到沒有冬天','港邊吃海鮮']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (64,'地方','淡水','基隆',ARRAY['有海的味道','天氣常下雨','坐一趟就有小旅行的感覺','老街有名']::text[],ARRAY['河岸看夕陽','阿給很有名']::text[],ARRAY['雨都之稱','廟口夜市很有名']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (65,'生活','7-11','全家',ARRAY['半夜還亮著燈','集點會讓人失去理智','常常開在對手對面','咖啡買一送一就排隊']::text[],ARRAY['茶葉蛋的味道很熟悉','進門會叮咚一聲']::text[],ARRAY['霜淇淋出新口味就想吃','進門音樂一聽就知道']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (66,'生活','夜市','菜市場',ARRAY['人擠人走不動','攤位一個接一個','停車永遠找不到位子','老闆很會招呼']::text[],ARRAY['太陽下山才熱鬧','邊走邊吃最開心']::text[],ARRAY['一大早最熱鬧','老闆常會多送一把蔥']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (67,'生活','健身房','瑜珈教室',ARRAY['辦了會員卻很少去','到處都是鏡子','第一個月最勤勞','隔天全身酸痛']::text[],ARRAY['有人一直占著器材','教練會推銷課程']::text[],ARRAY['老師的聲音很溫柔','要帶自己的墊子']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (68,'生活','蝦皮','momo',ARRAY['半夜滑一滑就下單','常常在等到貨通知','價格低到會懷疑人生','購物車永遠有東西']::text[],ARRAY['賣家回訊息超快','要去超商取貨']::text[],ARRAY['隔天就到很方便','電視購物起家']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (69,'生活','媽媽','阿嬤',ARRAY['一直問你吃飽沒','永遠覺得你穿太少','比你還擔心你','出門前會唸個不停']::text[],ARRAY['LINE 會收到養生文','電話常常打來']::text[],ARRAY['過年紅包最大包','講台語比較多']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (70,'生活','Netflix','YouTube',ARRAY['睡前一定要看一下','看到不知不覺天亮','演算法比你懂你','有時候只是當背景音']::text[],ARRAY['一集接一集','帳號會跟朋友共用']::text[],ARRAY['廣告跳不掉','常常點進去看開箱']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (71,'生活','Threads','IG',ARRAY['睡前都在滑','心情不好也會滑','看到新鮮事就想分享','大家都在這裡吵架']::text[],ARRAY['文字比較多','一直有人問你怎麼看']::text[],ARRAY['要有好看照片','限動 24 小時消失']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (72,'生活','機車','電動機車',ARRAY['每天上班騎','紅綠燈前卡位','下雨很麻煩','停車很方便']::text[],ARRAY['要加 95 無鉛','待轉格讓人抓狂']::text[],ARRAY['換電站要排隊','沒有引擎聲']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (73,'生活','iPhone','Android',ARRAY['每個人手上都有','換一支要很多錢','愛用的人會互相吵','相機是重點']::text[],ARRAY['藍色氣泡會被笑','充電線改了好幾次']::text[],ARRAY['廠牌多到選不完','可以自己裝很多東西']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (74,'生活','貓','狗',ARRAY['常常比人還有地位','養了就是一輩子','掉毛很煩','照片比自己多']::text[],ARRAY['高冷不理人','會把杯子推下桌']::text[],ARRAY['每天要帶出門','看到主人會搖尾巴']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (75,'生活','大樓','透天',ARRAY['每個人都有買房夢','房貸要繳很久','鄰居很重要','社區群組很熱鬧']::text[],ARRAY['有管理員收包裹','電梯常遇到人']::text[],ARRAY['樓梯爬到累','車子能停自家門口']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (76,'生活','颱風假','補班日',ARRAY['大家討厭等公告','前一晚都在等新聞','隔天上不上班很重要','朋友都在群組討論']::text[],ARRAY['半夜才宣布最生氣','賣場泡麵都被買光']::text[],ARRAY['週末要去上班','連假前的代價']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (77,'生活','健保卡','悠遊卡',ARRAY['錢包裡一定有','弄丟要補辦','常常放在同一個夾層','出門會想到它']::text[],ARRAY['看醫生才拿出來','長輩一定有帶']::text[],ARRAY['搭捷運嗶一下','超商也能用']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (78,'生活','牙醫','中醫',ARRAY['有人很怕去','常常要連看好幾次','需要預約','看完會有衛教']::text[],ARRAY['機器聲音就開始緊張','洗牙半年一次']::text[],ARRAY['把脈說你濕氣重','要吃藥粉']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (79,'生活','洗衣機','烘衣機',ARRAY['家裡都很需要','買的時候很貴','衣服放進去就不管了','下雨天特別有感']::text[],ARRAY['要倒洗衣精','脫水轉到整台在抖']::text[],ARRAY['棉被烘了很舒服','衣服不小心會縮水']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (80,'生活','冷氣','電風扇',ARRAY['夏天的救星','省電很重要','一開就不想關','半夜會調定時']::text[],ARRAY['電費單才知道多少錢','遙控器老是找不到']::text[],ARRAY['會一直搖頭','會把紙吹走']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (81,'生活','牛仔褲','運動褲',ARRAY['衣櫃必有','穿久有感情','舒適很重要','出門一件搭什麼都行']::text[],ARRAY['洗久了會褪色','腰圍常常不夠']::text[],ARRAY['鬆緊帶很方便','放假最常穿']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (82,'生活','房東','室友',ARRAY['一開始都很客氣','常常要傳訊息討論','租屋時最重要','關係好壞差很多']::text[],ARRAY['每月要付錢給他','押金常常要不回來']::text[],ARRAY['你不洗碗他也會生氣','會一起分攤水電']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (83,'生活','停車格','收費站',ARRAY['開車人最在意','常常找很久','要花一點錢','連假附近都很多車']::text[],ARRAY['繞了三圈還沒有','路邊有單子就要繳']::text[],ARRAY['現在只剩電子了','快過年會有車潮']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (84,'生活','大賣場','超市',ARRAY['週末家人常一起去','購物車會裝很滿','試吃也有吸引力','會員卡要記得帶']::text[],ARRAY['一次買一大箱','停車場大到迷路']::text[],ARRAY['常常就在住家樓下','下班順便買個菜']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (85,'爭議','北部粽','南部粽',ARRAY['端午節一定吵','家人都有自己的堅持','吃完有點飽','要配甜辣醬也有人吵']::text[],ARRAY['油飯蒸出來的','外皮偏深色']::text[],ARRAY['水煮軟綿綿的','粽葉味更重']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (86,'爭議','台北','新北',ARRAY['通勤一族很有感','跨區卻常被搞混','大家都說房價高','捷運連著很方便']::text[],ARRAY['自稱天龍國','101 在這裡']::text[],ARRAY['很多人出生就被說不是這裡','板橋是重心']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (87,'爭議','台南','高雄',ARRAY['南部人最愛比','誰才是南部中心','吃的方面意見很多','市長選舉也會吵']::text[],ARRAY['說自己才是府城','甜味被虧最多']::text[],ARRAY['港口和捷運都有','說自己才是第二都']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (88,'爭議','鳳梨披薩','香菜',ARRAY['只要提到就有人生氣','愛的人很愛','討厭的人覺得是異端','餐廳要問過才敢上']::text[],ARRAY['水果放在起司上','義大利人會生氣']::text[],ARRAY['有人聞到像肥皂','香味很特別']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (89,'爭議','薪水公開','生日不收禮',ARRAY['聽了很多人會有意見','朋友圈會吵','常在 Threads 討論','有人覺得這樣最好']::text[],ARRAY['知道同事領多少','老闆一定不開心']::text[],ARRAY['朋友反而覺得尷尬','省錢也省心']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (90,'爭議','AA 制','男生請客',ARRAY['第一次約會才知道','網路每年都在吵','講到錢容易尷尬','有人覺得這是態度']::text[],ARRAY['一人一半最公平','LINE 轉帳就好']::text[],ARRAY['有人覺得應該的','帳單來了伸手']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (91,'爭議','先洗澡再吃','先吃再洗澡',ARRAY['每個家規矩都不同','講到這個有人要吵','小時候爸媽管很多','一回家的第一個決定']::text[],ARRAY['一身乾淨才舒服','洗完再放鬆']::text[],ARRAY['肚子不等人','吃飽才有力氣']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (92,'爭議','甜豆花','鹹豆花',ARRAY['傳統吃法各自堅持','外國朋友很驚訝','南北差很多','要加料大家意見不同']::text[],ARRAY['花生粉圓最搭','糖水要夠']::text[],ARRAY['常配油條一起吃','加醬油和蔥']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (93,'應景','雙11','雙12',ARRAY['購物車一直滿','年底最會買','運費都想湊免運','折扣規則算到頭痛']::text[],ARRAY['十一月最會燒錢','光棍節起家']::text[],ARRAY['十二月再買一次','電商說這次才最低']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (94,'應景','跨年','聖誕節',ARRAY['年底最熱鬧','情侶會約出去','街上燈飾很多','餐廳都要提早訂']::text[],ARRAY['看煙火要提前卡位','倒數到零的瞬間']::text[],ARRAY['要交換禮物','紅綠兩色最常見']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (95,'應景','過年','中元節',ARRAY['家家戶戶都要忙','老人家很重視','要準備很多供品','吃的特別多']::text[],ARRAY['紅包最重要','回家被問有沒有對象']::text[],ARRAY['農曆七月不能亂來','要去廟裡拜拜']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (96,'應景','中秋節','端午節',ARRAY['會跟家人聚','吃的很有代表性','連假就想回家','超商都推相關商品']::text[],ARRAY['烤肉烤到整條街','月亮很圓']::text[],ARRAY['划龍舟很熱鬧','立蛋是傳統']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (97,'應景','母親節','父親節',ARRAY['餐廳會很多人','要打電話回家','禮物很難選','常常全家一起吃飯']::text[],ARRAY['康乃馨賣最好','五月的大事']::text[],ARRAY['八月八號','常常送刮鬍刀']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (98,'應景','開學','放暑假',ARRAY['學生最有感','家長準備很多東西','文具會出現促銷','小孩作息會改']::text[],ARRAY['收心很難','書包又重起來了']::text[],ARRAY['三個月不用見老師','作業拖到最後']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (99,'應景','世界盃','奧運',ARRAY['幾年才有一次','半夜看比賽','辦公室都在討論','賽事大家都變專家']::text[],ARRAY['足球大賽','一群人喊射門']::text[],ARRAY['棒球羽球都能看','國旗上升會想哭']::text[]) on conflict (id) do nothing;
insert into public.uc_pairs (id,cat,a,b,s,al,bl) values (100,'應景','寒假','暑假',ARRAY['學生期待','常常有很多作業','補習班還是會開','爸媽覺得太長']::text[],ARRAY['要過年吃很多','只有幾週']::text[],ARRAY['比較長','太陽大到不想出門']::text[]) on conflict (id) do nothing;
insert into public.uc_personas (name,tmpl) values ('阿翔',ARRAY['{l}，我阿公也這樣講','{l}，不信你問我阿公']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('小美不美',ARRAY['{l}欸，不要笑','{l}，我朋友說的，不是我']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('Kevin',ARRAY['{l}，you know','honestly，{l}']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('下班了沒',ARRAY['{l}，可以下班了嗎','{l}。我先打卡了']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('貓奴阿凱',ARRAY['{l}，我家貓也同意','{l}，貓比我還懂']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('股市韭菜',ARRAY['{l}，比我的持股穩','{l}，跟我的帳戶一樣讓人想哭']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('加班狗',ARRAY['講真的，{l}，我累了','{l}，這句是在公司廁所打的']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('早八受害者',ARRAY['{l}，我只醒了一半','{l}，我要趕去上課了']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('超商店長',ARRAY['{l}，櫃檯看多了','{l}，要不要順便集點']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('珍奶半糖',ARRAY['{l}，我說的是半糖的實話','{l}，甜度正常']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('剛分手',ARRAY['{l}，跟那個人一樣','{l}。不講了，我又想哭']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('房貸戰士',ARRAY['{l}，還有三十年','{l}，但我要先繳房貸']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('夜衝仔',ARRAY['{l}啦，不信你去問','{l}，走，上山講']::text[]) on conflict (name) do nothing;
insert into public.uc_personas (name,tmpl) values ('永遠的路人',ARRAY['我路過的，{l}','{l}，我沒有要參與喔']::text[]) on conflict (name) do nothing;
insert into public.uc_aliases (word,alias) values ('7-11','711') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('7-11','小七') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('7-11','seven') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('全家','全家便利商店') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('全家','family') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('WFH','居家辦公') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('WFH','在家工作') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('Excel','試算表') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('PPT','簡報') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('PPT','powerpoint') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('珍珠奶茶','珍奶') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('珍珠奶茶','波霸奶茶') on conflict do nothing;
insert into public.uc_aliases (word,alias) values ('自助餐','便當自助餐') on conflict do nothing;
