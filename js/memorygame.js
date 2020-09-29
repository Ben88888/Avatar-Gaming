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
    let allPlacements = [...placements]
    for (let i = 0; i < 10; i++) {
        const place1 = Math.floor(Math.random() * 10) + 1;
        const place1Index = place1 - 1;
        placements.splice(place1Index, 1);
        chosenPlacements.push(place1);
    } placements = allPlacements
    return chosenPlacements;
}

const makeCards = (chosenPlacements, chosenLetters) => {
    let chosenCards = [];
    chosenCards.push(chosenPlacements[0] + chosenLetters[0], chosenPlacements[1] + chosenLetters[0],
                    chosenPlacements[2] + chosenLetters[1], chosenPlacements[3] + chosenLetters[1],
                    chosenPlacements[4] + chosenLetters[2], chosenPlacements[5] + chosenLetters[2],
                    chosenPlacements[6] + chosenLetters[3], chosenPlacements[7] + chosenLetters[3],
                    chosenPlacements[8] + chosenLetters[4], chosenPlacements[9] + chosenLetters[4]);
}

const game = new Game();
const cardClicked = (cardId, content) => {
    if (game.isFirstCard()) {
        game.setFirstCard(new Card(cardId, content));
    } else {
        // check if cards are equal and act as you planned in the notebook
    }
}
