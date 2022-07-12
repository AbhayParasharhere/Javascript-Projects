'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(`${this.question}\n${this.options.join('\n')}
    \n(Write option number)`);
    if (answer == 0 || answer == 1 || answer == 2 || answer == 3) {
      this.answers[Number(answer)] += 1;
    }
    console.log(this.answers);
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const data1 = {
  answers: [5, 2, 3],
};
const data2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

const displayData1 = poll.displayResults.bind(data1);
displayData1('array');

const displayData2 = poll.displayResults.bind(data2);
displayData2('string');
