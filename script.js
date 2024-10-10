const questions = [
    {
        question: " which is the largest animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: " which is the longest river in the India?",
        answers:[
            {text: "Ganga", correct: true},
            {text: "Yammuna", correct: false},
            {text: "Bhramputra", correct: false},
            {text: "Kaveri", correct: false},
        ]
    },
    {
        question: " which is the smallest continent in the world?",
        answers:[
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Antarctica", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: " who is the intelligent person in the world?",
        answers:[
            {text: "Shashi", correct: false},
            {text: "Anshu", correct: false},
            {text: "what shashi", correct: true},
            {text: "It is only you", correct: false},
        ]
    },
    {
        question: " who is the foolish person in the world?",
        answers:[
            {text: "Anshu", correct: false},
            {text: "Nidhi", correct: false},
            {text: "Aman", correct: false},
            {text: "It is only you", correct: true},
        ]
    },
    {
        question: " which one is the best food in the world?",
        answers:[
            {text: "Chinese", correct: false},
            {text: "Italian", correct: false},
            {text: "Indian", correct: false},
            {text: "Mom's food", correct: true},
        ]
    },
    {
        question: " what Anshu Didi loves to do?",
        answers:[
            {text: "Travelling", correct: false},
            {text: "Shopping", correct: true},
            {text: "Enjoying whole night by trying to sleep", correct: false},
            {text: "Dushro k wajah se apna Nuksaan", correct: false},
        ]
    },
    {
        question: " what Nidhi Didi wants to do?",
        answers:[
            {text: "Cooking", correct: false},
            {text: "Scary Laugh", correct: false},
            {text: "Watching Movies", correct: false},
            {text: "Playing Pizza wala game", correct: true},
        ]
    },
    {
        question: " what Aman loves to do?",
        answers:[
            {text: "Cooking", correct: false},
            {text: "Always looking in the mirror", correct: true},
            {text: "Farting anywhere", correct: false},
            {text: "Travelling", correct: false},
        ]
    },
    {
        question: " Gas khatam hone k baad kya khaya jaa sakta hai?",
        answers:[
            {text: "Nothing", correct: false},
            {text: "From outside something", correct: true},
            {text: "Boiled milk and egg", correct: false},
            {text: "Coffee", correct: false},
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz(); 