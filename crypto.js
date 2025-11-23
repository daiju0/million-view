// BTC/JPY を取得して表示（APIキー不要 & CORS対応）

async function loadCrypto() {
  try {
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice/JPY.json");
    const data = await res.json();
    const price = data.bpi.JPY.rate_float.toFixed(0);

    document.getElementById("crypto").textContent =
      `BTC/JPY: ${price} 円`;
  } catch (e) {
    document.getElementById("crypto").textContent =
      "取得できませんでした";
  }
}

// 10分ごとに更新
loadCrypto();
setInterval(loadCrypto, 600000);
