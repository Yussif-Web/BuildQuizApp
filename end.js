/*eslint-env es6*/
const username = document.getElementById("username");
const saveScoreButton = document.getElementById(saveScoreBtn);
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;
    
username.addEventListener("keyup", () => {
    saveHighScore.disabled = !username.value;
 });
saveHighScore = 0 =>{
    console.log("clicked the save button");
    e.preventDefault();
}

