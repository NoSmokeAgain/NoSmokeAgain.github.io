insert into public.lb_games (slug, min_score, max_score, levels) values ('lipstick2', 0, 100, 10)
  on conflict (slug) do update set levels = 10;

create or replace function public.lb_context(p_game text, p_period text, p_player uuid)
returns table (rank bigint, nickname text, score int, is_me boolean)
language sql stable security definer set search_path = public as $$
  with r as (select * from lb_ranked(p_game, p_period)),
       me as (select r.rank from r where r.player = p_player)
  select r.rank, r.nickname, r.score, r.player = p_player
  from r, me
  where r.rank between me.rank - 2 and me.rank + 2
  order by r.rank
$$;

revoke all on function public.lb_context(text, text, uuid) from public, anon, authenticated;
grant execute on function public.lb_context(text, text, uuid) to anon, authenticated;
