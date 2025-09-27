let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeScoreBox = document.getElementById("home-score-box");
let guestScoreBox = document.getElementById("guest-score-box");

let homeScoreNum = 0;
let guestScoreNum = 0;

function highlightWinner() {
  if (homeScoreNum > guestScoreNum) {
    homeScoreBox.style.border = "2px solid green";
    guestScoreBox.style.border = "none";
  } else if (guestScoreNum > homeScoreNum) {
    guestScoreBox.style.border = "2px solid green";
    homeScoreBox.style.border = "none";
  } else {
    homeScoreBox.style.border = "2px solid green";
    guestScoreBox.style.border = "2px solid green";
  }
}

function add1home() {
  homeScoreNum += 1;
  homeScore.textContent = homeScoreNum;
  highlightWinner();
}

function add2home() {
  homeScoreNum += 2;
  homeScore.textContent = homeScoreNum;
  highlightWinner();
}

function add3home() {
  homeScoreNum += 3;
  homeScore.textContent = homeScoreNum;
  highlightWinner();
}

function add1guest() {
  guestScoreNum += 1;
  guestScore.textContent = guestScoreNum;
  highlightWinner();
}

function add2guest() {
  guestScoreNum += 2;
  guestScore.textContent = guestScoreNum;
  highlightWinner();
}

function add3guest() {
  guestScoreNum += 3;
  guestScore.textContent = guestScoreNum;
  highlightWinner();
}

function newGame() {
  homeScoreNum = 0;
  guestScoreNum = 0;
  homeScore.textContent = homeScoreNum;
  guestScore.textContent = guestScoreNum;
}
