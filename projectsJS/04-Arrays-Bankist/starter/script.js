'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const calcAndDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, val) => acc + val, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

const updateMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // clear the existing htm code

  // sort the array if sorted is true
  const transactions = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  transactions.forEach(function (movement, index) {
    const moveType = movement > 0 ? 'deposit' : 'withdrawal';
    const htmlCode = `
    <div class="movements__row">
      <div class="movements__type movements__type--${moveType}">${
      index + 1
    } ${moveType}</div>
      <div class="movements__value">${movement}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', htmlCode);
  });
};

const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    const usernameParts = account.owner.split(' ');
    const finalUserNameArr = usernameParts.map(function (part) {
      return part.at(0).toLowerCase();
    });

    account.username = finalUserNameArr.join('');
  });
};

const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter(balance => balance > 0)
    .reduce((acc, balance) => acc + balance, 0);

  const incomeOut = account.movements
    .filter(transaction => transaction < 0)
    .reduce((acc, amount) => acc + amount, 0);

  const interest = account.movements
    .filter(transaction => transaction > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, amount) => acc + amount, 0);

  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(incomeOut)}€`;
  labelSumInterest.textContent = `${interest}€`;
};
const updateUI = function (acc) {
  calcAndDisplayBalance(acc);
  updateMovements(acc.movements);
  calcDisplaySummary(acc);
};
createUserNames(accounts);

// Event handlers

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI, and greet user
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;

    //update UI
    updateUI(currentAccount);

    // clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    // remove focus from the pin by removing the cursor from there
    inputLoginPin.blur();
  }
});

// transfer button
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  const transferAcc = accounts.find(
    account => account.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    transferAcc.username !== currentAccount.username
  ) {
    // transfer money
    transferAcc?.movements.push(amount);

    // reduce money from cur account
    currentAccount.movements.push(-amount);

    // calculate new cur balance, new summary and update movements
    updateUI(currentAccount);
  }
  // clear fields and blur focus
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  inputTransferAmount.blur();
});

// delete account button
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const indexToDelete = accounts.findIndex(
      account => account.username === currentAccount.username
    );
    // delete account
    accounts.splice(indexToDelete, 1);
  }

  // logout user and clear fields
  inputCloseUsername.value = inputClosePin.value = '';
  containerApp.style.opacity = 0;
  inputClosePin.blur();
});

// Grant loan button
// Loan condition grant loan if any deposit is greater than 10% of loan ammount
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    currentAccount.movements.some(transaction => transaction >= 0.1 * amount) &&
    amount > 0
  ) {
    // give loan
    currentAccount.movements.push(Number(inputLoanAmount.value));

    // update UI
    updateUI(currentAccount);

    // clear fields and reset
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }
});

// Sort button
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  updateMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (transaction) {
  return transaction > 0;
});

const withdrawals = movements.filter(function (transaction) {
  return transaction < 0;
});

const balance = movements.reduce(function (accumulator, transaction, index) {
  return transaction + accumulator;
}, 0);

// labelBalance.addEventListener('click', function () {
//   console.log(document.querySelectorAll('.movements__value'));
// });

// console.log(
//   Array.from({ length: 10 }, (elem, x) => {
//     return x + 1;
//   })
// );

const totalDeposit = accounts
  .flatMap(function (elem, index) {
    return elem.movements;
  })
  .filter(amount => amount > 0)
  .reduce((acc, amount) => acc + amount);

console.log(totalDeposit);

const noDepositAtleast1000 = accounts
  .flatMap(account => account.movements)
  .filter(amount => amount >= 1000).length;
console.log(noDepositAtleast1000);

const { deposit, withdraw } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sum, amount) => {
      amount > 0 ? (sum.deposit += amount) : (sum.withdraw += amount);
      return sum;
    },
    { deposit: 0, withdraw: 0 }
  );

console.log(deposit, withdraw);
