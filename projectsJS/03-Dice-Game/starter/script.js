'use strict';

let continuePlay = true;
let players = [0, 0];
let curScoreLabels = [0, 0];
let scoreLabels = [0, 0];
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');

const initialGameSet = function () {
  // can use querySelectorAll but this way less error prone
  for (let i = 0; i < 2; i++) {
    scoreLabels[i] = document.querySelector(`#score--${i}`);
    curScoreLabels[i] = document.querySelector(`#current--${i}`);
    players[i] = document.querySelector(`.player--${i}`);
    scoreLabels[i].textContent = 0;
    curScoreLabels[i].textContent = 0;
  }
};

initialGameSet();

const findActivePlayer = function () {
  if (players[0].classList.contains('player--active')) {
    return 0;
  } else {
    return 1;
  }
};

const rollDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

let scores = [0, 0];
let diceVal = 0;
let activePlayerNo = findActivePlayer();
let curScore = 0;

const switchPlayer = function () {
  if (activePlayerNo === 0) {
    players[activePlayerNo].classList.remove('player--active');
    players[activePlayerNo + 1].classList.add('player--active');
    activePlayerNo = 1;
  } else {
    players[activePlayerNo].classList.remove('player--active');
    players[activePlayerNo - 1].classList.add('player--active');
    activePlayerNo = 0;
  }
};

const rollDiceHandler = function () {
  if (continuePlay) {
    diceVal = rollDice();
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${diceVal}.png`;
    if (diceVal === 1) {
      resetCurrentScore();
      switchPlayer();
    } else {
      curScore += Number(diceVal);
      curScoreLabels[activePlayerNo].textContent = String(curScore);
    }
  }
};
const resetCurrentScore = function () {
  curScore = 0;
  curScoreLabels[activePlayerNo].textContent = 0;
};

const win = function () {
  continuePlay = false;
  diceImg.classList.add('.hidden');

  players[activePlayerNo].classList.add('player--winner');

  players[activePlayerNo].classList.remove('player--active');
};

const holdScoreHandler = function () {
  if (continuePlay) {
    scores[activePlayerNo] += curScore;
    scoreLabels[activePlayerNo].textContent = String(scores[activePlayerNo]);
    if (scores[activePlayerNo] >= 100) {
      win();
    } else {
      resetCurrentScore();
      switchPlayer();
    }
  }
};

const resetGameHandler = function () {
  for (let i = 0; i < 2; i++) {
    scores[i] = 0;
    curScore = 0;
    scoreLabels[i].textContent = 0;
    curScoreLabels[i].textContent = 0;
    players[i].classList.remove('player--winner');
  }
  activePlayerNo = 0;
  continuePlay = true;
  players[0].classList.add('player--active');
  players[1].classList.remove('player--active');
};

rollDiceBtn.addEventListener('click', rollDiceHandler);
holdBtn.addEventListener('click', holdScoreHandler);
newBtn.addEventListener('click', resetGameHandler);
