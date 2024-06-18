function getComputerChoice(){
    const arrayList=["rock","paper","scissors"];
    const computerChoice=arrayList[Math.floor(Math.random()*arrayList.length)];
    return computerChoice;
  }
  
  
  function playGame(){
  let computerScore=0;
  let humanScore=0;
  function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
      const results=document.querySelector("#results");
      const aTie=document.createElement("p");
      aTie.textContent=`You tie ${humanChoice} cannot beat ${computerChoice} 
      Your score:${humanScore}
      Opponent score:${computerScore}`;
      results.appendChild(aTie);
      return results;
    }
    else if(humanChoice==="rock"&&computerChoice==="paper"){
        computerScore++;
        const results=document.querySelector("#results");
        const rockPaper=document.createElement("p");
        rockPaper.textContent=`You lose ${computerChoice} beats ${humanChoice}
        Your score:${humanScore}
        Opponent score:${computerScore}`;
        results.appendChild(rockPaper);
        return results;
    }
    else if(humanChoice==="rock"&&computerChoice==="scissors"){
        humanScore++;
        const results=document.querySelector("#results");
        const rockScissors=document.createElement("p");
        rockScissors.textContent=`You win ${humanChoice} beats ${computerChoice}
        Your score:${humanScore}
        Opponent score:${computerScore}`;
        results.appendChild(rockScissors);
        return results;
    }
    else if(humanChoice==="paper"&&computerChoice==="scissors"){
        computerScore++;
        const results=document.querySelector("#results");
        const paperScissors=document.createElement("p");
        paperScissors.textContent=`You lose ${computerChoice} beats ${humanChoice}
        Your score:${humanScore}
        Opponent score:${computerScore}`;
        results.appendChild(paperScissors);
        return results;
    }
    else if(humanChoice==="paper"&&computerChoice==="rock"){
        humanScore++;
        const results=document.querySelector("#results");
        const paperRock=document.createElement("p");
        paperRock.textContent=`You win ${humanChoice} beats ${computerChoice}
        Your score:${humanScore}
        Opponent score:${computerScore}`;
        results.appendChild(paperRock);
        return results;
    }
    else if(humanChoice==="scissors"&&computerChoice==="rock"){
        computerScore++;
        const results=document.querySelector("#results");
        const scissorsRock=document.createElement("p");
        scissorsRock.textContent=`You lose ${computerChoice} beats ${humanChoice}
        Your score:${humanScore}
        Opponent score:${computerScore}`;
        results.appendChild(scissorsRock);
        return results;
    } 
    else if(humanChoice==="scissors"&&computerChoice==="paper"){
        humanScore++;
        const results=document.querySelector("#results");
        const scissorsPaper=document.createElement("p");
        scissorsPaper.textContent=`You win ${humanChoice} beats ${computerChoice}
        Your score:${humanScore}
        Opponent score:${computerScore}`;
        results.appendChild(scissorsPaper);
        return results;
    }
    
  }
  
    let buttons=document.querySelectorAll(".btn");
  buttons.forEach(function(button){
    button.addEventListener("click",function(){
      if(humanScore==5){
        button.disabled=true;
        const results=document.querySelector("#results");
        const finalResult=document.createElement("p");
        finalResult.textContent="HURRAY!😇 YOU WON RESART TO PLAY AGAIN";
        results.appendChild(finalResult);
        return finalResult;
      }
      else if(computerScore==5){
        button.disabled=true;
        const results=document.querySelector("#results");
        const finalResult=document.createElement("p");
        finalResult.textContent="OOPS!😭 YOU LOST RESTART TO PLAY AGAIN";
        results.appendChild(finalResult);
        return finalResult;
      }
      else{
        button.disabled=false;
        let playerChoice=button.value;
        playRound(playerChoice,getComputerChoice());
      }
    });
  });
  
  }
  playGame();