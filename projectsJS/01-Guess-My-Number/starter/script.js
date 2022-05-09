'use strict';

/** 
console.log(document.querySelector('.message'));

console.log(`Before accesing the value of INPUT field is
 ${document.querySelector('.guess').value}`);

document.querySelector('.guess').value = 999;

console.log(`After changing the value of INPUT field is
 ${document.querySelector('.guess').value}`);
 **/
const generateKey = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let keyVal = generateKey();
let score = 20;
let highScore = 0;

console.log(keyVal);

document.querySelector('.check').addEventListener('click', function () {
  const guessVal = Number(document.querySelector('.guess').value);

  // wrong guess
  if (!guessVal) {
    document.querySelector('.message').textContent =
      '⛔ NO INPUT please try again ';
  }

  // correct guess
  else if (guessVal === keyVal) {
    document.querySelector('.message').textContent =
      '😁 You have got it right ';
    document.querySelector('body').style.backgroundColor = '#60b348';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = keyVal;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = String(highScore);
    }
  }

  // guess is too high
  else if (guessVal > keyVal) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        ' 😒 TOO high guess, lower your guess';
      --score;
      document.querySelector('.score').textContent = String(score);
    } else {
      document.querySelector('.message').textContent = ' 😥 YOU LOSE! Score 0';
    }

    // guess is too low
  } else {
    if (score > 0) {
      document.querySelector('.message').textContent =
        '🙄 GUESS too low, guess higher';
      --score;
      document.querySelector('.score').textContent = String(score);
    } else {
      document.querySelector('.message').textContent = ' 😥 YOU LOSE! Score 0';
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
