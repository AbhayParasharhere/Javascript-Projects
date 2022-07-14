'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-07-11T17:01:17.194Z',
    '2022-07-12T23:36:17.929Z',
    '2022-07-14T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

const curDate = new Date();
const locale = navigator.language;
const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

// Date operations example
// console.log(
//   (new Date('2037 jan 14 3:14 PM') - curDate) / (1000 * 60 * 60 * 24)
// );

const formatDate = function (date, locale) {
  const calcDaysPass = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPass(curDate, date);

  if (daysPassed === 0) return `Today`;
  else if (daysPassed === 1) return `Yesterday`;
  else if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const calcAndDisplayBalance = function (account) {
  const balance = account.movements
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  account.balance = balance;
  labelBalance.textContent = `${formatAmount(
    balance,
    account.locale,
    account.currency
  )}`;
};

const formatAmount = function (amount, locale, usrCurrency) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: `${usrCurrency}`,
  }).format(amount);
};

const updateMovements = function (acc, sort = false) {
  containerMovements.innerHTML = ''; // clear the existing html code

  // sort the array if sorted is true
  const transactions = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  transactions.forEach(function (movement, index) {
    const moveType = movement > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates.at(index));
    const displayDate = formatDate(date, acc.locale);

    const htmlCode = `
    <div class="movements__row">
      <div class="movements__type movements__type--${moveType}">${
      index + 1
    } ${moveType}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formatAmount(
        movement,
        acc.locale,
        acc.currency
      )}</div>
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

  labelSumIn.textContent = `${formatAmount(
    income,
    account.locale,
    account.currency
  )}`;
  labelSumOut.textContent = `${formatAmount(
    incomeOut,
    account.locale,
    account.currency
  )}`;
  labelSumInterest.textContent = `${formatAmount(
    interest,
    account.locale,
    account.currency
  )}`;
};
const updateUI = function (acc) {
  calcAndDisplayBalance(acc);
  updateMovements(acc);
  calcDisplaySummary(acc);
};
createUserNames(accounts);

// Event handlers

let currentAccount;
let logoutTimer;
let countdownTimer;

const manageLoginTime = function () {
  if (logoutTimer || countdownTimer) {
    clearInterval(countdownTimer);
    clearTimeout(logoutTimer);
  }
  // must be atleast 1 minute
  const timeUntilLogout = 2 * 60 * 1000; // 5 minutes in ms

  // logout after 5 minutes have passed
  logoutTimer = setTimeout(function () {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
    clearInterval(countdownTimer);
  }, timeUntilLogout + 1000);

  const dateObj = new Date(0);
  dateObj.setMinutes(timeUntilLogout / (60 * 1000));
  dateObj.setSeconds(1);

  // timer that displays time passed called every second
  countdownTimer = setInterval(function () {
    dateObj.setTime(dateObj.getTime() - 1000);
    labelTimer.textContent =
      `${dateObj.getMinutes()}`.padStart(2, 0) +
      ':' +
      `${dateObj.getSeconds()}`.padStart(2, 0);
  }, 1000);
};
// to login
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    //display UI, and greet user
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(' ')
      .at(0)}`;

    manageLoginTime();
    // display date and time of current user login
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(curDate);

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
  const amount = +inputTransferAmount.value;

  const transferAcc = accounts.find(
    account => account.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    transferAcc.username !== currentAccount.username
  ) {
    const transacDate = new Date().toISOString();
    // transfer money
    transferAcc?.movements.push(amount);

    // reduce money from cur account
    currentAccount.movements.push(-amount);

    // push the transaction dates in the transfer and current account
    transferAcc?.movementsDates.push(transacDate);
    currentAccount.movementsDates.push(transacDate);

    // calculate new cur balance, new summary and update movements
    updateUI(currentAccount);

    // clear timers
    clearInterval(countdownTimer);
    clearTimeout(logoutTimer);
    manageLoginTime();
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
    +inputClosePin.value === currentAccount.pin
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
  const amount = Math.floor(inputLoanAmount.value);
  if (
    currentAccount.movements.some(transaction => transaction >= 0.1 * amount) &&
    amount > 0
  ) {
    const transacDate = new Date().toISOString();

    const timeTowait = 3 * 1000;
    const loanTimer = setTimeout(
      (amount, transacDate, currentAccount) => {
        // give loan
        currentAccount.movements.push(+amount);

        // push transac date
        currentAccount.movementsDates.push(transacDate);

        // update UI
        updateUI(currentAccount);
      },
      timeTowait,
      amount,
      transacDate,
      currentAccount
    );

    // clear timers
    clearInterval(countdownTimer);
    clearTimeout(logoutTimer);
    manageLoginTime();

    // clear fields and reset
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }
});

// Sort button
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  updateMovements(currentAccount, !sorted);

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

// console.log(totalDeposit);

const noDepositAtleast1000 = accounts
  .flatMap(account => account.movements)
  .filter(amount => amount >= 1000).length;
// console.log(noDepositAtleast1000);

const { deposit, withdraw } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sum, amount) => {
      amount > 0 ? (sum.deposit += amount) : (sum.withdraw += amount);
      return sum;
    },
    { deposit: 0, withdraw: 0 }
  );

// console.log(deposit, withdraw);
