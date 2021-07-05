var startButton = document.getElementById('startButton')
var submitButton = document.getElementById('submitButton')
var questionContainerEl = document.getElementById('questionContainer')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answerButtons')
var count = 60;
var timer;
var questions = [];


startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add('hide');
submitButton.classList.remove('hide');
questionContainerEl.classList.remove('hide');
setNextQuestion()
startClock()
}

function startClock() {
    $("counter").text(count);
    timer = setTimeout(update,1000);
    function update(){
        if (count > 0) {
            $("#counter").text(--count);
            timer = setTimeout(update,1000);
        } else {
            alert ("Time up. You lose!!")
        } }
    }

function setNextQuestion() {
    for (let i = 0; i < questions.length; i++) {
        result = questions[i];
        showQuestion(result)
    }



function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsEl.appendChild(button);
    })
}

function selectAnswer(e) {
    var button = e.target;
    var correct = button.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button.dataset.correct);
    })
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
}

function submit() {

}

var questions = 
[
    {
       question: 'What does the acronym CSS stand for?',
       answers: [
           {text: 'Concatenated Software Styles', correct: false},
           {text: 'Core Style Sheets', correct: false},
           {text: 'Crazy Sassy Styles', correct: false},
           {text: 'Cascading Style Sheets', correct: true},
       ]
    },
    {
        question: 'Which of the following is a CSS class?',
        answers: [
            {text: '#important', correct: false},
            {text: '.important', correct: true},
            {text: '!important', correct: false},
            {text: '"important"', correct: false},
        ]
     },
     {
        question: 'Where is a global variable declared in Javascript?',
        answers: [
            {text: 'inside a function', correct: false},
            {text: 'at the end of the document', correct: false},
            {text: 'in the main body of your code', correct: true},
            {text: 'in the document header', correct: false},
        ]
     },
     {
        question: 'What is the html tag used to create an unordered list?',
        answers: [
            {text: '<list>', correct: false},
            {text: '<ulist>', correct: false},
            {text: '<unorderedList>', correct: false},
            {text: '<ul>', correct: true},
        ]
     },
]