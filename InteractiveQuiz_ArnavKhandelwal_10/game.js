const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById(`progressText`);
const scoreText = document.getElementById(`score`);
const progressBarFull = document.getElementById(`progressBarFull`);
const loader = document.getElementById(`loader`);
const game = document.getElementById(`game`);
const timeLeftText = document.getElementById('time-left');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timerInterval;


let questions = [];

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const difficulty = urlParams.get('difficulty');

console.log(category);
console.log(difficulty);


function fetchQuestions(category, difficulty) {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
        .then((res) => res.json())
        .then((loadedQuestions) => {
            questions = loadedQuestions.results.map((loadedQuestion) => {
                const formattedQuestion = { question: loadedQuestion.question };
                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);
                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });
                return formattedQuestion;
            });
            startGame();
        })
        .catch((err) => {
            console.error(err);
            loader.innerText = "Failed to load questions. Please try again later.";
        });
}

fetchQuestions(category, difficulty);

const POINTS = 10;
const MAX_QUESTIONS = 5;
const TIMER_DURATION = 15;

function startTimer() {
    let timeRemaining = TIMER_DURATION;
    timeLeftText.innerText = timeRemaining;

    // Clear any previous interval to reset the timer
    clearInterval(timerInterval);

    // Start the countdown
    timerInterval = setInterval(() => {
        timeRemaining--;
        timeLeftText.innerText = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            getNewQuestion(); // Automatically go to the next question when time runs out
        }
    }, 1000);
}

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(currentQuestion);
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("/end.html");
    }

    questionCounter++;

    progressText.innerText = "Question" +  questionCounter + "/" + MAX_QUESTIONS;
    progressBarFull.style.width = questionCounter/MAX_QUESTIONS * 100 + "%";


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset[`number`];
        choice.innerText = currentQuestion[`choice${number}`];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

    startTimer();
};

choices.forEach( choice => {
    choice.addEventListener( 'click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        clearInterval(timerInterval); // Clear the timer when an answer is selected

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];  
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        
        console.log(classToApply);
        if(classToApply === 'correct') incrementScore(POINTS);
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    });
})

incrementScore = num => {
    score+=num;
    scoreText.innerText = score;
}
