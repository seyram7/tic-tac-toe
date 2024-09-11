# tic-tac-toe Game
This project is a **2D Tic-Tac-Toe game**  built using  **HTML, CSS, and JavaScript.** It allows two players to take turns and play a classic Tic-Tac-Toe game. The interface is simple yet visually appealing, with user-friendly colours and hover effects for an enhanced experience.

Players can input their names before the game starts, and their names are displayed during their turns. The game also checks for winners or ties and allows players to reset the game without losing player names.

** Features**

- Two-player functionality: Players play with "X" and "O".
- Player names: Players can enter their names before starting the game.
- Dynamic game board: The game dynamically updates the board with "X" and "O" symbols.
- Winning and draw conditions: The game checks for a winner or a draw and updates the status.
- Reset game: Players can reset the game without re-entering their names.
- User-friendly design: Includes responsive styling with hover effects and colour themes to differentiate between players.

** Technologies Used**

- HTML: For structuring the game layout.
- CSS: For styling the game board, buttons, and user interface to create a visually appealing experience.
- JavaScript: For handling game logic, including player turns, checking for winners, and resetting the game.

** File Structure**

```
Tic-Tac-Toe/
│
├── index.html          The main HTML file
├── style.css           CSS file for styling the game
├── script.js           JavaScript file containing the game logic
└── README.md           This README file
```

 HTML (`index.html`)

The `index.html` file contains the structure of the game, including the player input fields, game board, and buttons. It connects the stylesheet and JavaScript file.

 CSS (`style.css`)

The `style.css` file handles the appearance of the game, making it more visually attractive. Key features include:
- Hover effects on the game board cells.
- Color differentiation for player symbols ("X" is red, "O" is green).
- Responsive layout that works on various screen sizes.

 JavaScript (`script.js`)

The `script.js` file contains the logic for:
- Managing player turns.
- Checking for win or draw conditions.
- Resetting the game while preserving player names.

** Game Setup and Instructions**

** Getting Started**

1. Clone the repository or download the project files.
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   ```
2. Open the `index.html` file in any web browser.

** How to Play**

1. Enter player names: Input the names of Player X and Player O.
2. Start the game: Click the "Start Game" button.
3. Take turns: Players alternate between clicking on the empty cells to mark them with "X" or "O".
4. Winning/Draw: The game will display a message when a player wins or if the game ends in a draw.
5. Reset game: Press the "Reset Game" button to clear the board and start a new game without re-entering player names.


** Future Improvements**

- AI opponent: Add the option to play against a computer-controlled player.
- Score tracker: Implement a system to track player scores across multiple games.
- Animations: Add subtle animations for when a player marks a cell.
