-- 誰是臥底：先不用 AI 審核。通過關鍵字過濾的句子直接上線，2 人檢舉就下架。
-- 之後要啟用 AI 審核時，把預設值改回 'pending'，再部署 undercover-moderate。
alter table public.uc_sentences alter column status set default 'live';
update public.uc_sentences set status = 'live' where status = 'pending';

create or replace function public.uc_report(p_player uuid, p_sid bigint) returns jsonb
language plpgsql volatile security definer set search_path = public as $$
declare n int;
begin
  if p_player is null or not exists (select 1 from uc_sentences where id = p_sid) then return jsonb_build_object('ok',false); end if;
  insert into uc_reports (sid, player) values (p_sid, p_player) on conflict do nothing;
  select count(*) into n from uc_reports where sid = p_sid;
  if n >= 2 then update uc_sentences set status = 'hidden' where id = p_sid and status in ('pending','live'); end if;
  return jsonb_build_object('ok',true);
end $$;
