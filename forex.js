// USD/JPY 為替レートを取得して表示する（APIキー不要）

async function loadForex() {
  try {
    const res = await fetch(
      "https://query1.finance.yahoo.com/v7/finance/quote?symbols=USDJPY=X"
    );
    const data = await res.json();
    const price = data.quoteResponse.result[0].regularMarketPrice;

    document.getElementById("forex").textContent =
      `USD/JPY：${price} 円`;
  } catch (e) {
    document.getElementById("forex").textContent =
      "取得できませんでした";
  }
}

// 10分ごとに自動更新
loadForex();
setInterval(loadForex, 600000);
