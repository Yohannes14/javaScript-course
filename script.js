'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jhon De',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Bahru Mu',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Henok Sh',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Nebil Ha',
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

const displayMovements = function(movements, sort =false){
  
  containerMovements.innerHTML = '';

 // sort the movements
  const movs = sort ? movements.slice().sort((a, b) => a - b)
   : movements

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const calcDisplaybalance =function(acc) {
       acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent =`${acc.balance} birr`;
};


const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
               .filter(mov =>mov >0)
                .reduce((acc, mov) =>acc + mov, 0);
                labelSumIn.textContent =`${incomes} birr`;
  
const out = acc.movements
        .filter(mov =>mov <0)
          .reduce((acc, mov) =>acc + mov, 0);
          labelSumOut.textContent =`${Math.abs(out)} birr`;

const interest = acc.movements
             .filter(mov =>mov >0)
             .map(deposit => (deposit * acc.interestRate) / 100)
             .filter((int, i ,arr) => {
              return int >= 1;
             })
             .reduce((acc, int) => acc + int, 0);
             labelSumInterest.textContent =`${interest} birr`;
};


// cpmputing username

const creatUsernames =function(accs) {
    accs.forEach(function(acc){
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0] )
        .join('');
    });
};
creatUsernames(accounts);
const updateUI =function(acc){
   // Display movements
   displayMovements(acc.movements);


   //Display balance
   calcDisplaybalance(acc);

   // Display summary
   calcDisplaySummary(acc);
}

//Event handler

let currentAccount;
btnLogin.addEventListener('click', function (event){
  // prevent form from submitting
  event.preventDefault();
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // Display UI and message
    labelWelcome.textContent = `Welcome back, 
        ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity =100;

    //Clear input fields
    inputLoginUsername.value =inputLoginPin.value ='';
    inputLoginPin.blur();

    // update ui
   updateUI(currentAccount);
  }
});

// Implementing Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
   }
});

//request loads
btnLoan.addEventListener('click', function(event){
  event.preventDefault();
  const amount =Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements
         .some(mov => mov >= amount * 0.1)) {
           // Add movement
           currentAccount.movements.push(amount);

           //Update UI
           updateUI(currentAccount);
          
         }
         inputLoanAmount.value ='';

});



/// close or delete accouts
btnClose.addEventListener('click', function(event) {
   event.preventDefault();

   if(inputCloseUsername.value === currentAccount.username
    && Number(inputClosePin.value) === currentAccount.pin){
      const index =accounts.findIndex(
        acc => acc.username === currentAccount.username
        );
      //accounts.splice(index, 1);
      //Delete account
      accounts.splice(index, 1);
      //Hidd UI
      containerApp.style.opacity =0;
    } 
    inputCloseUsername.value = inputClosePin.value = '';

});

// sort
 let sorted = false;
btnSort.addEventListener('click', function (event){
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;

});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


/////////////////////////////////////////////////
// Simple array methods

// let arr = ['a', 'b','c','d','e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE
// // console.log(arr.splice(2));
// // arr.splice(-1);
// // console.log(arr);
// //REVERSE
// arr = ['a', 'b','c','d','e'];
// const arr2 = ['j', 'i','h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters =arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join('-'));
///////////////////////////////////////////////////////////

// const arr =[12, 34, 55];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
///////////////////////////////////////////
//Loopin Arrays using forEach


// // for(const movement of movements){
//   for(const [i, movement] of movements.entries()){
//   if(movement >0){
//     // console.log(`You deposited ${movement}`);
//     console.log(`Movement ${i +1}: You deposited ${movement}`);
//   }else {
//     console.log(`Movement ${i +1}: You withdraw ${Math.abs(movement)}`);

//   }
// }
// console.log('---- FOREACH ----')
// movements.forEach(function(mov, i, arr){
//   if(mov >0){
//     // console.log(`You deposited ${mov}`);
//     console.log(`Mov ${i +1}: You deposited ${mov}`);
//   }else {
//     console.log(`Mov ${i +1}: You withdraw ${Math.abs(mov)}`);

//   }
  
// });

// in forEach method does not work in breaks
///////////////////////////////////////////////////////////////////
// forEach with maps and sets
 //Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique =new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })
/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 
*/
 
//  const checkDogs =function(dogsJulia, dogsKate){
//   const dogsJuliaCorrected =dogsJulia.slice();
//   dogsJuliaCorrected.splice(0,1);
//   dogsJuliaCorrected.splice(-2);
//    //console.log(dogsJulia.splice(1, 3));
//    const dogs =dogsJuliaCorrected.concat(dogsKate); // [...dogsJuliaCorrected, ...dogsKate]
//    console.log(dogs);
//    for(const [key, value ] of dogs.entries()){
//     if(value >= 3){
//       console.log(`Dog number ${key +1} is an adult`);
//     }else{
//       console.log(`Dog number ${key +1} is still a puppy`);
//     }

//    }
// }
// checkDogs([3, 5, 2, 12, 7], [9, 16, 6, 8, 3]);
//////////////////////////////////////////////////////////////////

//Map 
// const eurToUsd =1.1;
// const movementsUsd = movements.map(function(mov){
//   return mov * eurToUsd;
// });
// // const  movementsUsd =movements.map(mov=> mov * eurToUsd)
// console.log(movements);
// console.log(movementsUsd);

// // the same as map
// const movementsUsdfor =[];
// for(const mov of movements){
//   movementsUsdfor.push(mov * eurToUsd);

// }
// console.log(movementsUsdfor)

// const movementsDesc =movements.map((mov, i) =>{
//   if(mov >0){
//     return `Mov ${i +1}: You ${mov >0 ? 'deposited': 'withdraw'} ${Math.abs(mov)}`;

//   //     //console.log(`You deposited ${mov}`);
//   //   return `Mov ${i +1}: You deposited ${mov}`;
//   // }else {
//   //   return `Mov ${i +1}: You withdraw ${Math.abs(mov)}`;

//    }
// });
// console.log(movementsDesc);

//////////////////////////////////////////////////////
//The Filterr method

// const deposits =movements.filter(function (mov){
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// //the same as the above without filter
// const depositFor =[];
// for(const mov of movements) if (mov > 0) depositFor.push(mov);
// console.log(depositFor);

// const withdraw =movements.filter(function(mov) {
//   return mov < 0;
// });
// console.log(withdraw);

// // using arrow function
// const withdrawFor =movements.filter(mov => mov < 0 );
// console.log(withdrawFor);

////////////////////////////////////////////////////////////////
//The Reduce method 
// console.log(movements);

//accumulator ->SNOWBALL
// const balance =movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//      return acc + cur

// }, 0);

//using arrow
// const balance =movements.reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log(balance);

// //same as reduce

// let balance2 =0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2);

// //Maximun value

// const max =movements.reduce((acc, mov) => acc > mov ? acc :mov , movements[0])
// console.log(max);
/////////////////////////////////////////////////////////
/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = function(ages){
//   const humanAge =ages.map(age => age <=2 ?  2 * age : 16 + age * 4  );

//  const adult =humanAge.filter(age => age >= 18)


// const avgAge =adult.reduce((acc, age, i, arr)=>acc += age/arr.length +1 , adult[0]);


// console.log(` human Age: ${humanAge} `);
// console.log(` adult Age: ${adult} `);
// console.log(` avg Age: ${avgAge} `);

// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/////////////////////////////////////////////
//The Magin of chaining method

// const eurToUsd =1.1;
// const totalDepositUSD =movements.filter(mov =>mov >0)
//          .map(mov => mov * eurToUsd)
//          .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositUSD);
////////////////////////////////////////////////////
/*
 Rewrite th 'calcAverageHumanAge' function from the previous challenge, 
 but this time as an arrow function, and using chaining!

 TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
 TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

 */

//  const calcAverageHumanAge = function(ages) {
//   const humamAges =ages.map(age => (age <= 2 ? 2 * age : 16 +age * 4));
//   const adults =humamAges.filter(age => age >=18);
//   const avgAge =adults.reduce((acc, age, i, arr) => acc + age /arr.length , 0);
//   return avgAge;
//  };

//  const avg1 =calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
//  const avg2 =calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//  console.log(avg1, avg2);


//  const calcAverageHumanAge2 =ages =>ages
//               .map(age => (age <= 2 ? 2 * age : 16 +age * 4))
//               .filter(age => age >=18)
//               .reduce((acc, age, i, arr) => acc + age /arr.length , 0)


// const avg3 =calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// const avg4 =calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg3, avg4);
///////////////////////////////////////////////
// The find Method
// const firstWithdrrawal =movements.find(mov => mov < 0);
// console.log(firstWithdrrawal);
// console.log(accounts);

// const account =accounts.find(acc => acc.owner === 'Jhon De');
// console.log(account);
///////////////////////////////////////////////////////////////
//Some and every
// console.log(movements);

// //EQUALITY
// console.log(movements.includes(-130));

// //CONDITION
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

///EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov >0));

// //Separate callback
// const deposit = mov => mov >0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
////////////////////////////////////////////////////////////////

// flat and flatMap
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
//  const arrDeep =[[[1, 2], 3], [4, [5, 6]], 7, 8];
//  console.log(arrDeep.flat())
//  console.log(arrDeep.flat(2))

//  const accountMovements =accounts.map(acc => acc.movements);
//  console.log(accountMovements);

//  const allMovements =accountMovements.flat();
//  console.log(allMovements);

//  const overalBalance = allMovements.reduce((acc, mov)=> acc + mov, 0)

// console.log(overalBalance);
 
// const overalBalance =accounts
//          .map(acc => acc.movements)
//          .flat()
//          .reduce((acc, mov) => acc + mov, 0)

//   console.log(overalBalance);
         
//   //flatMap
//   const overalBalance2 =accounts
//          .flatMap(acc => acc.movements)
//          .reduce((acc, mov) => acc + mov, 0)

//   console.log(overalBalance2);
///////////////////////////////////////////////////////////
// Sorting array
// const owners =['Adon', 'Adam', 'Adrtha'];
// console.log(owners.sort());

// //Numbers
// console.log(movements);
// console.log(movements.sort()); // not correct

//return < 0, A, B {keep order}
//return > 0, B, A {Switch order}

// //Ascending
// movements.sort((a, b) => {
//   if(a > b) return 1;
//   if( a < b) return -1;

// });
// movements.sort((a, b) => a-b);
// console.log(movements);

// ///Descending
// movements.sort((a, b) => {
//   if(a > b) return -1;
//   if( a < b) return 1;

// });
// movements.sort((a, b) => b - a)
// console.log(movements);
///////////////////////////////////////////////////////////
// More ways of Creating and filling Arrays
//Empty array + fill method
// const arr =[1,2,3,4,5,6];
// const x = new Array(7);
// console.log(x);
// //  console.log(x.map(()=>4))
//  x.fill(1);
//  x.fill(1, 4)
//  x.fill(1,3,5)

//  console.log(x);
//  arr.fill(23,4, 6)
//  console.log(arr);

//  // Array.from
//  const y = Array.from({length :7}, ()=> 1);
// console.log(y);

// const z = Array.from({length: 7}, (_, i) => i + 1);
// console.log(z)

// labelBalance.addEventListener('click', function (){
//   const movementsUI =Array.from(document
//     .querySelectorAll('.movements__value'));
//     console.log(movementsUI);

//})

//Array Methods Practice
// const bankDepositSum =accounts
//                 .flatMap(acc => acc.movements)
//                 .filter(mov => mov >0)
//                 .reduce((sum, cur) => sum + cur, 0);

//   console.log(bankDepositSum);
  //2
//   const numDeposits100 =accounts
//         .flatMap(acc => acc.movements)
//         .filter(mov => mov >= 1000).length;

// console.log(numDeposits100);
// const numDeposits100 =accounts
// .flatMap(acc => acc.movements)
// // .reduce((count, cur) =>cur >= 1000 ? count + 1 : count, 0)
// .reduce((count, cur) =>cur >= 1000 ? ++count : count, 0)

// console.log(numDeposits100);

// // Prefixed ++ oeprator
// let a = 10;
// console.log(++a);
// console.log(a);

// //3
// const {deposits, withdrawals} = accounts
//        .flatMap(acc => acc.movements)
//        .reduce((sums, cur) =>{
//         // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
//         sums[cur > 0 ? 'deposits' : 'withdrawals'] +=cur
//         return sums;
//        },  {deposits: 0, withdrawals: 0})

//        console.log(deposits, withdrawals)

//   //4
//    //this is a nice title -> This is a nice title
//    const convertTitleCase = function(title){
//     const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
//     const titleCase = title.toLowerCase()
//        .split(' ').map(word => expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
//     return titleCase; 
//    };
//     console.log(convertTitleCase('this is a nice title'));
//     console.log(convertTitleCase('this is a LONG title but not long'));
//     console.log(convertTitleCase('and here is another title with an EXAMPLE'));
  

/*

Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are 
eating too much or too little.
Eating too much means the dog's current food portion is larger than the 
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects �)
The Complete JavaScript Course 26
Hints:
§ Use many different tools to solve these challenges, you can use the summary 
lecture to choose between them �
§ Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion.
Test data:
 
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ]

  //1.
  dogs.forEach(dog => (dog.recFood =Math.trunc(dog
     .weight ** 0.75 * 28)));
     console.log(dogs);
  //2
  const dogSarah =dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(dogSarah)
  console.log(`Sarah dog is eating ${dogSarah.curFood >dogSarah.recFood ? 'much': 'little'}`)

  //3,

  const ownersEatTooMuch =dogs
         .filter(dog => dog.curFood > dog.recFood)
          .flatMap(dog => dog.owners)

    console.log(ownersEatTooMuch);

    const ownersEatTooLittle =dogs
    .filter(dog => dog.curFood < dog.recFood)
     .flatMap(dog => dog.owners)

console.log(ownersEatTooLittle);

//4.

  console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`)
  console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`)

  //5.
  console.log(dogs.some(dog =>dog.curFood === dog.recFood))
  //6.

  const checkEatingOkay =dog =>
    dog.curFood > dog.recFood *0.9 && 
  dog.curFood < dog.recFood * 1.1

  console.log(dogs.some(checkEatingOkay));

  //7,
  console.log(dogs.filter(checkEatingOkay));

  //8
   // Sor
    const dogsCopy =dogs.slice().sort((a, b )=> a.recFood -b.recFood)
    console.log(dogsCopy);
