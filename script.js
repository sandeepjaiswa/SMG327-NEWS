 const apiKey = "YOUR_NEWS_API_KEY"; // c4a227022ec1420f88352cf2664548c1
const newsList = document.getElementById("news-list");

async function fetchNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
        const data = await response.json();

        newsList.innerHTML = ""; // पहले की न्यूज़ हटाएं

        data.articles.forEach(article => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
            newsList.appendChild(li);
        });
    } catch (error) {
        newsList.innerHTML = "<li>⚠ न्यूज़ लोड करने में समस्या हो रही है।</li>";
    }
}

// हर 10 सेकंड में न्यूज़ अपडेट करें
fetchNews();
setInterval(fetchNews, 10000);

const newsList = document.getElementById("news-list");
const newsData = [
    "🚀 चंद्रयान-4 की तैयारी शुरू!",
    "💰 शेयर मार्केट में तेजी",
    "⚽ भारत ने फाइनल में जगह बनाई"
];
function loadNews() {
    newsList.innerHTML = "";
    newsData.forEach(news => {
        let li = document.createElement("li");
        li.textContent = news;
        newsList.appendChild(li);
    });
}
setTimeout(loadNews, 2000);

// क्रिकेट स्कोर लोड (API से कनेक्ट कर सकते हैं)
const scoreDiv = document.getElementById("score");
function loadCricketScore() {
    scoreDiv.innerHTML = "IND 250/3 (20 ov)";
}
setTimeout(loadCricketScore, 3000);
