const MCQS = [
    {
        question: "The Universal Selector is used as a?",
        a: "Wildcard Character",
        b: "Page Character",
        c: "Commas Character",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "How many different types of Selectors in CSS",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        ans: "ans3"
    },
    {
        question: "HTML files are saved by default with the extension?",
        a: ".html5",
        b: ".html",
        c: ".HTML",
        d: "All of the above",
        ans: "ans2"
    },
    {
        question: "Which character is used to create id in css?",
        a: "*",
        b: ".",
        c: "!",
        d: "#",
        ans: "ans4"
    },
    {
        question: "1em is equal to ____ px?",
        a: "12",
        b: "16",
        c: "24",
        d: "30",
        ans: "ans2"
    },
    {
        question: "In how many ways can CSS be written in?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        ans: "ans2"
    },
    {
        question: "Which of the following are valid ways to represent a colour in CSS?",
        a: "A valid color name",
        b: "RGB",
        c: "HEX",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "constant",
        ans: "ans1"
    },
    {
        question: "What does location.reload() function do in JavaScript?",
        a: "Refreshes the Doc",
        b: "Closing the Doc",
        c: "Open the Doc",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "How many heading elements are in HTML?",
        a: "4",
        b: "6",
        c: "8",
        d: "5",
        ans: "ans2"
    }
];

// Start button
let start = document.querySelector("#start");

// Guide Section
let guidelines = document.querySelector("#guidelines");
let attempt = document.querySelector("#attempt");

// if start button clicks 
start.addEventListener("click", () => {
    start.style.display = "none";
    guidelines.style.display = "block";
});

// if attempt button clicks 
attempt.addEventListener("click", () => {
    guidelines.style.display = "none";
    quiz.style.display = "block";
});

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const next = document.querySelector('#next');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const playagain = document.querySelector("#playagain");

let questionnum = 0;
let score = 0;

const inputquestions = () => {
    const questionlist = MCQS[questionnum];
    question.innerHTML = questionlist.question;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}

inputquestions();

const getAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const terminateALL = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};
next.addEventListener('click', () => {
    const checkedAnswer = getAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === MCQS[questionnum].ans) {
        score++;
    };
    questionnum++;
    terminateALL();
    if (questionnum < MCQS.length) {
        inputquestions();
    }
    else if (score < 5) {
        quiz.style.display = "none";
        res.style.display = "block";
        showScore.innerHTML = `
      <img src="oops.jpg" alt="oops" width="125px" height="100px">
      <h3>You scored ${score} out of ${MCQS.length}  Questions!<h3>
      <h5>Sorry, you can't pass the quiz.</h5>`;
        showScore.classList.remove('scoreArea');
    }
    else if (score < 10) {
        quiz.style.display = "none";
        res.style.display = "block";
        showScore.innerHTML = `
      <img src="clap.jpg" alt="clap" width="125px" height="100px">
      <h3>You scored ${score} out of ${MCQS.length}  Questions!<h3>
      <h5>Well Played. Keep it Up!</h5>`;
        showScore.classList.remove('scoreArea');
    } else {
        quiz.style.display = "none";
        res.style.display = "block";
        showScore.innerHTML = `
      <img src="trophy.jpg" alt="trophy" width="125px" height="100px">
      <h3>You scored ${score} out of ${MCQS.length}  Questions!<h3>
      <h5>Congratulations!</h5>`;
        showScore.classList.remove('scoreArea');
    }
});

playagain.addEventListener("click", () => {
    res.style.display = "none";
    start.style.display = "block";
});