let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class Player {
    constructor(name) {
        this.name = name;
        this.gameScore = 0;
        this.roundScore = 0;
    }
    incrementGameScore() {
        this.gameScore++;
    }
    incrementRoundScore() {
        this.roundScore++;
    }
    resetRoundScore() {
        this.roundScore = 0;
    }
}

class Card {
    constructor(cardId, content, letterId) {
        this.cardId = cardId;
        this.content = content;
        this.letterId = letterId;
    }
    equals(otherCard) {
        return (otherCard.content == this.content);
    }
}

const resetCard = (cardId, letterId) => {
    const cardHtmlElement = document.getElementById(cardId);
    const letterHtmlElement = document.getElementById(letterId);    
    cardHtmlElement.style = "opacity: 1;";
    letterHtmlElement.style = "opacity: 0;";
}

class Game {
    constructor() {
        this.isFirstCard = true;
        this.firstCard = undefined;
        this.revealedCards = 0;
        this.totalCards = 10;
    }
    isItFirstCard() {
        return this.isFirstCard;
    }
    setFirstCard(card) {
        this.firstCard = card;
        this.isFirstCard = false;
        this.revealedCards++;
    }
    getFirstCard() {
        return this.firstCard;
    }
    setSecondCard() {
        this.firstCard = undefined;
        this.isFirstCard = true;
        this.revealedCards++;
    }

    // Call this function if the cards aren't equal
    unsetCards() {
        this.firstCard = undefined;
        this.isFirstCard = true;
        this.revealedCards--;
    }
    isGameOver() {
        return this.revealedCards == 10;
    }
}

const chooseRandomLetters = () => {
    let chosenLetters = [];
    let originalLetters = [...letters];
    for (let i = 0; i < 5; i++) {
        const letter1Index = Math.floor(Math.random() * (letters.length - i));
        const letter1 = letters[letter1Index];
        letters.splice(letter1Index, 1);
        chosenLetters.push(letter1);
    } letters = originalLetters;
    return chosenLetters;
}

let placements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chooseCardLocation = () => {
    let chosenPlacements = [];
    let allPlacements = [...placements];
    for (let i = 0; i < 10; i++) {
        const place1Index = Math.floor(Math.random() * (placements.length));
        const place1 = placements[place1Index];
        placements.splice(place1Index, 1);
        chosenPlacements.push(place1);
    } placements = allPlacements
    return chosenPlacements;
}

const makeCards = (chosenPlacements, chosenLetters) => {
    let chosenCards = [];
    let even = true;
    let j = 0;
    for (let i = 0; i < chosenPlacements.length; i++) {
        even = !even;
        const letterId = "letter" + chosenPlacements[i];
        chosenCards.push(new Card(chosenPlacements[i], chosenLetters[j], letterId));
        if (even == true) {
            j++
        }
    }
    return chosenCards;
}

const makeCards2 = (chosenPlacements2, chosenLetters2) => {
    let chosenCards2 = [];
    for (let i = 0; i < chosenPlacements2.length; i++) {
        chosenCards2.push(chosenPlacements2[i] + chosenLetters2[i % chosenLetters2.length]);
    }
    return chosenCards2;
}

const cardMaking = () => {
    const cards = makeCards(chooseCardLocation(), chooseRandomLetters());
    document.getElementById("player1Name").innerText = player1.name;
    document.getElementById("player2Name").innerText = player2.name;
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i];
        document.getElementById("letter" + (currentCard.cardId)).innerText = currentCard.content;
        currentCard.cardId = "card" + (currentCard.cardId);
        document.getElementById("score1").innerText = 0;
        document.getElementById("score2").innerText = 0;
        game.revealedCards = 0;
        player1.resetRoundScore();
        player2.resetRoundScore();
        resetCard(currentCard.cardId, currentCard.letterId);
    }
}

const hideCards = (firstCard, secondCard) => {
    game.unsetCards();
    resetCard(firstCard.cardId, firstCard.letterId);
    resetCard(secondCard.cardId, secondCard.letterId);
}

const game = new Game();
const player1 = new Player(prompt("What is your name (player 1)?"))
const player2 = new Player(prompt("What is your name (player 2)?"))
setTimeout(() => cardMaking(), 1);
let isPlayer1Turn = true;
const cardClicked = (cardId, content, letterId) => {
    let currentPlayer = isPlayer1Turn ? player1 : player2;
    if (game.isItFirstCard()) {
        game.setFirstCard(new Card(cardId, content, letterId));
    } else {
        const firstCard = game.getFirstCard();
        const secondCard = new Card(cardId, content, letterId);
        if(firstCard.equals(secondCard)) {
            game.setSecondCard();
            currentPlayer.incrementRoundScore();
            const player1Score = player1.roundScore;
            const player2Score = player2.roundScore;
            document.getElementById("score1").innerText = player1Score;
            document.getElementById("score2").innerText = player2Score;
        } else {
            setTimeout(() => hideCards(firstCard, secondCard), 500);
        } isPlayer1Turn = !isPlayer1Turn;
    }
}

const isTheGameOver = (cardId, content, letterId) => {
    let winningPlayer;
    cardClicked(cardId, content, letterId);
    if (game.isGameOver()) {
        if (player1.roundScore > player2.roundScore) {
            winningPlayer = player1;
            winningPlayer.incrementGameScore();
        } else {
            winningPlayer = player2;
            winningPlayer.incrementGameScore();
        }
        let player1GameScore = player1.gameScore;
        let player2GameScore = player2.gameScore;
        document.getElementById("gameScore1").innerText = player1GameScore;
        document.getElementById("gameScore2").innerText = player2GameScore;
        alert(winningPlayer.name + " wins")
    }
}

const DoYouWantToContinue = (cardId, content, letterId) => {
    let DoYouWantToContinue = "yes";
    if (DoYouWantToContinue == "yes" || DoYouWantToContinue == "yes") {
        isTheGameOver(cardId, content, letterId);
    } else {
        alert("Thanks for playing!")
    }
}

const isCardRevealed = (cardId) => {
    let isRevealed = false;
    const cardHtmlElement = document.getElementById(cardId);
    if(cardHtmlElement.style.cssText == "opacity: 0;") {
        isRevealed = true;
    } else {
        isRevealed = false;
    } return isRevealed;
}

const showCard = (cardId, letterId) => {
    const cardHtmlElement = document.getElementById(cardId);
    const letterHtmlElement = document.getElementById(letterId);
    const letter = letterHtmlElement.innerText;
    const revealedCard = isCardRevealed(cardId);
    if (revealedCard == false) {
        cardHtmlElement.style = "opacity: 0;";
        letterHtmlElement.style = "opacity: 1;";
        DoYouWantToContinue(cardId, letter, letterId);
    }
}