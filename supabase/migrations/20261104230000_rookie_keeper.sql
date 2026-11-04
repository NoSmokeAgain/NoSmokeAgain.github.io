-- 菜鳥園長：分數制，沒有分關；今日挑戰另開一個榜
insert into public.lb_games (slug, min_score, max_score, levels) values
  ('rookie-keeper', 1, 9999999, 0),
  ('rookie-keeper-daily', 1, 9999999, 0)
  on conflict (slug) do nothing;

-- 排行榜新增 day 區間（台北時間今天）
create or replace function public.lb_ranked(p_game text, p_period text)
returns table (rank bigint, player uuid, nickname text, score int, created_at timestamptz)
language sql stable security definer set search_path = public as $$
  with best as (
    select distinct on (s.player) s.player, s.nickname, s.score, s.created_at
    from lb_scores s
    where s.game = p_game
      and (p_period <> 'week' or s.created_at >= lb_week_start())
      and (p_period <> 'day' or s.created_at >= (date_trunc('day', now() at time zone 'Asia/Taipei') at time zone 'Asia/Taipei'))
    order by s.player, s.score desc, s.created_at
  )
  select row_number() over (order by b.score desc, b.created_at), b.player, b.nickname, b.score, b.created_at
  from best b
$$;

-- 每局結束記錄，用來校正難度
create table if not exists public.lb_plays (
  id bigint generated always as identity primary key,
  game text not null references public.lb_games(slug) on delete cascade,
  level int not null,
  score int not null,
  seconds int not null,
  created_at timestamptz not null default now()
);
create index if not exists lb_plays_game on public.lb_plays (game, created_at);
alter table public.lb_plays enable row level security;
revoke all on public.lb_plays from anon, authenticated;

create or replace function public.lb_log_play(p_game text, p_level int, p_score int, p_seconds int)
returns void
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from lb_games where slug = p_game) then return; end if;
  if p_level is null or p_score is null or p_seconds is null
     or p_level < 1 or p_level > 999 or p_score < 0 or p_seconds < 0 or p_seconds > 86400 then return; end if;
  if (select count(*) from lb_plays where created_at > now() - interval '1 minute') >= 300 then return; end if;
  insert into lb_plays (game, level, score, seconds) values (p_game, p_level, p_score, p_seconds);
end $$;
revoke all on function public.lb_log_play(text, int, int, int) from public, anon, authenticated;
grant execute on function public.lb_log_play(text, int, int, int) to anon, authenticated;
