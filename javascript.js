let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let computerChoice=["Rock","Paper","Scissors"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}
console.log(getComputerChoice());

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

console.log(getHumanChoice());