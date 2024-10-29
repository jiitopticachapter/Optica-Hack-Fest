const username = document.getElementById(`username`);
const saveScoreBtn = document.getElementById(`saveScoreBtn`);
const finalScore = document.getElementById(`finalScore`);
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const mostRecentScore = localStorage.getItem('mostRecentScore');
const MAX_HIGH_SCORES = 5;

finalScore.innerText = `YOUR SCORE : ${mostRecentScore}`;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort( (a, b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    window.location.assign("/");

    console.log(highScores);
    
};