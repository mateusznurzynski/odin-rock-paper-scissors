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
    verdict = {
      result: 'tie',
      message: `Tie! You both chose ${playerChoice.name}`,
    };
  } else {
    if (playerChoice.beats === computerChoice.losesTo) {
      verdict = {
        result: 'defeat',
        message: `You lost! ${playerChoice.name} loses to ${computerChoice.name}`,
      };
    } else {
      verdict = {
        result: 'victory',
        message: `You won! ${playerChoice.name} beats ${computerChoice.name}`,
      };
    }
  }
  return verdict;
}

function play(choice) {
  let verdict;
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
      verdict = {
        result: 'error',
        message: null,
      };
  }
  return verdict;
}

function playFullGame() {
  let playerScore = 0;
  let computerScore = 0;
  const ROUND_LIMIT = 5;

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt(
      'What is your choice? (Type rock, paper or scissors)'
    );
    playerChoice = playerChoice.toLowerCase();
    let isPlayerChoiceCorrect = false;
    while (!isPlayerChoiceCorrect) {
      if (
        playerChoice !== 'rock' &&
        playerChoice !== 'paper' &&
        playerChoice !== 'scissors'
      ) {
        playerChoice = prompt(
          'What is your choice? (Type rock, paper or scissors)'
        );
        playerChoice = playerChoice.toLowerCase();
      } else {
        isPlayerChoiceCorrect = true;
      }
    }

    const verdict = play(playerChoice);
    switch (verdict.result) {
      case 'tie':
        alert(verdict.message);
        break;
      case 'victory':
        playerScore++;
        alert(verdict.message);
        break;
      case 'defeat':
        computerScore++;
        alert(verdict.message);
        break;
      default:
        alert('Something went wrong...');
        break;
    }
  }
}
