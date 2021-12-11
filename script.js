function computerPlay(){
  let computerChoice = Math.floor(Math.random() * 3);
  if(computerChoice == 0){
    return 'rock';
  }else if (computerChoice == 1) {
    return 'paper';
  }else {
    return 'scissor';
  }
}

let playerScore = 0;
let computerScore = 0;

function playSingleRound(playerSelection, computerSelection) {
  let playerChoice = prompt("Enter Your Selection Below:");
  playerSelection = playerChoice.toLowerCase();
  computerSelection = computerPlay().toLowerCase();


  if(
    (playerSelection == 'rock' && computerSelection == 'scissor')||
    (playerSelection == 'paper' && computerSelection == 'rock')||
    (playerSelection == 'scissor' && computerSelection == 'paper')
  ){
          console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
          playerScore++;
        }else if (playerSelection == computerSelection) {
          console.log('Tie!');
        }else if(
          (playerSelection == 'rock' && computerSelection == 'paper')||
          (playerSelection == 'paper' && computerSelection == 'scissor')||
          (playerSelection == 'scissor' && computerSelection == 'rock')
        ){
          console.log(`You loose! ${computerSelection} beats ${playerSelection}.`);
          computerScore++;
        }else{
          alert('Invalid Input');
        }

}

let winner = (playerScore>computerScore)? 'You are smarter than computer.': 'Computer is smarter than you.';
function game(){
  console.log(playSingleRound());
  console.log(playSingleRound());
  console.log(playSingleRound());
  console.log(playSingleRound());
  console.log(playSingleRound());
  console.log(`You scored ${playerScore} points.`);
  alert(winner);
  console.log(winner);
}

console.log(game());
