var currentPlayer = "X";
var board = ['', '', '', '', '', '', '', '', ''];
var cells = document.getElementsByTagName("td");
var resultDisplay = document.getElementById("result");
var winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// ...

// ...

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        cells[index].innerHTML = currentPlayer;
        cells[index].removeAttribute("onclick");
        if (checkWin()) {
            resultDisplay.innerHTML = "Player " + currentPlayer + " wins!";
            disableCells();
            animateWinningCells();
        } else if (checkDraw()) {
            resultDisplay.innerHTML = "It's a draw! No winner.";
            disableCells();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkDraw() {
    if (board.every(cell => cell !== "")) {
        return true;
    }
    return false;
}

// ...


// ...


function checkWin() {
    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== "");
}

function disableCells() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick");
    }
}

// ...

function animateWinningCells() {
    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] === "X" && board[b] === "X" && board[c] === "X") {
            cells[a].classList.add("winning-cell");
            cells[b].classList.add("winning-cell");
            cells[c].classList.add("winning-cell");
        } else if (board[a] === "O" && board[b] === "O" && board[c] === "O") {
            cells[a].classList.add("winning-cell");
            cells[b].classList.add("winning-cell");
            cells[c].classList.add("winning-cell");
        }
    }
}

// ...


function resetBoard() {
    for (var i = 0; i < board.length; i++) {
        board[i] = "";
        cells[i].innerHTML = "";
        cells[i].setAttribute("onclick", "makeMove(" + i + ")");
        cells[i].classList.remove("winning-cell");
    }
    resultDisplay.innerHTML = "";
    currentPlayer = "X";
}
