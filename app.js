const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');

const iconEls = document.querySelectorAll('.far');

const resultText = document.getElementById('resultText');

const rules = {
  rock: { name: 'rock', defeats: 'scissors' },
  paper: { name: 'paper', defeats: 'rock' },
  scissors: { name: 'scissors', defeats: 'paper' },
};

let computerChoice = '';

const resetSelected = _ => {
  iconEls.forEach(icon => {
    icon.classList.remove('selected');
  });
};

const resetAll = _ => {
  resultText.textContent = '';
  resetSelected();
};

const displayPlayerChoice = playerChoice => {
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      break;
    default:
      break;
  }
};

const computerChooses = _ => {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.33) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.67) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
};

const displayComputerChoice = _ => {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      break;
    default:
      break;
  }
};

const updateResult = playerChoice => {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a draw!";
  } else {
    const choice = rules[playerChoice];
    if (choice.defeats === computerChoice) {
      resultText.textContent = 'You won!';
    } else {
      resultText.textContent = 'You lost!';
    }
  }
};

const playerChooses = playerChoice => {
  resetAll();
  displayPlayerChoice(playerChoice);
  computerChooses();
  displayComputerChoice();
  updateResult(playerChoice);
};

window.playerChooses = playerChooses;
