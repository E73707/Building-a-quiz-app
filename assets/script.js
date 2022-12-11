// Variables
var startEL = document.querySelector("#start");
var gameScreen = document.querySelector("#game-screen");
var startScreen = document.querySelector("#start-screen");
var highScoresEl = document.querySelector("#highscore");
var highScoresEl2 = document.querySelector("#highscore2");
var timerEL = document.querySelector("#time");
var gameOverEL = document.querySelector("#game-over-screen");
var newHighScore = document.querySelector("#new-high-score");
var bodyEl = document.querySelector("body");
var homeButtonEL = document.querySelector("#return-to-home");
var returnHomeEl = document.querySelector("#return-home");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");
var question = document.querySelector("#question");
var currentScoreEL = document.querySelector("#current-score");
var submitBtn = document.querySelector("#submit");
var highScore2 = document.querySelector("#highscore2");
var highScore3 = document.querySelector("#highscore3");
var initialsEl1 = document.querySelector("#submit-form1").value;
var initialsEl2 = document.querySelector("#submit-form2").value;
var rank1El = document.querySelector("#rank-1");
var rank2El = document.querySelector("#rank-2");
var rank3El = document.querySelector("#rank-3");
var rankingEl = document.querySelector("#leaderboard");
var highScoreEl = document.querySelector(".highscores");
var gameOverScoreEl = document.querySelector("#gO");

// if // empty > // = set stu scores

var highStuScores =
  JSON.parse(localStorage.getItem("highStuScores")) === "null"
    ? (highStuScores = localStorage.setItem(
        "highStuScores",
        JSON.stringify(highStuScores)
      ))
    : (highStuScores = {});

function getStuScores() {
  JSON.parse(window.localStorage.getItem("highStuScores"));
}

function setStuScores() {
  window.localStorage.setItem("highStuScores", JSON.stringify(highStuScores));
}

console.log(localStorage);

let questionList = [
  (q1 = {
    question: "HTML stands for",
    a: "HighText Machine Language",
    b: "HyperText and links Markup Language",
    c: "HyperText Markup Language",
    d: "None of these",
    answer: "c",
  }),
  (q2 = {
    question: "The correct sequence of HTML tags for starting a webpage is -",
    a: "Head, Title, HTML, body",
    b: "HTML, Body, Title, Head",
    c: "Body, Head, Title, HTML",
    d: "HTML, Head, Title, Body",
    answer: "d",
  }),
  (q3 = {
    question:
      "Which of the following element is responsible for making the text bold in HTML?",

    a: "pre",
    b: "a",
    c: "b",
    d: "br",
    answer: "c",
  }),
  (q4 = {
    question:
      "Which of the following tag is used to insert a line-break in HTML?",

    a: "br",
    b: "a",
    c: "pre",
    d: "b",
    answer: "a",
  }),
  (q5 = {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",

    a: "var",
    b: "let",
    c: "both a and b",
    d: "none of the above",
    answer: "c",
  }),
  (q6 = {
    question: "CSS stands for",

    a: "Cascade style sheets",
    b: "Color and style sheets",
    c: "Cascading style sheets",
    d: "None of the above",
    answer: "c",
  }),
  (q7 = {
    question:
      "Which of the following is the correct syntax for referring the external style sheet?",

    a: "style src = example.css",
    b: 'style src = "example.css" ',
    c: "stylesheet example.css /stylesheet",
    d: 'link rel="stylesheet" type="text/css" href="example.css"',
    answer: "d",
  }),
  (q8 = {
    question: "Javascript is an _______ language?",

    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    answer: "b",
  }),
  (q9 = {
    question: "Which one of the following also known as Conditional Expression",

    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    answer: "d",
  }),
  (q10 = {
    question: "In JavaScript, what is a block of statement?",

    a: "Conditional block",
    b: "block that combines a number of statements into a single compound statement",
    c: "both conditional block and a single statement",
    d: "block that contains a single statement",
    answer: "b",
    submit: "Submit",
  }),
];

let highScore = 0;
// localStorage.setItem("highscore", highScore);
let currentScore = 0;
let questionCount = 1;
let currentQuestion = 0;
let timerCount = 60;
let homeBtn = false;

// Changes screen to game screen and commences game
function startGame() {
  if (localStorage.length == 0) {
    setStuScores();
  }
  event.preventDefault();
  submitBtn.style.display = "none";
  homeBtn = false;
  highScore = localStorage.getItem("highscore", highScore);
  highStuScores = localStorage.getItem("highStuScores", highStuScores);
  currentQuestion = 0;
  questionCount = 1;
  currentScore = 0;
  timerCount = 60;
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  currentScoreEL.innerHTML = `Current Score: ${currentScore}`;
  if (highScore == 0 || highScore == "undefined") {
    console.log("tru");
  } else {
    highScoreEl.innerHTML = `Highscore: ${highScore}`;
  }
  var timerFunc = setInterval(function () {
    if (timerCount > 0) {
      timerCount = timerCount - 1;
      timerEL.innerHTML = `Time remaining : ${timerCount}`;
    }
    if (timerCount <= 0) {
      if (currentScore >= highScore || highScore == "undefined") {
        clearInterval(timerFunc);
        highScore = currentScore;
        localStorage.setItem("highscore", highScore);
        questionCount = 1;
        currentQuestion = 0;
        timerCount = 60;
        bodyEl.style.backgroundColor = "green";
        gameScreen.style.display = "none";
        newHighScore.style.display = "inline";
      } else {
        clearInterval(timerFunc);
        gameScreen.style.display = "none";
        gameOverEL.style.display = "block";
        bodyEl.style.backgroundColor = "red";
        gameOverScoreEl.innerHTML = `Your Score was ${currentScore}`;
        questionCount = 1;
        homeBtn = true;
      }
    }
    if (homeBtn == true) {
      clearInterval(timerFunc);
    }
  }, 1000);
  setQuestion();
}

clearInterval();

function setQuestion() {
  question.innerHTML = `${questionCount}) ${questionList[currentQuestion].question} `;
  a.innerHTML = `${questionList[currentQuestion].a}`;
  b.innerHTML = `${questionList[currentQuestion].b}`;
  c.innerHTML = `${questionList[currentQuestion].c}`;
  d.innerHTML = `${questionList[currentQuestion].d}`;
  if (currentQuestion === questionList.length - 1) {
    submitBtn.style.display = "inline";
  }
}

function nextQuestion() {
  if (questionCount !== 10) {
    currentQuestion = currentQuestion + 1;
    questionCount = questionCount + 1;
    console.log(questionCount);
    setQuestion();
  }
}

function aClicked() {
  if (questionList[currentQuestion].answer === "a") {
    console.log("Correct");
    currentScore = currentScore + 1;
    currentScoreEL.innerHTML = `Current Score: ${currentScore}`;
    nextQuestion();
  } else {
    console.log("incorrect");
    timerCount = timerCount - 10;
    console.log(currentScore);
    nextQuestion();
  }
}
function bClicked() {
  if (questionList[currentQuestion].answer === "b") {
    console.log("Correct");
    currentScore = currentScore + 1;
    currentScoreEL.innerHTML = `Current Score: ${currentScore}`;

    nextQuestion();
  } else {
    console.log("incorrect");
    timerCount = timerCount - 10;
    console.log(currentScore);
    nextQuestion();
  }
}
function cClicked() {
  if (questionList[currentQuestion].answer === "c") {
    console.log("Correct");
    currentScore = currentScore + 1;
    currentScoreEL.innerHTML = `Current Score: ${currentScore}`;
    nextQuestion();
  } else {
    console.log("incorrect");
    timerCount = timerCount - 10;
    console.log(currentScore);
    nextQuestion();
  }
}
function dClicked() {
  if (questionList[currentQuestion].answer === "d") {
    console.log("Correct");
    currentScore = currentScore + 1;
    currentScoreEL.innerHTML = `Current Score: ${currentScore}`;
    nextQuestion();
  } else {
    console.log("incorrect");
    timerCount = timerCount - 10;
    console.log(currentScore);
    nextQuestion();
  }
}

function homeButton() {
  homeBtn = true;
  gameOverEL.style.display = "none";
  startScreen.style.display = "block";
  bodyEl.style.backgroundColor = "antiquewhite";
  newHighScore.style.display = "none";
  rankingEl.style.display = "none";
  questionCount = 1;
}

function showHighScores() {
  tempObj = JSON.parse(window.localStorage.getItem("highStuScores"));

  let first = [];
  let second = [];
  let third = [];
  for (key in tempObj) {
    if (first.length == 0) {
      first.push(key, tempObj[key]);
    } else if (first.length == 2 && second.length == 0) {
      if (tempObj[key] >= first[1]) {
        second = first;
        first = [];
        first.push(key, tempObj[key]);
      } else {
        second.push(key, tempObj[key]);
      }
    } else if (first.length == 2 && second.length == 2 && third.length == 0) {
      if (tempObj[key] >= first[1]) {
        third = second;
        second = first;
        first = [];
        first.push(key, tempObj[key]);
      } else {
        third.push(key, tempObj[key]);
      }
    } else if ((first.length && second.length && third.length) == 2) {
      if (tempObj[key] >= first[1]) {
        third = second;
        second = first;
        first = [];
        first.push(key, tempObj[key]);
      } else if (tempObj[key] >= second[1]) {
        third = second;
        second = [];
        second.push(key, tempObj[key]);
      } else if (tempObj[key] >= third[1]) {
        third = [];
        third.push(key, tempObj[key]);
      }
    }
  }
  localStorage.setItem("highscore", first[1]);

  first[0] === undefined
    ? (rank1El.innerHTML = "Rank 1: N/A Score: N/A ")
    : (rank1El.innerHTML = `Rank 1: ${first[0]} Score: ${first[1]}`);
  second[0] === undefined
    ? (rank2El.innerHTML = "Rank 2: N/A Score: N/A ")
    : (rank2El.innerHTML = `Rank 2: ${second[0]} Score: ${second[1]}`);
  third[0] === undefined
    ? (rank3El.innerHTML = "Rank 3: N/A Score: N/A ")
    : (rank3El.innerHTML = `Rank 3: ${third[0]} Score: ${third[1]}`);
  rankingEl.style.display = "inline";
}

function submitTest() {
  highScore = localStorage.getItem("highscore");
  homeBtn = true;
  if (currentScore > highScore || highScore == "undefined") {
    highScore = currentScore;
    localStorage.setItem("highscore", highScore);
    questionCount = 1;
    currentQuestion = 0;
    timerCount = 60;
    bodyEl.style.backgroundColor = "green";
    gameScreen.style.display = "none";
    newHighScore.style.display = "inline";
  } else if (currentScore <= highScore) {
    questionCount = 1;
    currentQuestion = 0;
    timerCount = 60;
    gameScreen.style.display = "none";
    gameOverEL.style.display = "block";
    bodyEl.style.backgroundColor = "red";
    gameOverScoreEl.innerHTML = `Your Score was ${currentScore}`;
  }
}

function isLowerCase(value) {
  return /^[a-z]/.test(value);
}

// new high score
function storeScore2() {
  homeBtn = true;
  var initialsEl2 = document.querySelector("#submit-form2").value;
  initialsEl2 = initialsEl2.toLowerCase();
  highStuScores = JSON.parse(window.localStorage.getItem("highStuScores"));
  if (initialsEl2.length !== 2 || isLowerCase(initialsEl2) === false) {
    alert("Invalid entry Please try again");
  } else {
    if (initialsEl2 in highStuScores) {
      if (currentScore >= highStuScores[initialsEl2]) {
        highStuScores[initialsEl2] = currentScore;
        localStorage.setItem("highStuScores", JSON.stringify(highStuScores));
      }
    } else {
      highStuScores[initialsEl2] = currentScore;
      localStorage.setItem("highStuScores", JSON.stringify(highStuScores));
    }
  }
}

function storeScore1() {
  homeBtn = true;
  var initialsEl1 = document.querySelector("#submit-form1").value;
  initialsEl1 = initialsEl1.toLowerCase();
  highStuScores = JSON.parse(window.localStorage.getItem("highStuScores"));
  if (initialsEl1.length !== 2 || isLowerCase(initialsEl1) === false) {
    alert("Invalid entry Please try again");
  } else {
    if (initialsEl1 in highStuScores) {
      if (currentScore >= highStuScores[initialsEl1]) {
        highStuScores[initialsEl1] = currentScore;
        localStorage.setItem("highStuScores", JSON.stringify(highStuScores));
      }
    } else {
      highStuScores[initialsEl1] = currentScore;
      localStorage.setItem("highStuScores", JSON.stringify(highStuScores));
    }
  }
}

returnHomeEl.addEventListener("click", homeButton);
homeButtonEL.addEventListener("click", homeButton);
highScoresEl.addEventListener("click", showHighScores);
startEL.addEventListener("click", startGame);
highScoresEl2.addEventListener("click", showHighScores);
a.addEventListener("click", aClicked);
b.addEventListener("click", bClicked);
c.addEventListener("click", cClicked);
d.addEventListener("click", dClicked);
submitBtn.addEventListener("click", submitTest);
highScore2.addEventListener("click", storeScore1);
highScore3.addEventListener("click", storeScore2);
