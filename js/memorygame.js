const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
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
}

class Card {
    constructor(cardId, content) {
        this.cardId = cardId;
        this.content = content;
    }
    equals(otherCard) {
        return (otherCard.content == this.content);
    }
}

const showCard = (cardId, letterId) => {
    const cardHtmlElement = document.getElementById(cardId);
    const letterHtmlElement = document.getElementById(letterId);
    cardHtmlElement.style = "opacity: 0;";
    letterHtmlElement.style = "opacity: 1;";
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
    isFirstCard() {
        return this.isFirstCard;
    }
    setFirstCard(card) {
        this.firstCard = card;
        this.isFirstCard = false;
        this.revealedCards++;
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
        this.revealedCards = 10;
    }
}

const returnCards = () => {
const chooseLetters = Object.keys(letters);
let chosenLetters = [];
const letter1 = chooseLetters[Math.floor(Math.random() * chooseLetters.length)];
chooseLetters.splice(chooseLetters.findIndex(letter1), 1);
chosenLetters.push(letter1);
const letter2 = chooseLetters[Math.floor(Math.random() * chooseLetters.length)];
chooseLetters.splice(chooseLetters.findIndex(letter2), 1);
chosenLetters.push(letter2);
const letter3 = chooseLetters[Math.floor(Math.random() * chooseLetters.length)];
chooseLetters.splice(chooseLetters.findIndex(letter3), 1);
chosenLetters.push(letter3);
const letter4 = chooseLetters[Math.floor(Math.random() * chooseLetters.length)];
chooseLetters.splice(chooseLetters.findIndex(letter4), 1);
chosenLetters.push(letter4);
const letter5 = chooseLetters[Math.floor(Math.random() * chooseLetters.length)];
chooseLetters.splice(chooseLetters.findIndex(letter5), 1);
chosenLetters.push(letter5);
}

const cardPlacer = () => {
    const enterName = Math.floor(Math.random() * 10) + 1;
}

const game = new Game();
const cardClicked = (cardId, content) => {
    if (game.isFirstCard()) {
        game.setFirstCard(new Card(cardId, content));
    } else {
        // check if cards are equal and act as you planned in the notebook
    }
}
