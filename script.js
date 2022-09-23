///////////////////////////////////////
// Introduction to Objects
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
//   ];
//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };
  ///////////////////////////////////////
  // Dot vs. Bracket Notation
//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };
//   console.log(jonas);
//   console.log(jonas.lastName);
//   console.log(jonas['lastName']);
//   const nameKey = 'Name';
//   console.log(jonas['first' + nameKey]);
//   console.log(jonas['last' + nameKey]);
  // console.log(jonas.'last' + nameKey)
//   const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
//   if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
//   } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
//   }
//   jonas.location = 'Portugal';
//   jonas['twitter'] = '@jonasschmedtman';
//   console.log(jonas);
  // Challenge
  // "Jonas has 3 friends, and his best friend is called Michael"
 // console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
  ///////////////////////////////////////
  // Object Methods
//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }
    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }
//     calcAge: function () {
//       this.age = 2037 - this.birthYeah;
//       return this.age;
//     },
//     getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
//   };
//   console.log(jonas.calcAge());
//   console.log(jonas.age);
//   console.log(jonas.age);
//   console.log(jonas.age);
//   // Challenge
//   // "Jonas is a 46-year old teacher, and he has a driver's license"
//   console.log(jonas.getSummary());

  
  ///////////////////////////////////////
  // Coding Challenge #3
  
  /*
  Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
  1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
  2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
  3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
  GOOD LUCK 😀
  */
  const markMiller ={
    fullName :' Mark Miller',
    mass : 78,
    heigth: 1.69,
    calcBMI: function(){
        return this.mass/this.heigth**2
    }
  }
  const johnSmith ={
    fullName :' JohnSmith',
    mass : 92,
    heigth: 1.95,
    calcBMI: function(){
        return this.mass/this.heigth**2
    }
  }

  //console.log(markMiller.calcBMI(), johnSmith.calcBMI())
    if (johnSmith.calcBMI() > markMiller.calcBMI()) {
        console.log(`${johnSmith.fullName}'s BMI(${johnSmith.calcBMI()}) is higher than ${markMiller.fullName}'sBMI(${markMiller.calcBMI()})!`)
      } else if (markMiller.calcBMI()>johnSmith.calcBMI() ) {
        console.log(`${markMiller.fullName}'s BMI(${markMiller.calcBMI()}) is higher than ${johnSmith.fullName}'sBMI(${johnSmith.calcBMI()})!`)
      }