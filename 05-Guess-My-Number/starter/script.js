'use strict';
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 

*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guess = document.querySelector(".guess");
let number = document.querySelector(".number");
let message = document.querySelector(".message");
let score = document.querySelector(".score").textContent;
let highScore = document.querySelector(".highscore");
let againButton = document.querySelector(".again");
let checkButton = document.querySelector(".check");

const handleCheck = () => {
  let guessVal = Number(guess.value);
  if (!guessVal) {
    message.innerHTML = "⛔ Not correct number";
  } else if (guessVal === secretNumber) {
    message.innerHTML = "🎉 Correct number";
    number.innerHTML = secretNumber;
    number.style.width = "30rem";
    document.body.style.backgroundColor = "#77ee43";
    if (+highScore.innerHTML < score) {
      highScore.innerHTML = +score;
    }
  } else if (guessVal > secretNumber) {
    if (+score > 1) {
      message.innerHTML = "📈 too high";
      +score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      message.innerHTML = "😢 you are loser";
    }
  } else if (guessVal < secretNumber) {
    if (+score > 1) {
      message.innerHTML = "📉 too low";
      +score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      message.innerHTML = "😢 you are loser";
    }
  }
};

const hadleAgain = () => {
  document.querySelector(".score").innerHTML = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.style.width = "15rem";
  document.body.style.backgroundColor = "#222";
  guess.value = "";
  message.innerHTML = "Start guessing...";
  number.innerHTML = "?";
};
againButton.addEventListener("click", hadleAgain);
checkButton.addEventListener("click", handleCheck);
