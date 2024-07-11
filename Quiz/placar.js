const HighScoreList = document.getElementById("highScoreList");
const HighScores = JSON.parse(localStorage.getItem('highScores')) || [];

HighScoreList.innerHTML = HighScores
.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
 .join("");