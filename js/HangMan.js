const categoriesToWords = {
    "animals": ["lion", "penguin", "flamingo", "dog", "falcon", "horse", "cat", "pig", "racoon", "fish"],
    "countries": ["america", "russia", "israel", "italy", "germany", "thailand", "alabama", "australia", "belgium", "cyprus"],
    "colors": ["red", "blue", "yellow", "green", "black", "grey", "white", "purple", "pink", "orange"],
    "food": ["steak", "apple", "rice", "bread", "soup", "chicken", "banana", "orange", "tomato", "cucumber"],
    "school subjects": ["english", "math", "science", "geography", "physics", "history", "litrature", "chimestry", "biology", "art"],
    "body parts": ["leg", "arm", "hand", "foot", "ear", "nose", "mouth", "eye", "stomach", "back"],
    "desserts": ["cake", "biscotti", "cobbler", "waffle", "pancake", "doughnut", "brownie", "cupcake", "cookie", "fudge"],
    "tools": ["axe", "drill", "hoe", "shovel", "pickaxe", "glue", "hammer", "knife", "ladder", "nail"],
    "furniture": ["bench", "bed", "bookshelf", "chair", "chest", "desk", "table", "highchair", "lamp", "mirror"],
    "biomes": ["aquatic", "cave", "city", "desert", "jungle", "pond", "rainforest", "swamp", "savanna", "woods"]
};
 
const firstMistakeDrawing = "_________";
const secondMistakeDrawing = "       |      \n       |     \n       |     \n ____|____";
const thirdMistakeDrawing = "_____\n |\n       |      \n       |     \n       |     \n ____|____";
const fourthMistakeDrawing = "_____\n |\nO    |      \n       |     \n       |     \n ____|____";
const fifthMistakeDrawing = "_____\n |\nO     |      \n|      |     \n       |     \n ____|____";
const sixthMistakeDrawing = "_____\n |\n O    |      \n /|    |     \n       |     \n ____|____";
const seventhMistakeDrawing = "_____\n  |\n  O  |      \n /|\\  |     \n       |     \n ____|____";
const eighthMistakeDrawing = "_____\n  |\n  O  |      \n /|\\  |     \n /     |     \n ____|____";
const ninthMistakeDrawing = "_____\n  |\n  O  |      \n /|\\  |     \n / \\  |     \n ____|____";

const categoryChooser = () => {
    const categories = Object.keys(categoriesToWords);
    return categories[Math.floor(Math.random() * categories.length)];
}

const wordChooser = (category) => {
    const words = categoriesToWords[category];
    return words[Math.floor(Math.random() * words.length)];
}
const gameStart = () => {
    DoYouWantToContinue = "yes";
    let score = 0;
    while(DoYouWantToContinue == 'Yes' || DoYouWantToContinue == 'yes' || DoYouWantToContinue == 'y') {
        alert("Welcome to Hang Man!");
        const category = categoryChooser();
        const randomWord = wordChooser(category);
        let hiddenWord = letterHider(randomWord);
        let mistakeCounter = 0;

        do {
            alert("the category is: " + category + "\n" + hiddenWord);
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
    } alert('Thanks for playing! your total score is ' + score)
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
        alert("your guess was wrong");
        if (mistakeCounter == 1) {
            alert(firstMistakeDrawing);
        } else if (mistakeCounter == 2) {
            alert(secondMistakeDrawing);
        } else if (mistakeCounter == 3) {
            alert(thirdMistakeDrawing);
        } else if (mistakeCounter == 4) {
            alert(fourthMistakeDrawing);
        } else if (mistakeCounter == 5) {
            alert(fifthMistakeDrawing);
        } else if (mistakeCounter == 6) {
            alert(sixthMistakeDrawing);
        } else if (mistakeCounter == 7) {
            alert(seventhMistakeDrawing);
        } else if (mistakeCounter == 8) {
            alert(eighthMistakeDrawing);
        } else if (mistakeCounter == 9) {
            alert(ninthMistakeDrawing);
        }
    }
    return mistakeCounter;
}