"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jhon De",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-07-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Bahiru Mu",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // else {
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();

  //   return `${day}/${month}/${year}`;
  // }

  return Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
       <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)} birr</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)} birr`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)} birr`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)} birr`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} birr`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//Experimenting API


//date/month/year

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time

    const now = new Date();
const options ={
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //numeric
  year: 'numeric', //2-digit
  // weakday: 'long',
}
// const locale =navigator.language;
labelDate.textContent =new Intl.DateTimeFormat
(currentAccount.locale, options).format(now);
    // const now = new Date();
    // labelDate.textContent = now;
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour} :${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 ===23.0);
// //Base 10 - 0 to 9
// //Binary base 2 - 0 1
// console.log(0.1 +0.2);
// //Parsing

// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('e23'));
// console.log(Number.parseFloat('30.5px'));
// // console.log(parseFloat('30.55px'));

// console.log(Number.isNaN(30));
// console.log(Number.isNaN('30'));
// console.log(Number.isNaN(30 / 0 ));

// //CHecking if value is number
// console.log(Number.isFinite(20))
// console.log(Number.isFinite('20'))

// console.log(Number.isFinite(+'20X'))

// console.log(Number.isInteger(20))
// console.log(Number.isInteger('20'))
// console.log(Number.isInteger(20 / 0))

//////////////////////////////////////////////////
// //Math and Roounding
// console.log(Math.sqrt(25));
// console.log(Math.max(25, 33, 45, 6, 8, 0));
// console.log(Math.PI * Number.parseFloat('10px') **2);
// console.log(Math.trunc(Math.random() * 10) +1);

// const randomInt =(min, max) =>
//        Math.trunc(Math.random() * (max -min) +1) +min;
// // 0...1 -> 0...(max -min) ->min...max
// // console.log(randomInt(10, 20))

// // Rounding intergers
// console.log(Math.trunc(23.3))

// console.log(Math.round(23.3))
// console.log(Math.round(23.8))

// console.log(Math.ceil(23.3))
// console.log(Math.ceil(23.8))

// console.log(Math.floor(23.3))
// console.log(Math.floor('23.8'))

// console.log(Math.trunc(-23.3))
// console.log(Math.floor(-23.3))

// //Rounding decimals
// console.log((12.7).toFixed(0))
// console.log((12.7).toFixed(1))
// console.log((12.7).toFixed(2))
// console.log(+(12.347).toFixed(2))
// console.log(5 % 2);
// console.log(5 / 2);
// console.log(8 % 3)
// console.log(8 / 3)

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(9));
// console.log(isEven(10));

// labelBalance.addEventListener('click', function(){
//   [...document.querySelectorAll('.movements__row')]
//     .forEach(function(row, i) {
//       if(i % 2 === 0) row.style.bachgroundColor = 'oragered';
//     });

// });
//////////////////////////////////////////////////////////////
// Numeric Separators

// const diameter = 287_460_000000000;
// console.log(diameter);

// const priceCenter =345_99;
// console.log(priceCenter);

// const transferFree1 =15_00;
// const transferFree2 =1_500;
// console.log(transferFree1, transferFree2)

// const PI  =3.343;
////////////////////////////////////////////////////////////////
// Working with BigInt

// console.log(2 ** 52 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log( 2 ** 53 + 1);
// console.log(BigInt(3774535914809035889790418964014))

// //Operation
// console.log(10000n + 10000n);
////////////////////////////////////////////////////////////////
//Create a date

// const now =new Date();
// console.log(now);

// console.log(new Date('Aug 02 2020 18:05:41'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// //Working with dates
//  const future =new Date(2037, 10 ,19, 15, 23);
//  console.log(future);
//  console.log(future.getFullYear());
//  console.log(future.getMonth());
//  console.log(future.getDate());
//  console.log(future.getDay());
//  console.log(future.getHours());
//  console.log(future.getMinutes());
//  console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(214225698000))

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

///////////////////////////////////////////////
//Operations with DataTransfer

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

// console.log(days1);
//////////////////////////////////////////////////////////////////
//Internationalizing Numbers

const num =3884764.23;

const options ={
  style : "currency", //unit
  unit: "celsius",
  currency: 'EUR'

}
console.log('US:    ', new Intl.NumberFormat('en-US').format(num))
console.log('Germany:', new Intl.NumberFormat('en-US').format(num))
console.log('Ethiopia:', new Intl.NumberFormat('en-US').format(num))
console.log('Syria:', new Intl.NumberFormat('en-US').format(num))
console.log('ar-SY:', new Intl.NumberFormat('en-US').format(num))

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
)