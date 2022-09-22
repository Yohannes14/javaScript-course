const friends = ["Michael", "Steven", "Peter"]
// console.log(friends)
//  const years = new Array(1992, 1984, 1978)
//  console.log(years)
// console.log(friends[friends.length -1])
// friends[2] ='Joo'
// console.log(friends)
// const mix = [friends, years]
// console.log(mix)

// //exercise

// // const calcAge = function (birthYear){
// //     return 2037-birthYear
// // }
// //  const age1 =calcAge(years[1])
// //  console.log(age1)
//  // add element
// friends.push('joo')
// console.log(friends)
// const newLength = friends.push('aba')
// console.log(newLength)
// friends.unshift('yoh')
// console.log(friends)

// //remove element 
// friends.pop();
// console.log(friends)
// const popped =friends.pop()
// console.log(popped)
// friends.shift()
// console.log(friends)
// console.log(friends.indexOf('Steven'))

// if(friends.includes('Steven'))
// console.log('You have friend Steven')

//coding challenge

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

//answer 
//1
 const calcTip =(bill)=>{
    if(bill>=50 && bill<=300)
        return bill*0.15
    else
        return bill*0.20
 }
 const bills = [125, 555, 44];
 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
 console.log(bills, tips, totals);