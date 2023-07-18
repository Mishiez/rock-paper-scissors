function getComputerChoice(){
    let computerChoice=['Rock','Paper','Scissors'][Math.floor(Math.random()*3)];
    return computerChoice;  
}
function getPlayerChoice(){
  let playerChoice=prompt("Choose between rock paper and scissors: ")
  return playerChoice.toUpperCase();
}

function playRound(playerSelection,computerSelection){
 
  if(playerSelection==="ROCK"&&computerSelection==="Paper"){
    return "You lose! Paper beats Rock";
  }

  else if(playerSelection==="PAPER"&&computerSelection==="Rock"){
    return "You win! Paper beats Rock";
  }

  else if(playerSelection==="SCISSORS"&&computerSelection==="Rock"){
    return "You lose! Rock beats Scissors"
  }

  else if(playerSelection==="ROCK"&&computerSelection==="Scissors"){
    return "You win! Rock beats Scissors"
  }

  else if(playerSelection==="PAPER"&&computerSelection==="Scissors"){
    return "You lose! Scissors beats paper";
  }

  else if(playerSelection==="SCISSORS"&&computerSelection==="Paper"){
    return "You win! Scissors beats paper"
  }
  else if(playerSelection==="ROCK"&&computerSelection==="Rock"){
    return "It's a tie! Rock cannot beat Rock";
  }
  else if(playerSelection==="SCISSORS"&&computerSelection==="Scissors"){
     return "It's a tie! Scissors cannot beat Scissors";
  }   
  else if(playerSelection==="PAPER"&&computerSelection==="Paper"){
    return "It's a tie! Paper cannot beat Paper";
  }
 else{
    return "Wrong Input! Try again";
  }
}
//console.log(playRound(getPlayerChoice(),getComputerChoice()));

function game(){
  let player=0;
    let computer=0;
  for (let i=0;i<=4;i++){
    let result=playRound(getPlayerChoice(),getComputerChoice());
    console.log(result)
    if(result.includes("win")){
      player++;
    }
    else if(result.includes("lose")){
      computer++;
    }
  }

  if(player>computer){
    console.log("Hurray! Overall youa re the winner");
  }
  else if(computer>player){
    console.log("Try again. Game over")
  }
  else{
    console.log("It's a tie");
  }
}
game();

