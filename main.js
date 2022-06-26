const ROCK = {
  beats: 'scissors',
  losesTo: 'paper',
  name: 'Rock',
};
const PAPER = {
  beats: 'rock',
  losesTo: 'scissors',
  name: 'Paper',
};
const SCISSORS = {
  beats: 'paper',
  losesTo: 'rock',
  name: 'Scissors',
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

function getVerdict(playerChoice, computerChoice) {
  let verdict;
  if (playerChoice === computerChoice) {
    verdict = `Tie! You both chose ${playerChoice.name}`;
  } else {
    if (playerChoice.beats === computerChoice.losesTo) {
      verdict = `You lost! ${playerChoice.name} loses to ${computerChoice.name}`;
    } else {
      verdict = `You won! ${playerChoice.name} beats ${computerChoice.name}`;
    }
  }
  return verdict;
}

function play(choice) {
  let verdict;
  choice = choice.toLowerCase();
  switch (choice) {
    case 'rock':
      verdict = getVerdict(ROCK, getComputerChoice());
      break;
    case 'paper':
      verdict = getVerdict(PAPER, getComputerChoice());
      break;
    case 'scissors':
      verdict = getVerdict(SCISSORS, getComputerChoice());
      break;
    default:
      console.log('Please use rock, paper or scissors');
  }
  return verdict;
}
