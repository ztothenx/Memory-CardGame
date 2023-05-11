const username = document.getElementById("username");
const saveScore = document.getElementById("saveScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const result = document.getElementById("result");

const highScore = JSON.parse(localStorage.getItem('highScore')) || []


result.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("clicked the save button!");
    e.proventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScore.push(moves)

    highScore.sort((a,b) => {
        return b.moves - a.moves
    })

    highScore.splice(5)

    localStorage.setItem('highScore', JSON.stringify(highScore))
    window.location.assign('/')
};