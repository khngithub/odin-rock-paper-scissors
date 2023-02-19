// Game Algorithm

function getComputerChoice () {
    let selection = ['rock', 'paper', 'scissors'];

    return selection[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;
let resetFlag = 0;

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
        computerScore ++;
        return 'You Lose';
    }
    else if (diff === 2 || diff === -1) {
        playerScore ++;
        return 'You Win!';
    }
}
    
function keepScore () {
    if (playerScore == 5 || computerScore == 5) {
        const div = document.createElement('div');

        if (playerScore > computerScore) {
            div.textContent = 'You are the Winner!';
            div.classList.add('winnerResult');
        }
        else {
            div.textContent = 'You\'re a Loser :)';
            div.classList.add('loserResult');
        }

        // Reset score and add result
        playerScore = 0;
        computerScore = 0;
        document.body.appendChild(div);

        // Raise flag to delete previous round div's
        resetFlag = 1;
    };
}

function resetScore () {
    if (resetFlag == 1) {
        const currentScores = document.querySelectorAll('.currentResult');

        // Remove current results' divs
        for (let i = 0; i < currentScores.length; i++) 
            currentScores[i].remove();
        
        // Reset flag
        resetFlag = 0;
    }
}

function pressButton (button) {
    resetScore();
    const div = document.createElement('div');
    div.classList.add('currentResult');
    div.textContent = playRound(button, getComputerChoice());

    document.body.appendChild(div);
    keepScore();
}

// Page Interactivity
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    pressButton('rock');
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    pressButton('paper');
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    pressButton('scissors');
});