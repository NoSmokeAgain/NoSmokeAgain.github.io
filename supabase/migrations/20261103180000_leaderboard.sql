-- 三分鐘遊樂場：共用排行榜（貼到 Supabase SQL Editor 執行一次）
create table if not exists public.lb_games (
  slug text primary key,
  min_score int not null default 0,
  max_score int not null default 100,
  levels int not null default 0
);
create table if not exists public.lb_scores (
  id bigint generated always as identity primary key,
  game text not null references public.lb_games(slug) on delete cascade,
  player uuid not null,
  nickname text not null,
  score int not null,
  created_at timestamptz not null default now()
);
create index if not exists lb_scores_rank on public.lb_scores (game, score desc, created_at);
create index if not exists lb_scores_player on public.lb_scores (player, created_at desc);
create index if not exists lb_scores_time on public.lb_scores (created_at);
create table if not exists public.lb_blocked_words (word text primary key);

insert into public.lb_games (slug, min_score, max_score, levels) values ('lipstick', 0, 100, 10)
  on conflict (slug) do nothing;
insert into public.lb_blocked_words (word) values
  ('幹你'),('幹妳'),('操你'),('操妳'),('雞掰'),('機掰'),('靠北'),('靠杯'),('婊子'),('賤人'),('妓女'),('去死'),('智障'),('白癡'),('fuck'),('shit'),('bitch')
  on conflict (word) do nothing;

alter table public.lb_games enable row level security;
alter table public.lb_scores enable row level security;
alter table public.lb_blocked_words enable row level security;
revoke all on public.lb_games, public.lb_scores, public.lb_blocked_words from anon, authenticated;

create or replace function public.lb_week_start() returns timestamptz
language sql stable set search_path = public as $$
  select date_trunc('week', now() at time zone 'Asia/Taipei') at time zone 'Asia/Taipei'
$$;

-- 每位玩家只算區間內最好的一筆；同分時先達成者在前
create or replace function public.lb_ranked(p_game text, p_period text)
returns table (rank bigint, player uuid, nickname text, score int, created_at timestamptz)
language sql stable security definer set search_path = public as $$
  with best as (
    select distinct on (s.player) s.player, s.nickname, s.score, s.created_at
    from lb_scores s
    where s.game = p_game
      and (p_period <> 'week' or s.created_at >= lb_week_start())
    order by s.player, s.score desc, s.created_at
  )
  select row_number() over (order by b.score desc, b.created_at), b.player, b.nickname, b.score, b.created_at
  from best b
$$;

create or replace function public.lb_my_rank(p_game text, p_period text, p_player uuid)
returns table (my_rank bigint, my_score int, total bigint, beat_pct int)
language sql stable security definer set search_path = public as $$
  with r as (select * from lb_ranked(p_game, p_period)),
       me as (select * from r where player = p_player),
       n as (select count(*) c from r)
  select me.rank, me.score, n.c,
         case when n.c <= 1 then 0
              else floor((n.c - me.rank)::numeric * 100 / (n.c - 1))::int end
  from n left join me on true
$$;

create or replace function public.lb_top(p_game text, p_period text, p_player uuid, p_limit int default 20)
returns table (rank bigint, nickname text, score int, is_me boolean)
language sql stable security definer set search_path = public as $$
  select r.rank, r.nickname, r.score, r.player = p_player
  from lb_ranked(p_game, p_period) r
  order by r.rank
  limit least(greatest(coalesce(p_limit, 20), 1), 50)
$$;

create or replace function public.lb_submit(p_game text, p_player uuid, p_nickname text, p_score int, p_details int[] default null)
returns text
language plpgsql security definer set search_path = public as $$
declare g lb_games; n text; lowered text;
begin
  select * into g from lb_games where slug = p_game;
  if not found then return 'bad_game'; end if;
  if p_player is null or p_score is null or p_score < g.min_score or p_score > g.max_score then return 'bad_score'; end if;
  n := btrim(regexp_replace(coalesce(p_nickname, ''), '[[:cntrl:]]', '', 'g'));
  if char_length(n) < 1 or char_length(n) > 8 then return 'bad_name'; end if;
  lowered := lower(regexp_replace(n, '[[:space:][:punct:]]', '', 'g'));
  if exists (select 1 from lb_blocked_words w where position(w.word in lowered) > 0) then return 'bad_name'; end if;
  if g.levels > 0 then
    if p_details is null or coalesce(array_length(p_details, 1), 0) <> g.levels then return 'bad_score'; end if;
    if exists (select 1 from unnest(p_details) v where v is null or v < g.min_score or v > g.max_score) then return 'bad_score'; end if;
    if abs((select avg(v) from unnest(p_details) v) - p_score) > 1 then return 'bad_score'; end if;
  end if;
  if exists (select 1 from lb_scores s where s.player = p_player and s.created_at > now() - interval '30 seconds') then return 'too_fast'; end if;
  if (select count(*) from lb_scores s where s.created_at > now() - interval '1 minute') >= 120 then return 'too_busy'; end if;
  insert into lb_scores (game, player, nickname, score) values (p_game, p_player, n, p_score);
  return 'ok';
end $$;

revoke all on function public.lb_week_start(), public.lb_ranked(text, text), public.lb_my_rank(text, text, uuid), public.lb_top(text, text, uuid, int), public.lb_submit(text, uuid, text, int, int[]) from public, anon, authenticated;
grant execute on function public.lb_my_rank(text, text, uuid), public.lb_top(text, text, uuid, int), public.lb_submit(text, uuid, text, int, int[]) to anon, authenticated;
