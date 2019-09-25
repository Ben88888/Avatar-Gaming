const words = ['eflection', 'fashionable', 'mill', 'flex', 'damage', 'dirty', 'allowance', 'neck', 'recruit',
 'television', 'tired', 'cook', 'limited', 'routine', 'choose', 'peace', 'wisecrack', 'essay', 'enhance', 'ally',
 'clerk','attention','opera','dimension','west','belong','excuse','leak','champion','liberal','barrier','confusion',
 'clearance','truth','install','swop','curve','analysis','realize','glance','nationalist','slice','cave','conservative',
 'movie','spokesperson','aquarium','omission','introduce','move','brink','benefit','expertise','desk','division',
 'bathtub','unpleasant','hook','dine','holiday','skeleton','relax','suitcase','groan','miserable','office','corpse',
 'sticky'];
 
const firstMistakeDrawing = "_________";
const secondMistakeDrawing = "       |      \n       |     \n       |     \n ____|____";
const thirdMistakeDrawing = "_____\n |\n       |      \n       |     \n       |     \n ____|____";
const fourthMistakeDrawing = "_____\n |\nO    |      \n       |     \n       |     \n ____|____";
const fifthMistakeDrawing = "_____\n |\nO     |      \n|      |     \n       |     \n ____|____";
const sixthMistakeDrawing = "_____\n |\n O    |      \n /|    |     \n       |     \n ____|____";
const seventhMistakeDrawing = "_____\n  |\n  O  |      \n /|\\  |     \n       |     \n ____|____";
const eighthMistakeDrawing = "_____\n  |\n  O  |      \n /|\\  |     \n /     |     \n ____|____";
const ninthMistakeDrawing = "_____\n  |\n  O  |      \n /|\\  |     \n / \\  |     \n ____|____";

const wordChooser = () => {
    return words[Math.floor(Math.random() * words.length)];
}
const gameStart = () => {
    DoYouWantToContinue = "yes";
    let score = 0;
    while(DoYouWantToContinue == 'Yes' || DoYouWantToContinue == 'yes' || DoYouWantToContinue == 'y') {
        alert("Welcome to Hang Man!");
        const randomWord = wordChooser();
        let hiddenWord = letterHider(randomWord);
        let mistakeCounter = 0;

        do {
            alert(hiddenWord);
            const letter = prompt("Please guess a letter!");
            mistakeCounter = mistakeChecker(randomWord, letter, mistakeCounter);
            hiddenWord = wordCompleter(randomWord, hiddenWord, letter);
        }
        while (mistakeCounter < 9 && hiddenWord.indexOf('_') != -1);
        if (mistakeCounter < 9) {
            score++;
            alert("You won! the word was " + randomWord + " and your score is " + score);
        } else {
            score--;
            alert("You lost... the word was " + randomWord + " and your score is " + score);
        }
        DoYouWantToContinue = prompt('Do You Want To Continue?');
    }
}

const letterHider = (word) => {
    let otherWord = '';
    for (let i = 0; i < word.length; i++) {
        otherWord = otherWord + '_ ';
    }
    return otherWord;
}

const wordCompleter = (originalWord, hiddenWord, letter) => {
    const letterPositions = [];
    for (let i = 0; i < originalWord.length; i++) {
        if (letter == originalWord[i]) {
            letterPositions.push(i);
        }
    }

    let newHiddenWord = "";
    let indexPosition = 0;
    for (let i = 0; i < hiddenWord.length; i++) {
        if (2 * letterPositions[indexPosition] == i) {
            newHiddenWord = newHiddenWord + letter;
            indexPosition++;
        } else {
            newHiddenWord = newHiddenWord + hiddenWord[i];
        }
    }
    return newHiddenWord;
}

const mistakeChecker = (originalWord, guessedLetter, mistakeCounter) => {
    const letterPositions = [];
    for (let i = 0; i < originalWord.length; i++) {
        if (guessedLetter == originalWord[i]) {
            letterPositions.push(i);
        }
    }
    if (letterPositions.length == 0) {
        mistakeCounter++;
        if (mistakeCounter == 1) {
            alert(firstMistakeDrawing)
        } else if (mistakeCounter == 2) {
            alert(secondMistakeDrawing)
        } else if (mistakeCounter == 3) {
            alert(thirdMistakeDrawing)
        } else if (mistakeCounter == 4) {
            alert(fourthMistakeDrawing)
        } else if (mistakeCounter == 5) {
            alert(fifthMistakeDrawing)
        } else if (mistakeCounter == 6) {
            alert(sixthMistakeDrawing)
        } else if (mistakeCounter == 7) {
            alert(seventhMistakeDrawing)
        } else if (mistakeCounter == 8) {
            alert(eighthMistakeDrawing)
        } else if (mistakeCounter == 9) {
            alert(ninthMistakeDrawing)
        }
    }
    return mistakeCounter;
}