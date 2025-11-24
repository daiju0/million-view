// 簡易ニュース（テスト用）Cloudflare 経由で返す

export async function onRequest() {
  try {
    return new Response(
      JSON.stringify({
        items: [
          { title: "ニュース１（テスト）" },
          { title: "ニュース２（テスト）" }
        ]
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: "failed" }),
      { status: 500 }
    );
  }
}
