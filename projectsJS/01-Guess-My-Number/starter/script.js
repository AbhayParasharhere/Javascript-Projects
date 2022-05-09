'use strict';

const generateKey = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let keyVal = generateKey();
let score = 20;
let highScore = 0;

console.log(keyVal);

document.querySelector('.check').addEventListener('click', function () {
  const guessVal = Number(document.querySelector('.guess').value);

  // no value in guess
  if (!guessVal) {
    displayMessage('⛔ NO INPUT please try again ');
  }

  // correct guess
  else if (guessVal === keyVal) {
    displayMessage('😁 You have got it right ');
    document.querySelector('body').style.backgroundColor = '#60b348';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = keyVal;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = String(highScore);
    }
  } else if (guessVal !== keyVal) {
    if (score > 0) {
      displayMessage(
        guessVal > keyVal
          ? ' 😒 TOO high guess, lower your guess'
          : '🙄 GUESS too low, guess higher'
      );
      --score;
      document.querySelector('.score').textContent = String(score);
    } else {
      displayMessage(' 😥 YOU LOSE! Score 0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  keyVal = generateKey();

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = String(score);
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  console.log(keyVal);
});

function displayMessage(msg) {
  return (document.querySelector('.message').textContent = msg);
}
