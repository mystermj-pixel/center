// Supabase 무료 프로젝트가 1주일 비활성으로 일시정지되지 않도록 주기적으로 호출합니다 (vercel.json의 crons).
export default async function handler(req, res) {
  try {
    const r = await fetch('https://avqkugfnrdxufadfdqhy.supabase.co/rest/v1/rpc/ping', {
      method: 'POST',
      headers: { apikey: 'sb_publishable_rAvgFL6qZ43ijCg8b-2Bag_-0Cr_GlS', 'Content-Type': 'application/json' },
      body: '{}'
    });
    res.status(200).json({ ok: r.ok, status: r.status, at: new Date().toISOString() });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
}
