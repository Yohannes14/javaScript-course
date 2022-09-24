let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent =message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    displayMessage('No number');
    // document.querySelector('.message').textContent = 'No number';

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Great, correct number');
    // document.querySelector('.message').textContent = 'Great, correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when the guess is wrong
  } else if(guess!==secretNumber){
    if (score > 1) {
        displayMessage(guess >secretNumber ?'Too high, Try again!': 'Too low, try again!');
        // document.querySelector('.message').textContent 
        // = guess >secretNumber ?'Too high, Try again!': 'Too low, try again!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game')
        // document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
      }
  }
//   //when guess is too high
//   else if (guess > secretNumber) {
    

//     // when the guess i too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.message').textContent = 'Too low, try again!';
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
 displayMessage('Start guessing...')
//   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
