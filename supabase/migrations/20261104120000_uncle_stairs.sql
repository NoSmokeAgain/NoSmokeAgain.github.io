-- 大叔下樓梯：分數是樓層，沒有分關
insert into public.lb_games (slug, min_score, max_score, levels) values ('uncle-stairs', 1, 9999, 0)
  on conflict (slug) do nothing;
