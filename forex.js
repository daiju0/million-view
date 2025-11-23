// USD/JPY 為替レートを取得して表示する（APIキー不要）

async function loadForex() {
  try {
    const res = await fetch("https://api.exchangerate.host/latest?base=USD&symbols=JPY");

    const data = await res.json();
    const price = data.rates.JPY;

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
