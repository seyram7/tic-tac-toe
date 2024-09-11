document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const statusText = document.getElementById('status');
    const resetButton = document.getElementById('reset');
    const startGameButton = document.getElementById('startGame');
    const playerXInput = document.getElementById('playerX');
    const playerOInput = document.getElementById('playerO');
    const gameBoard = document.querySelector('.game-board');
    const gameInfo = document.querySelector('.game-info');

    let currentPlayer = 'X';
    let playerXName = '';
    let playerOName = '';
    let gameActive = false;
    let board = ['', '', '', '', '', '', '', '', ''];

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Function to start the game with player names
    const startGame = () => {
        playerXName = playerXInput.value || 'Player X';
        playerOName = playerOInput.value || 'Player O';

        // Initialize game state
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;

        // Show the game board and status
        gameBoard.style.display = 'grid';
        gameInfo.style.display = 'block';
        statusText.textContent = `${playerXName}'s turn`;

        // Clear all cells
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('X', 'O'); // Remove any X/O classes
        });
    };

    // Function to reset the current game without asking for player names again
    const resetGame = () => {
        // Reset board and state
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;

        // Update status and clear board
        statusText.textContent = `${playerXName}'s turn`;
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('X', 'O'); // Remove any X/O classes
        });
    };

    // Function to check for winner or a draw
    const checkWinner = () => {
        let roundWon = false;

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            const winner = currentPlayer === 'X' ? playerXName : playerOName;
            statusText.textContent = `${winner} Wins!`;
            gameActive = false;
            return;
        }

        if (!board.includes('')) {
            statusText.textContent = 'It\'s a draw!';
            gameActive = false;
            return;
        }

        // Switch turns
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        const nextPlayer = currentPlayer === 'X' ? playerXName : playerOName;
        statusText.textContent = `${nextPlayer}'s turn`;
    };

    // Function to handle clicks on cells
    const handleCellClick = (e) => {
        const cell = e.target;
        const index = cell.getAttribute('data-index');

        if (board[index] !== '' || !gameActive) {
            return;
        }

        // Mark cell with current player's symbol
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer); // Add class to color X or O

        // Check for a winner or continue the game
        checkWinner();
    };

    // Attach event listeners
    startGameButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
});
