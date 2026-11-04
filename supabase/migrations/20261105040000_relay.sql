-- 大隊接力：分數 = 100000 - 百分之一秒，低於 40 秒（96000 分以上）視為不合理
insert into public.lb_games (slug, min_score, max_score, levels) values ('relay', 1, 96000, 0)
  on conflict (slug) do nothing;
