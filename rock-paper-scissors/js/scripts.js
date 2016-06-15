/*
1.) get user hand
2.) calculate random computer hand
3.) compare hands
4.) display results
*/

var userHand;
var randHandNum;
var resultsDiv = document.querySelector(".results");
var isPlaying = true;
var computerHand;

while(isPlaying === true){
  userHand = prompt("rock, paper, or scissors?");
  randHandNum = Math.floor(Math.random() * 3)

  while(userHand !== "rock" && userHand !== "paper" && userHand !== "scissors"){
    userHand = prompt("not quite. rock, paper, or scissors?");
  }

  if(randHandNum === 0){
    computerHand = "computer threw rock, fam!";
  } else if(randHandNum === 1){
    computerHand = "computer threw paper, fam!";
  } else if(randHandNum === 2){
    computerHand = "computer threw scissors, fam!";
  } else {
    computerHand = "error";
  }

  if(userHand === "rock"){
    if(randHandNum === 0){
      resultsDiv.innerHTML = computerHand + " it's a tie!";
    } else if(randHandNum === 1){
      resultsDiv.innerHTML = computerHand + " you lose!";
    } else if (randHandNum === 2){
      resultsDiv.innerHTML = computerHand + " you win!";
    } else {
      resultsDiv.innerHTML = computerHand + " it's a tie!";
    }
  } else if(userHand === "paper") {
    if(computerHand === 0){
      resultsDiv.innerHTML = "computer threw rock! it's a tie!";
    } else if(computerHand === 1){
      resultsDiv.innerHTML = "computer threw rock! it's a tie!";
    } else if (computerHand === 2){
      resultsDiv.innerHTML = "computer threw rock! it's a tie!";
    } else {
      resultsDiv.innerHTML = "computer threw rock! it's a tie!";
    }
  } else if(userHand === "scissors"){
    if(computerHand === 0){
      resultsDiv.innerHTML = "computer threw rock! it's a tie!";
    } else if(computerHand === 1){
      resultsDiv.innerHTML = "computer threw rock! it's a tie!";
    } else if (computerHand === 2){
      resultsDiv.innerHTML = "computer threw rock! it's a tie!";
    } else {
      resultsDiv.innerHTML = "computer threw rock! it's a tie!";
    }
  } else {
    resultsDiv.innerHTML = "sorry! we don't support " + userHand;
  }

  isPlaying = confirm("do you want to play again?");
}
