// फेक न्यूज़ अपडेट (API से जोड़ सकते हैं)
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
