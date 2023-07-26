const guess = document.getElementById("guess");
const report = document.getElementById("report");

const MAXNUM = 100;
let secret;

function loadGame() {
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * (MAXNUM+1));
    report.innerHTML= secret;

}

function makeGuess(){

}