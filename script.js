
const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const restart = document.getElementById("restart");

let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent !== "" || !gameActive) {
            return;
        }

        cell.textContent = currentPlayer;

        checkWinner();
    });
});

function checkWinner() {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;

        if (
            cells[a].textContent !== "" &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            status.textContent = "Player " + currentPlayer + " wins!";
            gameActive = false;
            return;
        }
    }

    if ([...cells].every(cell => cell.textContent !== "")) {
        status.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = "Player " + currentPlayer + "'s turn";
}

restart.addEventListener("click", () => {
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    gameActive = true;
    status.textContent = "Player X's turn";
});
