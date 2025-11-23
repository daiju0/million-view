// 最新ニュースを取得して表示（APIキー不要・自動更新）

async function loadNews() {
  try {
    const res = await fetch(
      "https://api.exchangerate.host/latest?base=USD"
    );

    const data = await res.json();
    const now = new Date().toLocaleString("ja-JP");

    document.getElementById("news-list").innerHTML = `
      <div class="news-item">
        <a href="#" target="_blank">速報：為替最新更新（${now}）</a>
      </div>
      <div class="news-item">
        <a href="#" target="_blank">現在のUSD/JPYは ${data.rates.JPY} 円</a>
      </div>
    `;
  } catch (e) {
    document.getElementById("news-list").innerHTML = "取得できませんでした";
  }
}

// 初回実行
loadNews();

// 10分ごとに自動更新
setInterval(loadNews, 600000);
