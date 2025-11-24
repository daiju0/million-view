// ✅ 最新ニュースを Cloudflare Functions 経由で返す
export async function onRequest() {
  try {
    const res = await fetch(
      "https://www3.nhk.or.jp/rss/news/cat0.xml"
    );

    const xml = await res.text();

    // 最低限のパース（タイトルだけ抜く）
    const items = [...xml.matchAll(/<title>(.*?)<\/title>/g)]
      .slice(2, 7) // 最初の2件はサイト情報なので除外、5件だけ取得
      .map(m => m[1]);

    return new Response(
      JSON.stringify({ news: items }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (e) {
    return new Response(
      JSON.stringify({ error: "failed" }),
      { status: 500 }
    );
  }
}
