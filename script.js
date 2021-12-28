
//Not a very clean code but it works
const option = document.querySelectorAll('.option');
option.forEach((option) => {
  option.addEventListener('mouseenter', ()=> {
    option.classList.add('selected');
    option.addEventListener('mouseleave', () =>{
      option.classList.remove('selected');
    });
  });
});

function computerPlay(){
  let computerChoice = Math.floor(Math.random() * 3);
  if(computerChoice == 0){
    return 'rock';
  }else if (computerChoice == 1) {
    return 'paper';
  }else {
    return  'scissor';
  }
}
function game(){
  if(computerScore < 5 && playerScore < 5){
    computerPlay();
    playSingleRound();
  }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', ()=>{
  playerChoice= 'rock';
  game();
  isGameOver(); 
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', ()=>{
  playerChoice= 'paper';
  game();
  isGameOver();
});
const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', ()=>{
  playerChoice ='scissor'; 
  game();
  isGameOver();
});

let playerScore = 0;
let computerScore = 0;
const computer = document.querySelector('.computer');
const yourScore = document.querySelector('.your-score');
const compScore = document.querySelector('.computer-score'); 

function playSingleRound(playerSelection, computerSelection) {
  playerSelection = playerChoice.toLowerCase();
  computerSelection = computerPlay().toLowerCase();

  if((computerScore <= 5 || playerScore <= 5)&&
    (playerSelection == 'rock' && computerSelection == 'scissor')||
    (playerSelection == 'paper' && computerSelection == 'rock')||
    (playerSelection == 'scissor' && computerSelection == 'paper')
    
  ){
          computer.style.cssText = 'color: green';
          computer.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
          playerScore++;
          yourScore.textContent = `Your Score: ${playerScore}`;
          compScore.textContent = `Computer Score: ${computerScore}`;
        }else if ((playerSelection == computerSelection)&&
                  (computerScore <= 5 || playerScore <= 5)        
        ){
          computer.style.cssText = 'color: rgb(7, 62, 243)';
          computer.textContent = `Tie!`;
          yourScore.textContent = `Your Score: ${playerScore}`;
          compScore.textContent = `Computer Score: ${computerScore}`;
        }else if((computerScore <= 5 || playerScore <= 5)&&
          (playerSelection == 'rock' && computerSelection == 'paper')||
          (playerSelection == 'paper' && computerSelection == 'scissor')||
          (playerSelection == 'scissor' && computerSelection == 'rock')
          
        ){
          computer.style.cssText = 'color: red';
          computer.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
          computerScore++;
          yourScore.textContent = `Your Score: ${playerScore}`;
          compScore.textContent = `Computer Score: ${computerScore}`;
        }

}
function isGameOver(){
  if(playerScore ===5|| computerScore===5){
    return finalResult();
  }
}
const result = document.querySelector('.result');
const finalResult =function(){
  if(playerScore>computerScore){
    result.textContent = 'You Won!';
    result.classList.add('winner');
  }
  if(playerScore==computerScore){
    result.textContent =' Tie!';
    result.classList.add('tie');
  }
  if(playerScore<computerScore){
    result.textContent ='You Lost!';
    result.classList.add('looser');
  }
};



