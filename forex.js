// USD/JPY を取得して表示（APIキー不要 & CORS対応）

async function loadForex() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();
    const price = data.rates.JPY;

    document.getElementById("forex").textContent =
      `USD/JPY: ${price} 円`;
  } catch (e) {
    document.getElementById("forex").textContent =
      "取得できませんでした";
  }
}

// 10分ごとに更新
loadForex();
setInterval(loadForex, 600000);
