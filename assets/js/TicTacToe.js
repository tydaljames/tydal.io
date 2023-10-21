const buttons = document.querySelectorAll('.tic-tac-toe-btn');

// Iterate over each button
buttons.forEach(function(button) {
    // Attach a click event listener to the button
    button.addEventListener('click', playerMove);
});


function checkConditions(playerChar) {
    if(checkForWin(playerChar)) {
        // alert(playerChar + " wins!");
        disableAllButtons(buttons);
    }
    else if(isBoardFull(buttons)) {
        // alert("Tie game.");
        disableAllButtons(buttons);
    }
}

function playerMove(button) {
    if(button.currentTarget.textContent !== '') return;
    button.currentTarget.textContent = 'X';

    checkConditions('X');
    enemyMove(buttons);
}


function enemyMove(buttons) {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent === '') {
            buttons[i].textContent = 'O';
            let score = minimax(buttons, 0, false);
            buttons[i].textContent = '';
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    buttons[move].textContent = 'O';

    checkConditions('O');
}

function minimax(buttons, depth, isMaximizing) {
    const winner = checkWinner(buttons);
    if (winner === 'O') {
        return 10 - depth;
    }
    if (winner === 'X') {
        return depth - 10;
    }
    if (isBoardFull(buttons)) {
        return 0;
    }

    if (isMaximizing) {
        let maxEval = -Infinity;
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent === '') {
                buttons[i].textContent = 'O';
                let evaluation = minimax(buttons, depth + 1, false);
                buttons[i].textContent = '';
                maxEval = Math.max(maxEval, evaluation);
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent === '') {
                buttons[i].textContent = 'X';
                let evaluation = minimax(buttons, depth + 1, true);
                buttons[i].textContent = '';
                minEval = Math.min(minEval, evaluation);
            }
        }
        return minEval;
    }
}

function checkForWin(playerChar) {
    // Grab all the buttons with the class "tic-tac-toe-btn"
    const buttons = document.querySelectorAll('.tic-tac-toe-btn');

    // Convert NodeList to an array for easier indexing
    const btnArray = Array.from(buttons);

    // Define the win patterns for a 3x3 grid
    // These represent the indices of the buttons in the grid
    const winPatterns = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // top-left to bottom-right diagonal
        [2, 4, 6]  // top-right to bottom-left diagonal
    ];

    for (let pattern of winPatterns) {
        if (btnArray[pattern[0]].textContent === playerChar &&
            btnArray[pattern[1]].textContent === playerChar &&
            btnArray[pattern[2]].textContent === playerChar) {
            return true; // Exit the function if a win is found
        }
    }
    return false;
}


function checkWinner(buttons) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        if (buttons[pattern[0]].textContent &&
            buttons[pattern[0]].textContent === buttons[pattern[1]].textContent &&
            buttons[pattern[1]].textContent === buttons[pattern[2]].textContent) {
            return buttons[pattern[0]].textContent;
        }
    }
    return null;
}

function isBoardFull(buttons) {
    return [...buttons].every(button => button.textContent !== '');
}

function resetBoard() {
    buttons.forEach(function(button) {
        button.textContent = '';
    });
}

function disableAllButtons(buttons) {
    // Disable each button
    buttons.forEach(button => {
        button.removeEventListener('click', playerMove);
    });
}

