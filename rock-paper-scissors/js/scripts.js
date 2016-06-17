/*
1.) get user hand
2.) calculate random computer hand
3.) compare hands
4.) display results
*/

var userHand, randHandNum;
var computerHand
var resultsDiv = document.querySelector(".results")
var body = document.querySelector("body")
var playButton = document.querySelector(".play-game")
var playerWinsDisplay = document.querySelector(".player-wins");
var compWins = document.querySelector(".comp-wins");
var radioButtons = document.querySelectorAll("input");
var isPlaying = true;
var playerWins = 0, computerWins = 0;

var handleGame = function(result,color){
  resultsDiv.innerHTML = computerHand + " " + result;
  body.style.backgroundColor = color;
}

playButton.onclick = function(){
  randHandNum = Math.floor(Math.random() * 3)

  //looping through the radio buttons array
  for(var i = 0; i < radioButtons.length; i++){
    //check every button's checked property IN ORDER
    if(radioButtons[i].checked){
      //if it's checked, save the hand value
      userHand = radioButtons[i].value;
    }
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

  playerWinsDisplay.textContent = playerWins;
  compWins.textContent = computerWins;

  if(playerWins >= 3){
    resultsDiv.innerHTML = "player wins!";
  } else if (computerWins >= 3){
    resultsDiv.innerHTML = "computer wins!"
  }
};
