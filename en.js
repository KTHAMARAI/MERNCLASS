function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
  };

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Display both choices
  document.getElementById('user-choice').textContent = emojis[userChoice] + ' ' + userChoice;
  document.getElementById('computer-choice').textContent = emojis[computerChoice] + ' ' + computerChoice;

  let result = '';
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}.`;
  }

  document.getElementById('result').textContent = result;
}
