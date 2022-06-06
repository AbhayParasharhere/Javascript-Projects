'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textBox = document.querySelector('textarea');
const myButton = document.querySelector('button');
let userInput = '';
let splittedInputs;

myButton.addEventListener('click', function () {
  userInput = textBox.value;

  splittedInputs = userInput.split('\n');

  for (let i = 0; i < splittedInputs.length; i++) {
    splittedInputs[i] = splittedInputs[i].trim();
    splittedInputs[i] = splittedInputs[i].toLowerCase();

    splittedInputs[i] = splittedInputs[i].split('_');

    splittedInputs[i][1] =
      splittedInputs[i][1][0].toUpperCase() + splittedInputs[i][1].slice(1);

    splittedInputs[i] = splittedInputs[i].join('');

    splittedInputs[i] = splittedInputs[i].padEnd(20, ' ');

    splittedInputs[i] = splittedInputs[i].padEnd(20 + (i + 1), '✅');

    console.log(splittedInputs[i]);
  }
});
