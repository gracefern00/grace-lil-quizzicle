const startButton = document.querySelector('.start-button');
const popupInfo = document.querySelector('.popup-info');
const exitButton = document.querySelector('.exit-button');
const main = document.querySelector('.main');
const continueButton = document.querySelector('.continue-button');
const quizSection = document.querySelector('.quiz-section');

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
}