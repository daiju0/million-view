// USD/JPY を Cloudflare がサーバー側で取得して返す

export async function onRequest() {
  const res = await fetch(
    "https://open.er-api.com/v6/latest/USD"
  );
  const data = await res.json();

  const price = data.rates.JPY;

  return new Response(
    JSON.stringify({ usd_jpy: price }),
    { headers: { "Content-Type": "application/json" } }
  );
}
