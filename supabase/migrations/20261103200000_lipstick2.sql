insert into public.lb_games (slug, min_score, max_score, levels) values ('lipstick2', 0, 100, 20) on conflict (slug) do nothing;
