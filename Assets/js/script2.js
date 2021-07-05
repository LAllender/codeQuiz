var startButton = document.getElementById('startButton')
var nextButton = document.getElementById('nextButton')
var rewardEl = document.getElementById('rewardBanner')
var count = 60;
var timer;
var score = 0;
const quizContainer = document.getElementById('quizcardContainer');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "What does the acronym CSS stand for?",
        answers: {
            a: "Concatenated Software Styles",
            b: "Cred Software Styles",
            c: "Core Style Sheetsazy Sassy Styles",
            d: "Cascading Style Sheets"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following is a CSS class?",
        answers: {
            a: ".important",
            b: "#important",
            c: "!important",
            d: "$important"
        },
        correctAnswer: "a"
    },
    {
        question: "Where is a global variable declared in Javascript?",
        answers: {
            a: "inside a function",
            b: "at the end of the document",
            c: "in the main body of your code",
            d: "in the document header"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the html tag used to create an unordered list?",
        answers: {
            a: "<list>",
            b: "<ulist>",
            c: "<unorderedList>",
            d: "<ul>"
        },
        correctAnswer: "d"
    },
];



//start quiz

startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add('hide');
startClock()
buildQuiz() 
showSlide(n)
}

function startClock() {
    $("counter").text(count);
    timer = setTimeout(update,1000);
    function update(){
        if (count > 0) {
            $("#counter").text("time left:  " + --count);
            timer = setTimeout(update,1000);
        } else {
            alert ("Time up. You lose!!")
        } }
    }
   
    function buildQuiz() {
        //variable to store the HTML output
        const output = [];
    
        //for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
    
                //variable to store the list of possible answers
                const answers = [];
    
                //and for each available answer...
                for(letter in currentQuestion.answers){
    
                    //...add an HTML radio button
                    answers.push(
                        `<label>
                            <input type="radio" name="questions${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }
            //add this question and its answers to the output
            output.push(
                `<div class="slide">
                    <div class="question">${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>
                </div>`
                );
            }
        );
        //finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    
    }
    
    function showResults() {
        //gather answer containers from our quiz
        answerContainers = quizContainer.querySelectorAll('.answers');
        
        //keep track of users answers
        numCorrect = 0;
    
        //for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            //find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
            //if answer is correct
            if (userAnswer ===currentQuestion.correctAnswer){
                //add to the number of correct answers
                numCorrect++;
    
                //color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            //if answer is wrong or blank
            else{
                //color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });
        //show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
    
    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        
        if(currentSlide === slides.length-1){
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else{
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none'; 
        }
    }
   
    //display quiz straight away by running this function
    buildQuiz();
    
    //pagination code
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    showSlide(currentSlide);
    
    function showNextSlide() {
        showSlide(currentSlide + 1);
    }
    
    //Event Listeners
    
    //navigation buttons
    
    nextButton.addEventListener('click', showNextSlide);
    //on submit, show results
    submitButton.addEventListener('click', showResults);
    

    function checkAnswer() {
       if ($('input[name="question1"]:checked').val() == "Q1A4") {
           score += 10;
           console.log(score);
           correctAnswer();
       } else {
           count -= 15;
            wrongAnswer();
       }
    }

    function correctAnswer() {
        console.log("correct");
        //display correct + reward button
        // adds points to score function
        //display next question button -click to load next question
        
        
        nextButton.classList.remove('hide');
        startButton.classList.add('hide');
        $(".quizcardContainer").append("<h3>Correct! You get 10 points!</h3>");
        setNextQuestion()
        
    }
    
    function wrongAnswer() {
        console.log("wrong")
        $(".quizcardContainer").append("<h4>Wrong! You lose 15 seconds!</h4>");
       
        nextButton.classList.remove('hide');
        startButton.classList.add('hide');
    }
   
    
 
    

//select answer



/*
function selectedValue() {
    $('input[name="question1"]:checked').val();
    return;
}

submitButton.addEventListener('click', selectedValue);       
 
console.log(selectedValue);
/*
        function progress() {
            if (selectedValue = "Q1A4" ) {
                correctAnswer()
            } else {
                wrongAnswer()
            }}
        
        function correctAnswer() {
            console.log("correct")
            //display correct + reward button
            // adds points to score function
            //display next question button -click to load next question
            nextButton.classList.remove('hide');
            startButton.classList.add('hide');
        }
        
        function wrongAnswer() {
        console.log("wrong")
        nextButton.classList.remove('hide');
        startButton.classList.add('hide');
        }



var QRA = 
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
    ] */