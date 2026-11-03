insert into public.lb_games (slug, min_score, max_score, levels) values ('lipstick2', 0, 100, 10)
  on conflict (slug) do update set levels = 10;
