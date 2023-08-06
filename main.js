const Questions = [
  {
    question: "Which planet has the largest size in our Solar System?",
    options: ["Mars", "Venus", "Jupiter", "Neptune"],
    correctAnswer: "Jupiter",
    number: "1",
  },
  {
    question:
      "Which element is represented by the symbol 'Fe' in the periodic table?",
    options: ["Iron", "Phosphorus", "Copper", "Silver"],
    correctAnswer: "Iron",
    number: "2",
  },
  {
    question: "Which famous painter created the artwork 'Mona Lisa'?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
    number: "3",
  },
  {
    question:
      "Which planet is sometimes referred to as the 'Morning Star' of the universe?",
    options: ["Mars", "Venus", "Jupiter", "Uranus"],
    correctAnswer: "Venus",
    number: "4",
  },
  {
    question:
      "Which prominent English writer authored works like 'Romeo and Juliet' and 'Hamlet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
    number: "5",
  },
  {
    question: "Which planet is also known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Jupiter", "Neptune"],
    correctAnswer: "Mars",
    number: "6",
  },
  {
    question: "On which date was the Republic of Turkey officially declared?",
    options: [
      "October 29, 1923",
      "July 15, 2016",
      "May 19, 1919",
      "April 23, 1920",
    ],
    correctAnswer: "October 29, 1923",
    number: "7",
  },
  {
    question: "Which element is a major component of Earth's atmosphere?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
    correctAnswer: "Nitrogen",
    number: "8",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue whale", "Giraffe", "Lion"],
    correctAnswer: "Blue whale",
    number: "9",
  },
  {
    question: "Which renowned scientist formulated the equation 'E=mc²'?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    correctAnswer: "Albert Einstein",
    number: "10",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

startQuiz();
displayQuestion();

function startQuiz() {
  const startbtn = document.querySelector(".startbtn");
  const content = document.querySelector(".content");
  const startContent = document.querySelector(".start-content");

  startbtn.addEventListener("click", function () {
    content.classList.add("display");
    startContent.classList.add("nondisplay");

    startTimer();
  });
}

function displayQuestion() {
  const currentQuestion = Questions[currentQuestionIndex];
  const question = document.querySelector(".title");
  const answerContainer = document.querySelector(".options");
  const number = document.querySelector(".number-div");

  number.innerHTML = currentQuestion.number + "/10";
  question.innerHTML = "";
  answerContainer.innerHTML = "";

  question.innerHTML = currentQuestion.question;

  // Answers
  currentQuestion.options.forEach((option) => {
    const answer = document.createElement("div");
    answer.innerText = option;
    answer.classList.add("answer");
    answerContainer.appendChild(answer);

    answer.addEventListener("click", function () {
      checkAnswer(option);
    });
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = Questions[currentQuestionIndex];
  const nextBtn = document.querySelector(".next");

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < Questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;

    document.querySelector(".time").textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  const header = document.querySelector(".header");
  const container = document.querySelector(".options");
  header.innerHTML = "";
  container.innerHTML = "";

  const endTitle = document.createElement("h1");
  const scoreTitle = document.createElement("h2");
  const p = document.createElement("h3");
  header.appendChild(endTitle);
  header.appendChild(scoreTitle);
  header.appendChild(p);

  endTitle.innerHTML = "Congratulations! You have finished the quiz.";
  scoreTitle.innerHTML = "Your Score:";
  p.innerHTML = score + " " + "out of 10";
}
