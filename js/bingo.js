const generateRandomNumber = () => {
    return Math.floor(Math.random() * 99) + 1;
}

function Board(numbers) {
    this.numbers = numbers;
    
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
            const currentBoard = numbers[i];
            const completedBoard = "V";
            if (currentBoard != completedBoard) {
                return false;
            } 
        } return true;
    }
}

const generateBoard = () => {
    const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < boardArray.length; i++) {
        boardArray[i] = Math.floor(Math.random() * 99) + 1;
    }
    return new Board(boardArray);
}



function Player(name, board) {
    this.name = name;
    this.board = board;    
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

const gameStart = () => {
    DoYouWantToContinue = "yes";
    while(DoYouWantToContinue == 'Yes' || DoYouWantToContinue == 'yes' || DoYouWantToContinue == 'y') {
        alert("Welcome to the bingo game!");
        const numPlayers = parseInt(prompt("How many players are there?"));
        if (Number.isInteger(numPlayers)) {
            const allPlayers = [];
            for (let i = 0; i < numPlayers; i++) {
                const playerName = prompt("What is your name?");
                allPlayers.push(new Player(playerName, generateBoard()));
                alert(allPlayers[i].board);
            }
            const randomNumbers = [];
            while (anyoneWon(allPlayers) == false) {
                let randomNumber = generateRandomNumber();
                while (randomNumbers.includes(randomNumber)) {
                    randomNumber = generateRandomNumber();
                }
                randomNumbers.push(randomNumber);
                alert(randomNumber);
                markAllPlayers(allPlayers, randomNumber);
            } alert(findWinner(allPlayers).name + " won");
        } else {
            alert("You can't enter something that is not a number as a number.")
        } DoYouWantToContinue = prompt("Do You Want To Continue?"); 
    } 
}