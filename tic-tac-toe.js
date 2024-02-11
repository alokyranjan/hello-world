const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let currentPlayer = PLAYER_X;

function displayBoard() {
    console.log('+---+---+---+');
    for (let i = 0; i < 3; i++) {
        console.log(`| ${board[i * 3]} | ${board[i * 3 + 1]} | ${board[i * 3 + 2]} |`);
        console.log('+---+---+---+');
    }
}

function isValidMove(move) {
    return move >= 0 && move < 9 && board[move] === ' ';
}

function makeMove(move, player) {
    board[move] = player;
}

function isWinner(player) {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
        if (board[i * 3] === player && board[i * 3 + 1] === player && board[i * 3 + 2] === player) {
            return true;
        }
        if (board[i] === player && board[i + 3] === player && board[i + 6] === player) {
            return true;
        }
    }
    if (board[0] === player && board[4] === player && board[8] === player) {
        return true;
    }
    if (board[2] === player && board[4] === player && board[6] === player) {
        return true;
    }
    return false;
}

function isBoardFull() {
    return board.every(cell => cell !== ' ');
}

function switchPlayer() {
    currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
}

while (!isWinner(PLAYER_X) && !isWinner(PLAYER_O) && !isBoardFull()) {
    displayBoard();
    console.log(`It's ${currentPlayer}'s turn. Enter your move (0-8):`);
    let move = parseInt(prompt());

    if (isValidMove(move)) {
        makeMove(move, currentPlayer);
        if (isWinner(currentPlayer)) {
            console.log(`${currentPlayer} wins!`);
        } else {
            switchPlayer();
        }
    } else {
        console.log("Invalid move. Please try again.");
    }
}

if (isWinner(PLAYER_X)) {
    console.log("X wins!");
} else if (isWinner(PLAYER_O)) {
    console.log("O wins!");
} else {
    console.log("It's a draw!");
}
