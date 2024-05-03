let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let computerChoice=["ROCK","PAPER","SCISSORS"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}
//console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice=prompt("Choose between 'Rock','Paper' or 'Scissors': ");
    humanChoice=humanChoice.toUpperCase();
    if(humanChoice==="ROCK"||humanChoice==="PAPER"||humanChoice==="SCISSORS"){
        return humanChoice;
    }
    else{
        return "Please enter the correct choice.";
    }
}

//console.log(getHumanChoice());


function playRound(humanChoice,computerChoice){
    if(humanSelection==="ROCK"&&computerSelection==="PAPER"){
        computerScore++;
        return "You lose";
    }
    else if(humanSelection==="PAPER"&&computerSelection==="ROCK"){
        humanScore++;
        return "You win";
    }
    else if(humanSelection==="SCISSORS"&&computerSelection==="PAPER"){
        humanScore++;
        return "You win";
    }
    else if(humanSelection==="PAPER"&&computerSelection==="SCISSORS"){
        computerScore++;
        return "You lose";
    }
    else if(humanSelection==="ROCK"&&computerSelection==="SCISSORS"){
        humanScore++;
        return "You win";
    }
    else if(humanSelection==="SCISSORS"&&computerSelection==="ROCK"){
        computerScore++;
        return "You lose";
    }
    else{
        return "You tie";
    }
    
}
const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();

console.log(playRound(humanSelection,computerSelection));
console.log(humanScore);