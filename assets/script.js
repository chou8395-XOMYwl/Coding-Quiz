var mainQuiz = document.getElementById("quiz");
var results = document.getElementById("results");
var finalScore = document.getElementById("endScore");
var quizOver = document.getElementById("quizOver");
var questions = document.getElementById("questions");
var timer = document.getElementById("timerCountdown");
var startQuiz = document.getElementById("startQuiz");
var landingPage = document.getElementById("landingPage");
var highScoreContainer = document.getElementById("highScoreContainer");
var highScorePage = document.getElementById("highScorePage");
var highScoreInput = document.getElementById("initials");
var highScoreInitials = document.getElementById("highScoreInitials");
var endBtns = document.getElementById("endBtns");
var submitScore = document.getElementById("submitScore");
var highScore = document.getElementById("highScore");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var quizQuestions = [
    {   question: "Loops can execute a block of code __________.",
        choice1: "Only Once",
        choice2: "Five Times",
        choice3: "A Number Of Times Over And Over Again",
        choice4: "298 Times", 
        correctAnswer: "3",
    },
    {   question: "What does HTML stand for?",
        choice1: "Home Tool Makeup Language",
        choice2: "Hyper Text Markup Language",
        choice3: "Hold Together Markup Language",
        choice4: "Hyper Tough Monkey Language", 
        correctAnswer: "3",
    },
    {   question: "How do you insert a comment in a CSS file?",
        choice1: "**This Is A Comment",
        choice2: "--This Is A Comment",
        choice3: "/*This Is A Comment*/",
        choice4: "This Is A Comment", 
        correctAnswer: "3",
    },
    {   question: "How do you round up the number 8.88 to the next integer in JS?",
        choice1: "Math.ceil(8.88)",
        choice2: "Math.floor(8.88)",
        choice3: "Math-Up(8.88)",
        choice4: "Rouhd.up(8.88)", 
        correctAnswer: "1",
    },
    {   question: "How do you display hyperlinks without an underline in CSS?",
        choice1: "{text-decoration:noUnderline;}",
        choice2: "{text-decoration:none;}",
        choice3: "{underline:text-decoration-none;}",
        choice4: "{underline:none;}", 
        correctAnswer: "2",
    },
    {   question: "How do you declare a variable in JS?",
        choice1: "vari spicySausage;",
        choice2: "v spicySausage;",
        choice3: "variable spicySausage;",
        choice4: "var Spicy Sausage;", 
        correctAnswer: "1",
    },
    {   question: "Choose the correct HTML element for the largest heading.",
        choice1: "<h1>",
        choice2: "<h2>",
        choice3: "<h3>",
        choice4: "<h4>", 
        correctAnswer: "1",
    },
    {   question: "How do you call a function named myFunction?",
        choice1: "call myFunction()",
        choice2: "call function myFunction()",
        choice3: "myFunction",
        choice4: "myFunction()", 
        correctAnswer: "4",
    },
    {   question: "Which html element is the most specific?",
        choice1: "class",
        choice2: "id",
        choice3: "div",
        choice4: "header", 
        correctAnswer: "2",
    },
    {   question: "How do you generate a random number between 0 & 1 using JS?",
        choice1: "Math.0.1()",
        choice2: "Math.random",
        choice3: "Math.decimal()",
        choice4: "Math.random()", 
        correctAnswer: "4",
        },
]

var finalQuestion = quizQuestions.length;
var currentQuestionArray = 0;
var timerLeft = 60;
var timerInterval;
var score = 0;
var correct;

function generateQuizQuestions(){
    quizOver.style.display = "none";
    if (currentQuestion === finalQuestion) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionArray];
    questions.innerHTML = "<p>" + currentQuestion.question + "</p>";
    button1.innerHTML = currentQuestion.choice1;
    button2.innerHTML = currentQuestion.choice2;
    button3.innerHTML = currentQuestion.choice3;
    button4.innerHTML = currentQuestion.choice4;
};

function beginQuiz(){
    quizOver.style.display = "none";
    landingPage.style.display = "none";
    generateQuizQuestions();

    timerInterval = setInterval(function() {
        timerLeft--;
        timer.textContent = "Time left: " + timerLeft;

        if (timerLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    mainQuiz.style.display = "block";
}

function showScore(){
    mainQuiz.style.display = "none";
    quizOver.style.display = "flex";
    clearInterval(timerInterval);
    highScoreInput.value === "";
    finalScore.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

submitScore.addEventListener("click", function highScore(){
    if (highScoreInput.value ===""){
        alert("Initials cannot be blank");
        return false;
    }
    else {
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var currentUser = highScoreInput.value.trim();
        var currentHighScore = {
            name : currentUser,
            score : score
        };
        quizOver.style.display = "none";
        highScoreContainer.style.display = "flex";
        highScore.style.display = "block";
        endBtns.style.display = "flex";
        savedHighScores.push(currentHighScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
        generateHighScores();
    }
});

function generateHighScores(){
    highScoreInitials.innerHTML = "";
    highScore.innerHTML = "";
    var highScoresScore = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    for (i=0; i<highScoresScore.length; i++){
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        newName.textContent = highScore[i].name;
        newScore.textContent = highScore[i].score;
        highScoreInitials.appendChild(newName);
        highScore.appendChild(newScore);
    }
}

function showHighScore () {
    landingPage.style.display = "none";
    quizOver.style.display = "none";
    highScoreContainer.style.display = "flex";
    highScorePage.style.display = "block";
    endBtns.style.display = "flex";
    generateHighScores();
}

function clearScore(){
    window.localStorage.clear();
    highScoreInitials.textContent = "";
    highScore.textContent = "";
}

function retakeQuiz(){
    highScoreContainer.style.display = "none";
    quizOver.style.display = "none";
    startQuiz
}