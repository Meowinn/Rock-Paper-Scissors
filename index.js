const elements = [`rock`, `paper`, `scissors`];
let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*elements.length);
    return elements[computerChoice].toString();
 }

 const resulted = document.querySelector(`.results`);
 const playerSelection = Array.from(document.querySelectorAll(`button`));
 playerSelection[0] = "rock";
 playerSelection[1] = "paper";
 playerSelection[2] = "scissors";

function game() {
    for(i = 0; i<5; i++); {
 
    document.querySelector(`#btn1`).addEventListener("click", function changeRock() {
        playRound(playerSelection[0]);
    });
    document.querySelector(`#btn2`).addEventListener(`click`, function changePaper() {
        playRound(playerSelection[1]);
    });
    document.querySelector(`#btn3`).addEventListener(`click`, function changeScissors() {
        playRound(playerSelection[2]);
    });
}   
};

 function playRound(move) {

    if (playerScore == 5-1) {
        setTimeout(function() {location.reload();}, 3000);
        return resulted.innerHTML = "You won the game!" + "<br>" + "Player: " + (playerScore + 1) + " || Computer: " + compScore;
    } else if (playerScore == 5-1 && compScore == 5-1) {
        setTimeout(function() {location.reload();}, 3000);
        return resulted.innerHTML = "It's a Tie!!!" + "<br>" + "Player: " + (playerScore + 1) + " || Computer: " + (compScore + 1);      
    } 
    else if (compScore == 5-1) {
        setTimeout(function() {location.reload();}, 000);
        return resulted.innerHTML = "You lost to a freakin' machine!" + "<br>" + "Player: " + (playerScore) + " || Computer: " + (compScore + 1);
    }

     let computerSelection = getComputerChoice();
     console.log(computerSelection);
     if (!elements.includes(move)) {
         alert("Invalid selection!");
     };

     if (move === "rock" && computerSelection === "paper") {
         compScore ++;
        return resulted.innerHTML="You Lose! Paper beats Rock!" + "<br>" + "Player: " + playerScore + " || Computer: " + compScore;
     }
    else if (move === "paper" && computerSelection === "scissors") {
         compScore ++;
         return resulted.innerHTML ="You Lose! Scissors beat Paper!" + "<br>" + "Player: " + playerScore + " || Computer: " + compScore;  
     }
     else if (move === "scissors" && computerSelection === "rock" ) {
         compScore ++;
         return resulted.innerHTML = "You Lose! Rock beats Scissors!" + "<br>" + "Player: " + playerScore + " || Computer: " + compScore;
     }
     else if (move === "rock" && computerSelection === "scissors") {
         ++playerScore;
         return resulted.innerHTML = "You Win! Rock beats Scissors!" + "<br>" + "Player: " + playerScore + " || Computer: " + compScore;
     }
     else if (move === "paper" && computerSelection === "rock") {
         playerScore ++;
         return resulted.innerHTML = "You Win! Paper beats Rock!" + "<br>" + "Player: " + playerScore + " || Computer: " + compScore;
     }
     else if (move === "scissors" && computerSelection === "paper") {
         playerScore ++;
         return resulted.innerHTML = "You Win! Scissors beats Paper!" + "<br>" + "Player: " + playerScore + " || Computer: " + compScore;
     } else {
         playerScore ++;
         compScore ++;
         return resulted.innerHTML = "Draw!! Play again." + "<br>" + "Player: " + playerScore + " || Computer: " + compScore;  
     }
     
 };
game();



