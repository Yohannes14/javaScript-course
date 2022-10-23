
const weakdays =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weakdays[3]]:{
        open: 12,
        close: 22,
    },
    [weakdays[4]]: {
        open :12,
        close:23,
    },
    sat: {
        open :0,
        close:24,
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 enhanced Object Literals
    openingHours,
  
    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
 
    },
    // orderDelivery: function(obj){
    //     console.log(obj);
    // },
    orderDelivery({starterIndex, mainIndex, time, address} ){
        console.log(
            `Order received! ${this.starterMenu[starterIndex]}
               and ${this.mainMenu[mainIndex]}
               will be delivered to ${address} at ${time}`
        );
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`here is your declious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },

    orderPizza(mainIngredient, ...otherIngredient){
        console.log(mainIngredient, otherIngredient)
    }
};
/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data
 */


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));


// document.querySelector('button').addEventListener(
//     'click', function(){
//         const text =document.querySelector('textarea')
//         .value;
//         console.log(text);
//     });



// //Working with string part 3
// console.log('a+b+c+d+e+f+g+h'.split('+'));
// const [firstName, lastName] ='Jhon Degu'.split(' ');

// const newName= ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName) 

// const capitalizeName =function(name){
//     const names =name.split(' ');
//     const nameUpper =[];
//     for(const n of names){
//         // nameUpper.push(n[0].toUpperCase() + n.split(1));
//         nameUpper.push(n.replace(n[0] , n[0].toUpperCase()))
//     }
//     console.log(nameUpper.join(' '));
// }
// capitalizeName('jessica ann smith davis')
// capitalizeName('john degu')

// //Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, "+"));
// console.log('Jonas'.padStart(25,"+").padEnd(35, '+'));

// const meskCreditCard =function(number){
//     const str = number + '';
//     const last =str.slice(-4);
//     return last.padStart(str.length, '*');

// }
// console.log(meskCreditCard(433434343452));
// console.log(meskCreditCard('433434343'));
// //Repeat 
// const message2 = 'Bad weather... All Departues Delayed...';
// console.log(message2.repeat(5))

// const planesInLine =function(n){
//     console.log(`There are ${n} planes in line ${''.repeat(n)}`);
// }

// planesInLine(5)

// //Working with string part-2
// const airline = 'Addis Ababa Ethiopia';
// console.log(airline.toLowerCase());

// // Fix capitalization in name
// const passenger ='jOnAS';
// const passengerLower =passenger.toLowerCase();
// const passengerCorrect =passengerLower[0].toUpperCase()+ passengerLower.slice(1);
// console.log(passengerCorrect);

// //coparing emails
// const email ='hello@jonas.jo';
// const loginEmail =' Hello@Jonas.Io \n';
// // const lowerEmail =loginEmail.toLowerCase(); 
// // const trimmedEmail =lowerEmail.trim(); // to remove whiteSpace
// // console.log(trimmedEmail);

// ///the same as
// const normallizedEmail =loginEmail.toLowerCase().trim();
// console.log(normallizedEmail);

// console.log(email === normallizedEmail);

// //replacing
// const priceGB ='288,97E';
// const priceUs =priceGB.replace('E', '$').replace(',' , '.');
// console.log(priceUs)

// const announcement ='All passengers come to bording door 23!';
// console.log(announcement.replace('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans
// const plane =' Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('a'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//     console.log('Part of the new arirbus family')
// }

// //Practice exercise
// const checkbaggege =function(items){
//     const baggage =items.toLowerCase();
//     if(baggage.includes('knife') || baggage.includes('gun')){
//         console.log('You are Not allowed on board');
//     }
//     else{
//         console.log('Welcome aboard!');
//     }

// }
// checkbaggege('I have a laptop, some foof and a pocket Knife');
// checkbaggege('Socks and camera');
// checkbaggege('Got some snacks and a gun for protection');



//Working with strings Part 1
// const airline = 'Addis Ababa Ethiopia';
// const plan ='Et320';
// console.log(plan[0]);
// console.log(plan[1]);
// console.log(plan[2]);
// console.log('B737'[0]);
// console.log(airline.length);

// console.log(airline.indexOf('a'));
// console.log(airline.lastIndexOf('a'));
// console.log(airline.indexOf('Ethiopia'));

// console.log(airline.slice(6));

// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat =function(seat){
//     // B and E are middle seats
//     const s =seat.slice(-1);
//     if(s=== 'B' || s ==='E')
//        console.log('You got the middle seat');
//        else console.log('You got lucky')
// };
// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')

// console.log(new String('Jhon'))
// console.log(typeof new String('Jhon'))

// console.log(typeof new String('jhon').slice(1));



/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK �

// */
//  const gameEvents = new Map([
//  [17, '⚽ GOAL'],
//  [36, '� Substitution'],
//  [47, '⚽ GOAL'],
//  [61, '� Substitution'],
//  [64, '� Yellow card'],
//  [69, '� Red card'],
//  [70, '� Substitution'],
//  [72, '� Substitution'],
//  [76, '⚽ GOAL'],
//  [80, '⚽ GOAL'],
//  [92, '� Yellow card'],
//  ])
 
//  //1 .
//  const events = [...new Set(gameEvents.values())];
//  console.log(events);

//  //2.
//  gameEvents.delete(64);
//  console.log(gameEvents)

//  //3.
//  console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`)

//  const time =[...gameEvents.keys()].pop();
//  console.log(time);
//  console.log(
//      `An event happened, on average, every 
//      ${time/gameEvents.size} minutes`
//      );



//  //4 .
//  for( [key, value] of gameEvents){
//     if(key<=45) console.log(`FIRST HALF ${key} : ${value}`)
//     console.log(`SECOND HALF ${key} : ${value}`)
//  }



////////////////////////////////////////////////////////
//Map iteration
//  const question = new Map([
//     ['question','What is the best programming language i nthe world'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct'],
//     [false, 'Try again'],
//  ]);
//  console.log(question);

//  //Convert object to map
//  console.log(Object.entries(openingHours));
//  const hoursMap =new Map(Object.entries(openingHours));
//  console.log(hoursMap) 
//  for(const [key ,value] of question){
//     if(typeof key ==='number') console.log(`Answer ${key}: ${value}`)

//  }
 //const answer =Number(prompt('Your answer'));
//  const answer =3;
//  console.log(answer)

// console.log(question.get(question.get('correct')===answer))
 
// //Convert map to array
// console.log([...question]);
// //console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

//////////////////////////////////////////////////////////
//Maps Fundamentals
//const rest =new Map();
// rest.set('name', 'Classico Itaiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, portugal'));

// rest.set('categories', ['Itslian', 'pizzeria', 'vegetarian', 'organic'])
//      .set('open', 11)
//      .set('close', 23)
//      .set('true', 'We are open:D')
//      .set('false', 'We are closed : (');
// // console.log(rest); 

// console.log(rest.get('name'));
// console.log(rest.get('true'));
// console.log(rest.get(1));

// console.log(rest.has('categories'));
// rest.delete(2);
// const arr =[1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1', 'heading'))
// console.log(rest)
// // rest.clear();
// console.log(rest.size);

// console.log(rest.get(arr));




//////////////////////////////////////////////////////////
//Set : set is the collection of unique values. That means set can never have deplicate values 
// const orderSet =new Set([
//     'Pasta',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ]);
// console.log(orderSet);

// console.log(new Set(['Jho']))
// console.log(orderSet.size);
// //check 
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// //orderSet.clear();
// console.log(orderSet);
// for(const order of orderSet) console.log(order); 
// //Examples
// const staff =['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef','Waiter'];
// const staffUnique =[...new Set(staff)];
// console.log(staffUnique)
// console.log(
//     new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef','Waiter']).size
// );

// console.log(new Set('Jonasnndnddfgdfh').size);

 



/////////////////////
//Coding challenge #2

     const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
        },
        };

/*
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
 */

// //1.
// for(const [i, player] of game.scored.entries()){
//      console.log(`Goal ${i+1} : ${player}`);
// }
// //2.

//  let avg =0;
//  const odds =Object.values(game.odds);
// for(const x of odds){
//     avg += x;
// }
// avg /= odds.length;
// console.log(avg);

// //3. Odd of victory Bayern Munich: 1.33


// for (const [team, odd] of Object.entries(game.odds)){
//     const teamStr =team ==='x' ? 'draw' :`victory ${game[team]}`;
// console.log(`Odd of ${teamStr} ${odd}`);
// }

// //4.
//  let scorers ={
//     name: '',
//  };




//////////////////////////////
//Looping Object key and Entries

//property names
// const properties =Object.keys(openingHours);
// console.log(properties)

// let openStr = `We are open on ${properties.length}
//     days: `;
//     for(const day of Object.keys(openingHours)){
//         openStr += `${day}, `;
//     }
//     console.log(openStr)

    //property Values
   // const values =Object.values(openingHours);
    // console.log(values)

//Entire object
// const entries = Object.entries(openingHours);
// console.log(entries)

// for(const [key, {open, close }] of entries){
//     console.log(`On ${key} we open at ${open} close ${close}`);
// }


/////////////////////////////
//Optional Chaining

// if(restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon);

//console.log(restaurant.openingHours.mon.open); ///undefine
//With optional chainig
// console.log(restaurant.openingHours?.mon?.open);

//Example
// const days =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
//     console.log(day);
//     const open =restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`)
// }

//Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

//arrays
// const users =[
//     {name: "Joh", email:"Joh@gmail.com"}
// ]; 
// const users =[]; 
// console.log(users[0]?.name ?? 'User array empty')
// if(users,length> 0) console.log(users[0].name);
// else console.log('user array emply')

/// Looping Array

// const menu =[...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const item of menu) console.log(item);

// // for(const item of menu.entries()){
// //     console.log(`${item[0] +1}:${item[1]}`);
// // }  
// for(const [i, el] of menu.entries()){
//     console.log(`${i +1}:${el}`);
// }     
// console.log(...menu.entries());

/////////////////////////////////////////////
//Coding Challeng #1
/* 
 We're building a football betting app (soccer for my) American friends)

 Suppose we got data from web service about a certain game(below). 
 in this challenge we're gonna work with the data. So here are your tasks:

  1.Create one player array for each team (variables 'player1' and 'player2')
  2. The first player in any player array is the goalkeeper and the others are field players.
    For Bayern Munich (team 1) create one variable ('gk')
    with the goalkeeper's name, and one array ('fieldPlayers') with all the remainig 10 field
    players
  3. Create an array 'allPlayers' containing all players of both teams (22 players)
  4. During the game, bayern Munich (team 1) used 3 substitute players. So create a new array ('playersFinal')
     containig all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisit'
  5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
  6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
     and prints each of them to the console, along with the number of goals who were scored
     (number of player names passed in)
  7. The team with the lower odd is more likely to win, print to the console which team is more likely to win, Without using an if/else statement or the ternary operator.

   TEST DATA FOR 6: Use players 'Davies', 'Muller',
     'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
   */
// //1
// const [player1,player2] = game.players;
// //2
// const [gk, ...fieldPlayers] = player1;
// //3
// const allPlayers= [...player1, ...player2];
// //4
// const playersFinal =[...player1, 'Thiago', 'Coutinho' ,'Perisit'];
// //5

// const {odds:{team1, x:draw, team2}} =game;
// console.log(team1, draw, team2)

// //6

// const printGoals =function(...player){
//      console.log(`${player.length} were scored`)
// }
 
// printGoals(...game.scored);  

// //7
//  team1 <team2 && console.log('Team 1 is more likely to win');
//  team2 <team1 && console.log('Team 2 is more likely to win');


/////////////////////////////////
///Logical Assignment Operators
//  const rest1 ={
//     name:"John",
//     // numGuests: 20,
//     numGuests: 0,
//  };

//  const rest2 ={
//     name: 'la Piazza',
//     owner: 'Giovanni Rossi',
//  };
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//console.log(rest1, rest2);
//OR assignment operator
// rest1.numGuests ||=10;
// rest2.numGuests ||=10;

//Nullish assignment operator (null or undefind)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS'
// rest2.owner = rest2.owner && '<ANONYMOUS'
// rest1.owner &&= '<ANONYMOUS'
// rest2.owner &&= '<ANONYMOUS'
// console.log(rest1, rest2);


////////////// Nullish Coalescing operator(__)
// restaurant.numGuests =0;  
// const guests =restaurant.numGuests || 10;
// console.log(guests);

//Nullish: null and undefind (NOT 0 or '')
// const guestCorrect =restaurant.numGuests ?? 10;
// console.log(guestCorrect);
 
///////////////
// Short Circuiting && ||
 //use any data type, return any data type, short-circuiting
//  console.log('------OR------');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log( undefined || null);

// console.log(undefined || 0|| "" || "Hello" ||23)
// restaurant.num =23;
// const guests1 =restaurant.num ? restaurant.num :10
// console.log(guests1);

// const guests2 =restaurant.num || 10;
// console.log(guests2);
// console.log('------AND------');
// console.log( 0 && 'Jonas');
// console.log( 5 && 'Jonas');
 
// ///Practical example
// if(restaurant.orderPizza){
//     restaurant.orderPizza("dd", "asd");
// }
// restaurant.orderPizza && restaurant.orderPizza('a','d');

///////////////////////////////////////////
//Rest pattern and parameters

 //1) Destructuring
//Spread, because o nrigth side of =
// const arr = [1,3, ...[3,5]];

//REST, because on left side of =
// const [a, b, ...others] =[1,3,4,5,6];
// console.log(a, b, others);
// const [pizza,  risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// //Objects
// const {sat, ...weakdays} =restaurant.openingHours;
// console.log(weakdays);

//2) functions
// const add = function(...numbers){
//     let sum =0;
//     for(let i=0; i<numbers.length; i++){
//        sum += numbers[i];
//        console.log(sum)
//     }
    

// }
// add(2,3);
// add(2,3,4,5,6,7);
// const x = [23, 5,7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'alives', 'spinach');
// restaurant.orderPizza('mushrooms');

///////////////////////////////////
/// Spread Operator(...)
// const arr = [1,3,4,5,6];
// const badNewArr =[1,2, arr[1], arr[1],arr[2]];
// console.log(badNewArr);

// const newArr =[1,2, ...arr];
// console.log(newArr);
// console.log(...newArr)

// const newMenu =[...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// //Copy array
// const mainmenuCopy = [...restaurant.mainMenu];

// //Join 2array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Interables: array, strings maps, sets ,NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtman`);

// //Real world examples
// // const ingredients =[ 
// //                     prompt('Let\'s make pasta! Ingredient 1?'),
// //                     prompt('Let\'s make pasta! Ingredient 2?'),
// //                     prompt('Let\'s make pasta! Ingredient 3?')
// //                     ];
// // console.log(ingredients);


// //restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
// // restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = {fonderIn:1988, ...restaurant, founder: 'Joo'}
// console.log(newRestaurant);
// const restaurantCopy ={...restaurant};
// restaurantCopy.name ="Ristorant Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);





///////////////////////////
//Destructuring Objects

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'addis ababa, 1000',
//     mainIndex: 2,
//     starterIndex: 2,
// });
//const {name, openingHours, categories} =restaurant;
//console.log(name, openingHours, categories);
// const { name:restaurantName, 
//        openingHours:hours, 
//        categories:tags
//     } =restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const {menu =[],starterMenu:starters =[]} =restaurant;
// console.log(menu, starters)


//Mutating variables
// let a =111;
// let b =10;
// const obj ={a:23,b:4, c:14};
// ({a,b} =obj);
// console.log(a, b);

 ///Nested Objects
//   const {fri}= openingHours;
//   console.log(fri);
//   const {fri:{open, close}}= openingHours;
//   console.log(open, close);




//////////////////////////////////////////
  //Destructuring Array

  //let [main, , secondary] =restaurant.categories;

//switching variables
// console.log("before:", main, secondary);
// let temp = main;
// main =secondary;
// secondary =temp;
// console.log(" after :", main, secondary)

// [main, secondary] =[secondary, main];
// console.log(main, secondary)

//Receive 2 return values from a function

// const [starter, mainCourse] =restaurant.order(2, 0); 
// console.log(starter, mainCourse);
 
//Nested destructuring
//const nested =[2, 4, [5,6]];
// const [x,, y] =nested;
// console.log(x,y)
// const [ x,, [y,z]] =nested;
// console.log(x, y,z);

//Default values
// const [p, q =1, r=1] =[8, 9];
// console.log(p, q, r);
/////////////////////////////////////////////////////








