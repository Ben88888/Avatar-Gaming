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
    constructor(cardId, content, letterId) {
        this.cardId = cardId;
        this.content = content;
        this.letterId = letterId
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
        this.revealedCards = 2;
    }

    // Call this function if the cards aren't equal
    unsetCards() {
        this.firstCard = undefined;
        this.isFirstCard = true;
        this.revealedCards -= 2;
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
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i];
        document.getElementById("letter" + (currentCard.cardId)).innerText = currentCard.content;
        currentCard.cardId = "card" + (currentCard.cardId);
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
            currentPlayer.incrementRoundScore()
        } else {
            setTimeout(() => hideCards(firstCard, secondCard), 500);
        } isPlayer1Turn = !isPlayer1Turn;
    }
}

const isTheGameOver = (cardId, content, letterId) => {
    if (game.isGameOver()) {
        alert("you won (also a placeholder but we didnt add scores or players yet)")
    } else {
        cardClicked(cardId, content, letterId);
    }
}

const showCard = (cardId, letterId) => {
    const cardHtmlElement = document.getElementById(cardId);
    const letterHtmlElement = document.getElementById(letterId);
    const letter = letterHtmlElement.innerText;
    cardHtmlElement.style = "opacity: 0;";
    letterHtmlElement.style = "opacity: 1;";
    isTheGameOver(cardId, letter, letterId);
}