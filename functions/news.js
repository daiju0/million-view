export async function onRequest() {
  try {
    const res = await fetch(
      "https://www.nhk.or.jp/rss/news/cat0.xml"
    );

    const text = await res.text();

    return new Response(text, {
      headers: { "Content-Type": "application/xml; charset=utf-8" }
    });

  } catch (e) {
    return new Response(
      JSON.stringify({ error: "failed" }),
      { status: 500 }
    );
  }
}
