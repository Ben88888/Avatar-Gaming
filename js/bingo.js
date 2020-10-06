const generateRandomNumber = () => {
    return Math.floor(Math.random() * 99) + 1;
}

const numberPlacer = (num, rowNum, collumnNum, playerNumber) => {
    const numbers = document.getElementsByClassName("player" + playerNumber + "Placement");
    numbers[rowNum * 3 + collumnNum].innerText = num;
}

function Board(numbers) {
    this.numbers = numbers;

    this.toString = () => {
        const numRows = this.numbers.length / 3;
        let completeBoard = "";

        //Iterate over all rows for the board
        for (let row = 0; row < numRows; row++) {
            let rowString = "\n";

            // Creates the current row string. For example: XX|XX|XX|
            for (let j = 0; j < 3; j++) {
                let currentNumber = this.numbers[row + j];
                if (currentNumber < 10) {
                    currentNumber = '0' + currentNumber;
                }
                rowString = rowString + currentNumber + '|';
            }
            let underscoreString = "\n";

            // Creates the current underscore string. for example: ________
            for (let i = 0; i < 10; i++) {
                underscoreString = underscoreString + "_";
            }
            completeBoard = completeBoard + rowString + underscoreString;
        } return completeBoard;
    }
    
    /**
     * markNumber replaces the number with the letter V
     */
    this.markNumber = (number) => {
       for (let i = 0; i < numbers.length; i++) {
           if (number == numbers[i]) {
               numbers[i] = "V";
           }
        }
    }

    /**
     * hasWon checks if a board has been completed yet
     */
    this.hasWon = () => {
        for (let i = 0; i < numbers.length; i++) {
            const currentNum = numbers[i];
            if (currentNum != "V") {
                return false;
            } 
        } return true;
    }
}

const generateBoard = () => {
    const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < boardArray.length; i++) {
        boardArray[i] = generateRandomNumber();
    }
    return new Board(boardArray);
}



function Player(name, board, playerNumber) {
    this.name = name;
    this.board = board;
    this.playerNumber = playerNumber;
    
    this.toString = () => {
        return this.board.toString();
    }
}

const anyoneWon = (players) => {
    for (let i = 0; i < players.length; i++) {
        const currentPlayer = players[i];
        if (currentPlayer.board.hasWon()) {
            return true;
        }
    } return false;
}

const markAllPlayers = (players, number) => {
    for (let i = 0; i < players.length; i++) {
        const currentPlayer = players[i];
        currentPlayer.board.markNumber(number);
    }
}

const findWinner = (allPlayers) => {
    for (let i = 0; i < allPlayers.length; i++) {
        const currentPlayer = allPlayers[i];
        if (currentPlayer.board.hasWon()) {
            return currentPlayer;
        }
    }
}

const addZero = (number) => {
    if (number < 10) {
       number = '0' + number;
    }
    return number;
}

const fillBoard = (board, playerNumber) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const num = board.numbers[i * 3 + j];
            numberPlacer(addZero(num), i, j, playerNumber);
        }
    }
}

const fillBoards = (allPlayers) => {
    for (let i = 0; i < allPlayers.length; i++) {
        fillBoard(allPlayers[i].board, i + 1);
    }
}

const resetBoards = (allPlayers) => {
    for (let i = 0; i < allPlayers.length; i++) {
        allPlayers[i].board = generateBoard();
    }
}

const drawBoard = (allPlayers, numPlayers) => {
    for (let i = 0; i < numPlayers; i++) {
        const playerName = prompt("What is your name?");
        document.getElementById("player" + (i + 1)).innerText = playerName;
        allPlayers.push(new Player(playerName, generateBoard(), i + 1));
        fillBoard(allPlayers[i].board, i + 1);
        const playerColor = prompt("What is your favorite color?");
        document.getElementById("player" + (i + 1) + "Board").style = "color: " + playerColor + ";";
        console.log(playerColor);
    }
}

const allPlayers = [];
let randomNumbers = [];
const numPlayers = 2;

const gameStart = () => {
    alert("Welcome to the bingo game!");
    if (Number.isInteger(numPlayers)) {
        drawBoard(allPlayers, numPlayers);
    } else {
        alert("You can't enter something that is not a number as a number.")
    }
}

const continueGame = () => {
    let randomNumber = generateRandomNumber();
    while (randomNumbers.includes(randomNumber)) {
            randomNumber = generateRandomNumber();
    }
    document.getElementById("generatedNumber").innerText = addZero(randomNumber); 
    randomNumbers.push(randomNumber);
    markAllPlayers(allPlayers, randomNumber);
    fillBoards(allPlayers);
    if (anyoneWon(allPlayers)) {
        document.getElementById("winner").innerText = "latest winner: " + findWinner(allPlayers).name;
        document.getElementById("score" + findWinner(allPlayers).playerNumber).innerText++;
        resetBoards(allPlayers);
        fillBoards(allPlayers);
        randomNumbers = [];
    }
} 