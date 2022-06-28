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
  choice = choice.currentTarget.id;
  let verdict;
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
  if (verdict.result === 'error') {
    alert('something went wrong');
    return;
  }
  removeVerdictClasses();
  verdictOutput.classList.add(verdict.result);
  verdictOutput.textContent = verdict.message;
  updateScore(verdict.result);
}

function updateScore(result) {
  const POINTS_LIMIT = 5;
  if (result === 'victory') {
    playerScore += 1;
  } else if (result === 'defeat') {
    computerScore += 1;
  }
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  if (playerScore >= POINTS_LIMIT || computerScore >= POINTS_LIMIT) {
    if (playerScore === computerScore) {
      return;
    }
    const playerFinalResult = playerScore > computerScore ? 'won' : 'lost';
    endGame(playerFinalResult);
  }
}

function endGame(playerFinalResult) {
  removeVerdictClasses();
  if (playerFinalResult === 'won') {
    verdictOutput.classList.add('victory');
  } else {
    verdictOutput.classList.add('defeat');
  }
  verdictOutput.textContent = `Game over! You ${playerFinalResult}!`;
  cards.forEach((card) => {
    card.removeEventListener('click', play);
  });
}

function removeVerdictClasses() {
  verdictOutput.classList.remove('victory');
  verdictOutput.classList.remove('defeat');
  verdictOutput.classList.remove('tie');
}
