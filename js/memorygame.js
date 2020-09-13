const generateRandomCard = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return letters[Math.floor(Math.random() * letters.length)];
}

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

const game = new Game();
const cardClicked = (cardId, content) => {
    if (game.isFirstCard()) {
        game.setFirstCard(new Card(cardId, content));
    } else {
        // check if cards are equal and act as you planned in the notebook
    }
}
