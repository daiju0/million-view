// ✅ Cloudflare が USD/JPY を取得して返す
export async function onRequest() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();
    const price = data.rates.JPY;

    return new Response(
      JSON.stringify({ price }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: "failed" }),
      { status: 500 }
    );
  }
}
