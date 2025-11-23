// Cloudflare Functions の /news から取得して表示

async function loadNews() {
  try {
    const res = await fetch("/news"); // ← ここが重要！
    const xml = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "application/xml");
    const items = [...doc.querySelectorAll("item")].slice(0, 10);

    document.getElementById("news-list").innerHTML =
      items.map(item => `
        <li>
          <a href="${item.querySelector("link").textContent}" target="_blank">
            ${item.querySelector("title").textContent}
          </a>
          <div style="font-size:12px;color:#555;">
            ${item.querySelector("pubDate").textContent}
          </div>
        </li>
      `).join("");

  } catch (e) {
    document.getElementById("news-list").innerHTML = "取得できませんでした";
  }
}

loadNews();
setInterval(loadNews, 600000);
