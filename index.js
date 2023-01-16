function getComputerChoice () {
    let selection = ['rock', 'paper', 'scissors'];

    return selection[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    // Make sure playerSelection is all lowercase, and trimmed of white spaces
    playerSelection = playerSelection.toLowerCase().trim();
    
    // Convert selection into index
    let selection = ['rock', 'paper', 'scissors'];
    playerSelection = selection.indexOf(playerSelection);
    computerSelection = selection.indexOf(computerSelection);

    // Warn players if they give invalid input
    if (playerSelection === -1) {
        return 'Invalid Input!';
    }

    // Find out if the player wins or loses
    let diff = computerSelection - playerSelection;
    if (diff === 0) {
        return 'Draw';
    }
    else if (diff === 1 || diff === -2) {
        return 'You Lose';
    }
    else if (diff === 2 || diff === -1) {
        return 'You Win!';
    }
}

function game () {
    // Play for 5 rounds, and keep score
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 5;
    let msg;
    for (let i = 0; i < roundNumber; i++) {
        msg = playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice());
        console.log(msg);

        if (msg === 'You Win!') {
            playerScore++;
        }
        else if (msg === 'You Lose') {
            computerScore++;
        }
    }

    // Print final result
    scoreMsg = `Final score between You and Computer: ${playerScore} vs ${computerScore}.`
    if (playerScore > computerScore) {
        console.log(scoreMsg + ' You Win!');
    }
    else if (playerScore < computerScore) {
        console.log(scoreMsg + 'You Lose.');
    }
    else {
        console.log('Game Draw!');
    }
}