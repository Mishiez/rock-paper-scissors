function getComputerChoice(){
    const arrayList=["rock","paper","scissors"];
    const computerChoice=arrayList[Math.floor(Math.random()*arrayList.length)];
    return computerChoice;
}

function getHumanChoice(){
    let userInput=prompt("Choose between rock,paper and scissors: ");
    return userInput;
}


/*function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        return console.log(`You tie ${humanChoice} cannot beat ${computerChoice}`);
    }
    else if(humanChoice==="rock"&&computerChoice==="paper"){
        computerScore++;
        return console.log(`You lose ${computerChoice} beats ${humanChoice}`);
    }
    else if(humanChoice==="rock"&&computerChoice==="scissors"){
        humanScore++;
        return console.log(`You win ${humanChoice} beats ${computerChoice}`);
    }
    else if(humanChoice==="paper"&&computerChoice==="scissors"){
        computerScore++;
        return console.log(`You lose ${computerChoice} beats ${humanChoice}`);
    }
    else if(humanChoice==="paper"&&computerChoice==="rock"){
        humanScore++;
        return console.log(`You win ${humanChoice} beats ${computerChoice}`);
    }
    else if(humanChoice==="scissors"&&computerChoice==="rock"){
        computerScore++;
        return console.log(`You lose ${computerChoice} beats ${humanChoice}`);
    }
    else if(humanChoice==="scissors"&&computerChoice==="paper"){
        humanScore++;
        return console.log(`You win ${humanChoice} beats ${computerChoice}`);
    }
}

playRound( getHumanChoice().toLowerCase(),getComputerChoice());
playRound( getHumanChoice().toLowerCase(),getComputerChoice());
playRound( getHumanChoice().toLowerCase(),getComputerChoice());
playRound( getHumanChoice().toLowerCase(),getComputerChoice());
playRound( getHumanChoice().toLowerCase(),getComputerChoice());
*/
function playGame(){
    let computerScore=0;
    let humanScore=0;
    function playRound(humanChoice,computerChoice){
        if(humanChoice===computerChoice){
            return console.log(`You tie ${humanChoice} cannot beat ${computerChoice}`);
        }
        else if(humanChoice==="rock"&&computerChoice==="paper"){
            computerScore++;
            return console.log(`You lose ${computerChoice} beats ${humanChoice}`);
        }
        else if(humanChoice==="rock"&&computerChoice==="scissors"){
            humanScore++;
            return console.log(`You win ${humanChoice} beats ${computerChoice}`);
        }
        else if(humanChoice==="paper"&&computerChoice==="scissors"){
            computerScore++;
            return console.log(`You lose ${computerChoice} beats ${humanChoice}`);
        }
        else if(humanChoice==="paper"&&computerChoice==="rock"){
            humanScore++;
            return console.log(`You win ${humanChoice} beats ${computerChoice}`);
        }
        else if(humanChoice==="scissors"&&computerChoice==="rock"){
            computerScore++;
            return console.log(`You lose ${computerChoice} beats ${humanChoice}`);
        }
        else if(humanChoice==="scissors"&&computerChoice==="paper"){
            humanScore++;
            return console.log(`You win ${humanChoice} beats ${computerChoice}`);
        }
    }
    
    for (let i=0;i<5;i++){
        playRound( getHumanChoice().toLowerCase(),getComputerChoice());
    }

    if(humanScore===computerScore){
        return console.log("FINAL RESULT: DRAW");
    }
    else if(humanScore>computerScore){
        return console.log("FINAL RESULT: HURRAY");
    }
    else if(humanScore<computerScore){
        return console.log("FINAL RESULT: OOPS");
    }
}
playGame();


