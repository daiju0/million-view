export async function onRequest(context) {
  try {
    const res = await fetch(
      "https://api.exchangerate.host/latest?base=USD&symbols=JPY"
    );
    const data = await res.json();
    const price = data.rates?.JPY;
    return Response.json({ price });
  } catch (e) {
    return Response.json({ error: "failed" }, { status: 500 });
  }
}
