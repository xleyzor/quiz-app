const Questions = [
  {
    question: "Which planet has the largest size in our Solar System?",
    options: ["Mars", "Venus", "Jupiter", "Neptune"],
    correctAnswer: "Jupiter",
  },
  {
    question:
      "Which element is represented by the symbol 'Fe' in the periodic table?",
    options: ["Iron", "Phosphorus", "Copper", "Silver"],
    correctAnswer: "Iron",
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
  },
  {
    question:
      "Which planet is sometimes referred to as the 'Morning Star' of the universe?",
    options: ["Mars", "Venus", "Jupiter", "Uranus"],
    correctAnswer: "Venus",
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
  },
  {
    question: "Which planet is also known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Jupiter", "Neptune"],
    correctAnswer: "Mars",
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
  },
  {
    question: "Which element is a major component of Earth's atmosphere?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue whale", "Giraffe", "Lion"],
    correctAnswer: "Blue whale",
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
  },
];

let currentQuestionIndex = 0;
let score = 0;

const deneme = document.querySelector(".container");

displayQuestion();

function displayQuestion() {
  const currentQuestion = Questions[currentQuestionIndex];
  const question = document.querySelector(".title");
  const answerContainer = document.querySelector(".options");

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

  nextBtn.classList.add("open");
  selectedOption.classList.add("clicked");
}
