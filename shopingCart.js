//Exporting module

console.log('Exporting module')

//Blocking code
// console.log('Start fetching users')
// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finshing fetching users')


const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`)
};

const totalPrice = 237;
const totalQuantity =23;

export {totalPrice, totalQuantity};

export default  function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`)
};

