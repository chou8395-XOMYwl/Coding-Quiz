var mainQuiz = document.getElementById("quiz");
var results = document.getElementById("results");
var finalScore = document.getElementById("endScore");
var quizOver = document.getElementById("quizOver");
var questions = document.getElementById("questions");
var timer = document.getElementById("timerCountdown");
var startQuiz = document.getElementById("startQuiz");
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
var quixQuestions = [
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
]
