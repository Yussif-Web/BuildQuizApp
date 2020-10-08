/*eslint-env es6*/
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which html element do we put the JavaScript??",
        choice1:"<script>",
        choice2:"<javascript>",
        choice3:"<js>",
        choice4:"<scripting>",
        answer: 1
    },
    
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'??",
        choice1:"<script href = 'xxx.js'>",
        choice2:"<script name'xxx.js'>",
        choice3:"<script src = 'xxx.js'>",
        choice4:"<script file = 'xxx.js'>",
        answer: 3
    },
    
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1:"msgBox('Hello world' in an alert box);",
        choice2:"alertBox('Hello world');",
        choice3:"msg('Hello world');",
        choice4:"alert('Hello world')",
        answer: 4
    }
    
];

//CONSTANTS
const CORRECT_BONUS =3;
const MAX_QUESTIONS = 0;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewquestion();
};

getNewQuestion = () =>{
    if(availableQuestions === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("/end.html");
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
};
choice.forEach( choice => {
    const number = choice.dataset["numbe"];
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
        
        const classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer){
            classToApply = 'correct';
            
           if(classToApply === 'correct') {
               incrementScore(CORRECT_BONUS);
           }
            selectedChoice.parentElement.classList.add(classToApply);
            
           setTimeout(()=> {}, 1000); selectedChoice.parentElement.classList.remove(classToApply);
        }
        
        getNewQuestion();
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();












