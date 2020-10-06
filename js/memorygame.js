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
        chosenCards.push(chosenPlacements[i] + chosenLetters[j]);
        if (even == true) {
            j++
        }
    }
    return chosenCards;
}

const makeCards2 = (chosenPlacements2, chosenLetters2) => {
    let chosenCards2 = [];
    let even2 = true;
    let j = 0;
    for (let i = 0; i < chosenPlacements2.length; i++) {
        even2 = !even2;
        chosenCards2.push(chosenPlacements2[i] + chosenLetters2[j]);
        if (even2 == true) {
            j++
        }
    }
    return chosenCards2;
}

const cardMaking = () => {
    const cards = makeCards(chooseCardLocation(), chooseRandomLetters());
    document.getElementById("letter1") = cards[0];
    document.getElementById("letter2") = cards[1];
    document.getElementById("letter3") = cards[2];
    document.getElementById("letter4") = cards[3];
    document.getElementById("letter5") = cards[4];
    document.getElementById("letter6") = cards[5];
    document.getElementById("letter7") = cards[6];
    document.getElementById("letter8") = cards[7];
    document.getElementById("letter9") = cards[8];
    document.getElementById("letter10") = cards[9];
}

const game = new Game();
const cardClicked = (cardId, content) => {
    if (game.isFirstCard()) {
        game.setFirstCard(new Card(cardId, content));
    } else {
        // check if cards are equal and act as you planned in the notebook
    }
}
