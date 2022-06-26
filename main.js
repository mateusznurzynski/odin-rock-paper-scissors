const ROCK = {
  beats: 'scissors',
  losesTo: 'paper',
};
const PAPER = {
  beats: 'rock',
  losesTo: 'scissors',
};
const SCISSORS = {
  beats: 'paper',
  losesTo: 'rock',
};

function getComputerChoice() {
  let computerChoice;
  let choiceNum = Math.floor(Math.random() * 3) + 1;
  switch (choiceNum) {
    case 1:
      computerChoice = ROCK;
      break;
    case 2:
      computerChoice = PAPER;
      break;
    case 3:
      computerChoice = SCISSORS;
  }
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  let verdict;
  if (playerChoice === computerChoice) {
    verdict = `Tie! You both chose ${playerChoice}`;
  } else {
  }
}

function play(choice) {
  switch (choice) {
    case 'rock':
      playRound(ROCK, getComputerChoice());
      break;
    case 'paper':
      playRound(PAPER, getComputerChoice());
      break;
    case 'scissors':
      playRound(SCISSORS, getComputerChoice());
      break;
    default:
      console.log('Please use rock, paper or scissors');
  }
}
