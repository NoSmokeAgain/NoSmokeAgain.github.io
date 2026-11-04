-- 大隊接力改四棒 400 公尺，開新榜。分數 = 100000 - 百分之一秒，低於 15 秒視為不合理
insert into public.lb_games (slug, min_score, max_score, levels) values ('relay-400', 1, 98500, 0)
  on conflict (slug) do nothing;
