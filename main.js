const cards = document.querySelectorAll('.card');
const verdictOutput = document.querySelector('.verdict');
const playerScoreElement = document.querySelector('.player-score-number');
const computerScoreElement = document.querySelector('.computer-score-number');
let playerScore = 0;
let computerScore = 0;

cards.forEach((card) => {
  card.addEventListener('click', play);
});

function getComputerChoice(ROCK, PAPER, SCISSORS) {
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
    if (playerChoice.beats === computerChoice.name.toLowerCase()) {
      verdict = {
        result: 'victory',
        message: `You won! ${playerChoice.name} beats ${computerChoice.name}`,
      };
    } else {
      verdict = {
        result: 'defeat',
        message: `You lost! ${playerChoice.name} loses to ${computerChoice.name}`,
      };
    }
  }
  return verdict;
}

function play(choice) {
  const ROCK = {
    beats: 'scissors',
    name: 'Rock',
  };
  const PAPER = {
    beats: 'rock',
    name: 'Paper',
  };
  const SCISSORS = {
    beats: 'paper',
    name: 'Scissors',
  };

  choice = choice.currentTarget.id;
  console.log(choice);

  let verdict;
  switch (choice) {
    case 'rock':
      verdict = getVerdict(ROCK, getComputerChoice(ROCK, PAPER, SCISSORS));
      break;
    case 'paper':
      verdict = getVerdict(PAPER, getComputerChoice(ROCK, PAPER, SCISSORS));
      break;
    case 'scissors':
      verdict = getVerdict(SCISSORS, getComputerChoice(ROCK, PAPER, SCISSORS));
      break;
    default:
      verdict = {
        result: 'error',
        message: 'Something went wrong...',
      };
  }
  console.log(verdict);
  if (verdict.result === 'error') {
    alert('something went wrong');
    return;
  }
  verdictOutput.classList.remove('victory');
  verdictOutput.classList.remove('defeat');
  verdictOutput.classList.remove('tie');
  verdictOutput.classList.add(verdict.result);
  verdictOutput.textContent = verdict.message;
  updateScore(verdict.result);
  // return verdict;
}

function updateScore(result) {
  if (result === 'victory') {
    playerScore += 1;
  } else if (result === 'defeat') {
    computerScore += 1;
  }
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function playFullGame() {
  let playerScore = 0;
  let computerScore = 0;
  const ROUND_LIMIT = 5;

  for (let i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice();

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
  declareWinner(playerScore, computerScore);
}

function getPlayerChoice() {
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
  return playerChoice;
}

function declareWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    alert(
      `[Game over] You won! Your score: ${playerScore} Computer score: ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    alert(
      `[Game over] You lost! Your score: ${playerScore} Computer score: ${computerScore}`
    );
  } else {
    alert(
      `[Game over] Tie! Your score: ${playerScore} Computer score: ${computerScore}`
    );
  }
}
