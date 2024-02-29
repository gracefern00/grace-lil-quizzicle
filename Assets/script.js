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
  questionCounter(1);
  HeaderScore();

}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextButton = document.querySelector('.next-button');

nextButton.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);
  }
  else {
    console.log('Question Answered')
  }
}


const optionList = document.querySelector(".option-list")

//get Q's and the options from an array

function showQuestions(index) {
  const questionText = document.querySelector('.question-text');
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
  <div class="option"><span>${questions[index].options[1]}</span></div>
  <div class="option"><span>${questions[index].options[2]}</span></div>
  <div class="option"><span>${questions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll('.option');
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;

  if (userAnswer == correctAnswer) {
    answer.classList.add('correct');
    userScore += 1;
    HeaderScore();
  }
  else {
    answer.classList.add('wrong');
  }
}

function questionCounter(index) {
  const questionTotal = document.querySelector('.question-total');
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function HeaderScore() {
  const HeaderScoreText = document.querySelector('.header-score');
  HeaderScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

// 1:05:43 / 1:35:26 https://www.youtube.com/watch?v=Vp8x8-reqZA&t=4835s