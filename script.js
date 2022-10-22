
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

//      const game = {
//         team1: 'Bayern Munich',
//         team2: 'Borrussia Dortmund',
//         players: [
//         [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//         ],
//         [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//         ],
//         ],
//         score: '4:0',
//         scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//         date: 'Nov 9th, 2037',
//         odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//         },
//         };
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








