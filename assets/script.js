// import {questions} from "./questions";
const questions = [
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {text:'The body section',correct:true},
            {text:"The head section",correct:false},
            {text:"after the html section",correct:false},
            {text:"Both the head section and the <body> section are correct",correct:false},
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called abc.js?",
        answers: [
            {text:"script src = abc.js",correct:true},
            {text:"script href = abc.js",correct:true},
            {text:"script name = abc.js",correct:false},
            {text:"script link = abc.js",correct:false},
        ]
    },
    {
        question: "How do you write ,Hello World, in an alert box?",
        answers: [
            {text:'msg("Hello Wolrd");',correct:false},
            {text:'alertBox("Hello Wolrd");',correct:false},
            {text:'alert("Hello Wolrd");',correct:true},
            {text:'print("Hello Wolrd");',correct:false},
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            {text:"function:myFunction()",correct:false},
            {text:"function myFunction()",correct:true},
            {text:"function = myFunction()",correct:false},
            {text:"void myFunction",correct:false},
        ]
    },
    {
        question: "How do you call a function named, myFunction?",
        answers: [
            {text:"call function myFunction()",correct:false},
            {text:"myFunction()",correct:true},
            {text:"myFunction",correct:false},
            {text:"call myFunction()",correct:false},
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {text:"if (i == 5)",correct:true},
            {text:"if i = 5 then",correct:false},
            {text:"if i = 5",correct:false},
            {text:"if i == 5 then",correct:false},
        ]
    },
    {
        question: ":Lastly, Are you an amazing person? :)",
        answers: [
            {text:"Yes",correct:true},
            {text:"ofc",correct:true},
            {text:"hell yeah I am",correct:true},
            {text:"Nah",correct:false},
        ]
    },
];
//my variables
const questionEl = document.getElementById("question");
const ansbtn = document.getElementById("ans");
const nextbtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
//timer var
const timeEl = document.querySelector("#timer");
const timeSecEl = document.getElementsByClassName('.time-sec');
let secondsLeft = 45;
//local storage var

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
secondsLeft = 45;
nextbtn.innerHTML = "Next";
showQuestion();
showTime();
}

function showQuestion() {
    reset();
     let currentQuestion = questions[currentQuestionIndex];
     console.log(currentQuestion)
     let questionNum = currentQuestionIndex + 1;
     questionEl.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-btn");
        ansbtn.appendChild(button);
        
        console.log(button);

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
       button.addEventListener("click", selectAnswer);
        
    }); 
    
}
function reset() {
    nextbtn.style.visibility ="hidden";
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
}


function selectAnswer(a) {
    const selectedBtn = a.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        secondsLeft = Math.max(0, secondsLeft - 5); // Deduct 5 seconds, but ensure it doesn't go negative
    }

    Array.from(ansbtn.children).forEach(button => {
        button.disabled = true;
    });

    nextbtn.style.visibility = "visible";
}


nextbtn.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

 function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
        clearInterval(secondsLeft);
    }
 };

function showScore(){
    reset();
    hideTime();
    const totalscore = ((score/questions.length)*100);
   let newTotalscore = totalscore.toFixed(2);
    console.log(newTotalscore);
    questionEl.innerHTML = 'You scored' + newTotalscore;
    const playerName = prompt("Enter your name:");

    // Store the score with the name in local storage
    if (playerName) {
        const playerScore = {
            name: playerName,
            score: newTotalscore,
        };

        // Retrieve existing scores from local storage
        const existingScores = JSON.parse(localStorage.getItem("quizScores")) || [];

        // Add the current score to the list
        existingScores.push(playerScore);

        // Save the updated scores back to local storage
        localStorage.setItem("quizScores", JSON.stringify(existingScores));
    }

    nextbtn.innerHTML = "play Again";
    nextbtn.style.visibility = "visible";
    currentQuestionIndex = 0;
    score = 0;
    secondsLeft = 45;
    nextbtn.addEventListener("click", startQuiz); // Add event listener to start the quiz again
}

function setTime (){
    startQuiz();
    secondsLeft=45;
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      showScore();
    }
    },
     1000);
  
}

function hideTime() {
    var x = document.getElementById("time-sec");
      x.style.display = "none";
    };
    function showTime() {
        var x = document.getElementById("time-sec");
        x.style.display = "block";
    };
setTime();
