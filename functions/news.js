export async function onRequest(context) {
  try {
    const res = await fetch(
      "https://newsdata.io/api/1/news?apikey=pub_51964e3b4c1b8cc86e36&q=japan"
    );
    const data = await res.json();
    const items =
      data.results?.map((a) => ({ title: a.title })) ?? [];
    return Response.json({ items });
  } catch (e) {
    return Response.json({ error: "failed" }, { status: 500 });
  }
}

