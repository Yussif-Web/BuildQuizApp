/*eslint-env es6*/
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById(progressBarFull);
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch("questions.json").then(res=>{
    return res.json();
}).then(loadedQuestions => {
    questions = loadedQuestions;
    startGame ();
})
.catch(err =>{
    console.error(err);
});


//CONSTANTS
const CORRECT_BONUS =10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewquestion();
};

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("/end.html");
    }
    questionCounter++;
    progressText.innerText = Question ${questionCounter}/${MAX_QUESTIONS};
    progressBarFull.style.width = '(${questionCounter/MAX_QUESTIONS) * 100}%';  
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
choice.forEach( choice => {
    const number = choice.dataset["number"];
    choice.innerTest = currentQuestion["choice" + number]; 
});

availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;
};
choice.forEach(choice => {
    choice.addEventListener("click", e => {
       if(!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        const classToApply = 
        selectedAnswer == currentQuestion.answer?
            "correct" : "incorrect";
            
           if(classToApply == "correct") {
               incrementScore(CORRECT_BONUS);
           }
            selectedChoice.parentElement.classList.add(classToApply);
            
           setTimeout(()=> {}, 1000); selectedChoice.parentElement.classList.remove(classToApply);
        }
        
        getNewQuestion();
        }; 1000);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};













