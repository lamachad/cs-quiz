//an array containing all possible questions and answers
var questionsArray = [
  {
    question: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Color Style Source",
      "Computer Style Source",
      "Color Shades Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which of the following is a programming language?",
    answers: ["HTML", "JavaScript", "CSS", "BootStrap"],
    answer: "JavaScript",
  },
  {
    question: "Who is the creator of JavaScript?",
    answers: [
      "James Gosling",
      "Farish Kashefinejad",
      "Brendan Eich",
      "John Java",
    ],
    answer: "Brendan Eich",
  },
  {
    question: "In which type of files are DIV tags usually found in?",
    answers: ["HTML files", "JavaScript files", "CSS files", "JSON file"],
    answer: "JavaScript files",
  },
  {
    question: "Who is known as the father of computers?",
    answers: ["Charles Babbage", "Steve Jobs", "Tim Cook", "Bill Gates"],
    answer: "Charles Babbage",
  },
];

// declare all variables here

var gamescreen = document.querySelector(".gamescreen");
var startButton = document.getElementById("start-btn");
var timeRemaining = document.getElementById("time");
var gameOverScreen = document.getElementById("gameover-screen");
var feedbackBox = document.getElementById("feedback");
var quizContainer = document.getElementById("quiz");
var finalInitials = document.getElementById("record-btn");
var countDown = questionsArray.length * 10;
var currentQuestion = 0;
var highscoreLi = document.getElementById("final-score");
var interval;
var highscores;

function gameOver() {
  gameOverScreen.classList.remove("hide");
  feedbackBox.textContent = " ";
  clearInterval(interval);
}

function generateQuestions() {
  if (currentQuestion === questionsArray.length) {
    gameOver();
    return;
  }
  //will display question starting at index 1 of the questions array
  var nextQuestion = document.createElement("h1");
  nextQuestion.textContent = questionsArray[currentQuestion].question;

  var allAnswers = document.createElement("ol");

  for (var i = 0; i < questionsArray[currentQuestion].answers.length; i++) {
    var choices = document.createElement("li");
    choices.textContent = questionsArray[currentQuestion].answers[i];
    allAnswers.append(choices);
  }
  // Takes choices list and appends them to the ordered allAnswers list
  quizContainer.append(nextQuestion);
  quizContainer.append(allAnswers);
}
function validator(event) {
  var response = event.target.textContent;
  var correctResponse = document.createElement("p");
  if (currentQuestion === questionsArray.length) {
    return;
  } else if (response === questionsArray[currentQuestion].answer) {
    feedbackBox.textContent = "";
    correctResponse.textContent = "Correct!";
    feedbackBox.append(correctResponse);
  } else {
    feedbackBox.textContent = "";
    correctResponse.textContent = "Sorry, that was incorrect.";
    countDown -= 4;
    feedbackBox.append(correctResponse);
  }
  quizContainer.innerHTML = "";
  currentQuestion++;
  generateQuestions();
}
function timeclock() {
  if (countDown < 1) {
    gameOver();
  }

  timeRemaining.textContent = countDown;
  countDown--;
}

function startQuiz() {
  generateQuestions();
  interval = setInterval(timeclock, 1000);
}
function leadershipBoard() {
  //var userScore = JSON.stringify(localStorage.getItem("#final-score"))
  highscoreLi.textContent = userProfile;
  var userInitials = document.getElementById("userId").value;
  var score = timeclock * questionsArray[currentQuestion]
  userProfile = {
    Initials: userInitials,
    Score: score
  }
  if ( highscoreLi == null){
    highscoreLi = [userProfile]
  } else { 
    highscoreLi.push(userProfile)
  }
  localStorage.getItem("final-score", JSON.stringify(highscoreLi))
  var testersDisplayed = document.createElement("ol")
}

startButton.addEventListener("click", startQuiz);
quizContainer.addEventListener("click", validator);

var testersDisplayed = document.createElement("ol")
