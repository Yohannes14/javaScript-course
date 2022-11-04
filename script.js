//Importing module
// import {addToCart, totalPrice as tp, totalQuantity} from './shopingCart.js';
// addToCart('bread', 6); 
// console.log(tp, totalQuantity)



// import * as ShoppingCart from "./shopingCart.js"
// console.log('Exporting module');
// ShoppingCart.addToCart('bread', 6);
// console.log(ShoppingCart.totalPrice);

import add, {cart} from "./shopingCart.js";
add('pizza', 4)
add('pizza', 4)
add('pizza', 7)
add('pizza', 6)
console.log(cart)
///////////////////////////////////////////////////
//top level await

// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data);


const getLastPost = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {title:data.at(-1).title, text:data.at(-1).body};
}

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

// Top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);

/////////////////////////////////////////////////////////
// The module pattern
const ShoppingCart2 = (function() {
 
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;
    const addToCart = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart
        (shipping cost is ${shippingCost})`)
    };
    const orderStock = function(product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        orderStock,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('apple', 6);
console.log(ShoppingCart2);

// console.log(ShoppingCart2.shippingCost); // not working

///////////////////////////////////////////////////////////
/*
//CommonJS Modules
//Export
export.addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart
    (shipping cost is ${shippingCost})`)
};

//Import 
const {addToCart} =require('./shopingCart.js');
*/
///////////////////////////////////////////////////////////
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state ={
    cart: [
        {product: 'bread', quantity: 6},
        {product: 'pizza', quantity: 5},
    ],
    user :{loggedIn: true},
};

const stateClone = Object.assign({}, state);

const stateDeepClone = cloneDeep(state);
stateClone.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

// if(module.hot) {
//     module.hot.accept()
// }

//////////////////////////////////////////////
//Configuring Babel and Polyfilling
class Person {
    #greeting = 'Hey'
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`)
    }
}
const jhon = new Person('Jhon');

console.log('Jhon' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('Test').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find'

// Polifilling async function
import 'regenerator-runtime/runtime'


