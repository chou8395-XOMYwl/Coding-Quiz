// Gathering HTML elements for manipulation
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var quizQuestions = [
    {   question: "Loops can execute a block of code __________.",
        choiceA: "Only Once",
        choiceB: "Five Times",
        choiceC: "A Number Of Times Over And Over Again",
        choiceD: "298 Times", 
        correctAnswer: "c"
    },
    {   question: "What does HTML stand for?",
        choiceA: "Home Tool Makeup Language",
        choiceB: "Hyper Text Markup Language",
        choiceC: "Hold Together Markup Language",
        choiceD: "Hyper Tough Monkey Language", 
        correctAnswer: "b",
    },
    {   question: "How do you insert a comment in a CSS file?",
        choiceA: "**This Is A Comment",
        choiceB: "--This Is A Comment",
        choiceC: "/*This Is A Comment*/",
        choiceD: "This Is A Comment", 
        correctAnswer: "c"
    },
    {   question: "How do you round up the number 8.88 to the next integer in JS?",
        choiceA: "Math.ceil(8.88)",
        choiceB: "Math.floor(8.88)",
        choiceC: "Math-Up(8.88)",
        choiceD: "Rouhd.up(8.88)", 
        correctAnswer: "a"
    },
    {   question: "How do you display hyperlinks without an underline in CSS?",
        choiceA: "{text-decoration:noUnderline;}",
        choiceB: "{text-decoration:none;}",
        choiceC: "{underline:text-decoration-none;}",
        choiceD: "{underline:none;}", 
        correctAnswer: "b"
    },
    {   question: "How do you declare a variable in JS?",
        choiceA: "vari spicySausage;",
        choiceB: "v spicySausage;",
        choiceC: "variable spicySausage;",
        choiceD: "var Spicy Sausage;", 
        correctAnswer: "a"
    },
    {   question: "Choose the correct HTML element for the largest heading.",
        choiceA: "<h1>",
        choiceB: "<h2>",
        choiceC: "<h3>",
        choiceD: "<h4>", 
        correctAnswer: "a"
    },
    {   question: "How do you call a function named myFunction?",
        choiceA: "call myFunction()",
        choiceB: "call function myFunction()",
        choiceC: "myFunction",
        choiceD: "myFunction()", 
        correctAnswer: "d"
    },
    {   question: "Which html element is the most specific?",
        choiceA: "class",
        choiceB: "id",
        choiceC: "div",
        choiceD: "header", 
        correctAnswer: "b"
    },
    {   question: "How do you generate a random number between 0 & 1 using JS?",
        choiceA: "Math.0.1()",
        choiceB: "Math.random",
        choiceC: "Math.decimal()",
        choiceD: "Math.random()", 
        correctAnswer: "d"
        },
];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

// This function cycles through the object array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}
// This function is the end page screen that displays your score after either completeing the quiz or upon timer run out
function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// On click of the submit button, we run the function highscore that saves and stringifies the array of high scores already saved in local stoage
// as well as pushing the new user name and score into the array we are saving in local storage. Then it runs the function to show high scores.
submitScoreBtn.addEventListener("click", function highscore(){
    
    
    if(highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
    
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
    
});

// This function clears the list for the high scores and generates a new high score list from local storage
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

// This function displays the high scores page while hiding all of the other pages from 
function showHighscore(){
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}

// This function clears the local storage of the high scores as well as clearing the text from the high score board
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

// This function sets all the variables back to their original values and shows the home page to enable replay of the quiz
function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}

// This function checks the response to each answer 
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect.")
        timeLeft = timeLeft - 10;
        quizTimer.textContent = "Time left: " + timeLeft;
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is wrong.
    }else{
        showScore();
    }
}

// This button starts the quiz!
startQuizButton.addEventListener("click",startQuiz);