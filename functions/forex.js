export async function onRequest() {
  try {
    const res = await fetch("https://www3.nhk.or.jp/rss/news/cat0.xml");
    const xml = await res.text();

    const items = [...xml.matchAll(/<title><!\[CDATA\[(.*?)\]\]><\/title>/g)]
      .slice(1, 6)
      .map(m => m[1]);

    return new Response(
      JSON.stringify({ news: items }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: "failed" }),
      { status: 500 }
    );
  }
}
