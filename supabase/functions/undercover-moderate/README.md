# 句子審核

部署與設定（做一次）：

    supabase functions deploy undercover-moderate --no-verify-jwt
    supabase secrets set ANTHROPIC_API_KEY=你的金鑰

沒設定金鑰時，句子會停在「審核中」，不會給其他玩家看，遊戲繼續用系統角色。
