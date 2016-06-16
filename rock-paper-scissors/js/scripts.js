/*
1.) get user hand
2.) calculate random computer hand
3.) compare hands
4.) display results
*/

var userHand, randHandNum;
var computerHand
var resultsDiv = document.querySelector(".results"), body = document.querySelector("body");
var isPlaying = true;
var playerWins = 0, computerWins = 0;

var handleGame = function(result,color){
  resultsDiv.innerHTML = computerHand + " " + result;
  body.style.backgroundColor = color;
}

while(isPlaying && playerWins !== 3 && computerWins !== 3){
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
      handleGame("it's a tie!","yellow");
    } else if(randHandNum === 1){
      handleGame("you lose","red");
      //increase value of variable by one
      computerWins++;
    } else if (randHandNum === 2){
      handleGame("you win!","chartreuse")
      playerWins++;
    } else {
      resultsDiv.innerHTML = "whoops!";
    }
  } else if(userHand === "paper") {
    if(randHandNum === 0){
      handleGame("you lose!","red")
      computerWins++;
    } else if(randHandNum === 1){
      handleGame("it's a tie","yellow")
    } else if (randHandNum === 2){
      handleGame("you win!","chartreuse")
      playerWins++;
    } else {
      resultsDiv.innerHTML = "whoops!";
    }
  } else if(userHand === "scissors"){
    if(randHandNum === 0){
      handleGame("you lose!","red");
      computerWins++;
    } else if(randHandNum === 1){
      handleGame("you win!","chartreuse");
      playerWins++;
    } else if (randHandNum === 2){
      handleGame("it's a tie!","yellow");
    } else {
      resultsDiv.innerHTML = "whoops!";
    }
  } else {
    resultsDiv.innerHTML = "sorry! we don't support " + userHand;
  }

  if(playerWins !== 3 && computerWins !== 3){
    isPlaying = confirm("do you want to play again?");
  }
}

if(playerWins >= 3){
  resultsDiv.innerHTML = "player wins!";
} else if (computerWins >= 3){
  resultsDiv.innerHTML = "computer wins!"
}
