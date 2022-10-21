const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu:{
            open: 12,
            close: 22,
        },
        fri: {
            open :12,
            close:23,
        },
        sat: {
            open :0,
            close:24,
        },
    },
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

    },
    // orderDelivery: function(obj){
    //     console.log(obj);
    // },
    orderDelivery: function({starterIndex, mainIndex, time, address} ){
        console.log(
            `Order received! ${this.starterMenu[starterIndex]}
               and ${this.mainMenu[mainIndex]}
               will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`here is your declious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },

    orderPizza:function(mainIngredient, ...otherIngredient){
        console.log(mainIngredient, otherIngredient)
    }
};

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








