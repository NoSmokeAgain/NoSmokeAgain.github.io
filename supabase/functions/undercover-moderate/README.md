# 句子審核

部署與設定（做一次）：

    supabase functions deploy undercover-moderate --no-verify-jwt
    supabase secrets set ANTHROPIC_API_KEY=你的金鑰

沒設定金鑰時，句子會停在「審核中」，不會給其他玩家看，遊戲繼續用系統角色。

目前未啟用：句子通過關鍵字過濾後直接上線。啟用時要先執行：

    alter table public.uc_sentences alter column status set default 'pending';

並在 undercover/index.html 送出句子後呼叫這個函式。
