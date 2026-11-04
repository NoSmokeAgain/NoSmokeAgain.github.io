-- 桌上過關斬將：desk-fight 是分數榜；desk-fight-time 的分數 = 7200 - 通關秒數，越快越高
insert into public.lb_games (slug, min_score, max_score, levels) values ('desk-fight', 0, 999999, 0), ('desk-fight-time', 1, 7200, 0)
  on conflict (slug) do nothing;
