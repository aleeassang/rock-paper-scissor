const playOptions = ['rock','paper','scissors'];

function getComputerChoice() {
	return playOptions[Math.floor(Math.random() * playOptions.length)];
}
// returns `rock`, `paper` or `scissors`

function getUserChoice() {
	let userInput;
	do {
		userInput = prompt('Welcome to Rock, Paper, Scissors! See if you can beat the computer by playing either rock, paper or scissor!');
		if (!userInput) {
			return 'cancel';
		}
	} while ( !playOptions.includes( userInput.toLowerCase() ) );
	return userInput.toLowerCase();
}
// returns either `rock`, `paper`, `scissors` or `cancel`

function game(){
	let computerScore = 0;
	let userScore = 0;
	for ( let i = 1; i <=5; ) {
		let computerChoice = getComputerChoice();
		let userChoice = getUserChoice();
		if (userChoice === 'cancel') {
			alert('Quitting the game...');
			return;
		}
		if (userChoice === computerChoice) {
			alert('Please try again. It was a tie, you played ' + userChoice + ' and the computer played ' + computerChoice);
			continue;
		}
		i++;
		if (userChoice === 'rock' && computerChoice === 'scissors' || 
			 userChoice === 'paper' && computerChoice === 'rock' || 
			 userChoice === 'scissors' && computerChoice === 'rock') {
			userScore++;
			alert('You won! You have won ' + userScore + ' games and the computer won ' + computerScore + ' games.');
		} else {
			computerScore++;
			alert('You lost. The computer has won '+ computerScore + ' games and you won ' + userScore + ' games. Please try again.');
		}
	}
}
game();