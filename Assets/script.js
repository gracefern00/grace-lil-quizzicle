const startButton = document.querySelector('.start-button');
const popupInfo = document.querySelector('.popup-info');
const exitButton = document.querySelector('.exit-button');
const main = document.querySelector('.main');
const continueButton = document.querySelector('.continue-button');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

startButton.onclick = () => {
  popupInfo.classList.add('active');
}

exitButton.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
}

continueButton.onclick = () => {
  quizSection.classList.add('active');
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  quizBox.classList.add('active');

  showQuestions(0);
}

let questionCount = 0;

const nextButton = document.querySelector('.next-button');

nextButton.onclick = () => {
  questionCount++;
  showQuestions(questionCount);
}

//get Q's and the options from an array

function showQuestions(index) {
  const questionText = document.querySelector('.question-text');
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
}