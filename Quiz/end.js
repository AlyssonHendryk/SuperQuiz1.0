const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore")
const mostRecentScore = localStorage.getItem('mostRecentScore');
const maxHighScores = 5;


const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicou no bottom");
    e.preventDefault()

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    console.log(highScores);

    localStorage.setItem('highScores',JSON.stringify(highScores));
};