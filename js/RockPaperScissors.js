const randomAnswer = () => {
    const answers = ['rock', 'paper', 'scissors'];
    return answers[Math.floor(Math.random() * answers.length)];
}

const valueMaker = (playerAnswer, computerAnswer) => {
    if (playerAnswer == computerAnswer) {
        return 'tie'
    }
    if (playerAnswer == 'rock' && computerAnswer == 'scissors') {
        return 'player wins'
    }
    if (playerAnswer == 'paper' && computerAnswer == 'rock') {
        return 'player wins'
    }
    if (playerAnswer == 'scissors' && computerAnswer == 'paper') {
        return 'player wins'
    }
    if (playerAnswer == 'scissors' && computerAnswer == 'rock') {
        return 'computer wins'
    }
    if (playerAnswer == 'rock' && computerAnswer == 'paper') {
        return 'computer wins'
    }
    if (playerAnswer == 'paper' && computerAnswer == 'scissors') {
        return 'computer wins'
    }
}
const actualGame = () => {
    DoYouWantToContinue = "yes";
    alert("Welcome to the rock paper scissors minigame!");
    let score = 0;
    while(DoYouWantToContinue == 'Yes' || DoYouWantToContinue == 'yes' || DoYouWantToContinue == 'y') {
        const neededThing = randomAnswer();
        const playerAnswer2 = prompt("Please enter rock, paper or scissors");
        const computerAnswer2 = neededThing
        if (playerAnswer2 == computerAnswer2) {
            alert('tie and your score is ' + score)
        }
        if (playerAnswer2 == 'rock' && computerAnswer2 == 'scissors') {
            score++
            alert('player wins and your score is ' + score)
        }
        if (playerAnswer2 == 'paper' && computerAnswer2 == 'rock') {
            score++
            alert('player wins and your score is ' + score)
        }
        if (playerAnswer2 == 'scissors' && computerAnswer2 == 'paper') {
            score++
            alert('player wins and your score is ' + score)
        }
        if (playerAnswer2 == 'scissors' && computerAnswer2 == 'rock') {
            score--
            alert('computer wins and your score is ' + score)
        }
        if (playerAnswer2 == 'rock' && computerAnswer2 == 'paper') {
            score--
            alert('computer wins and your score is ' + score)
        }
        if (playerAnswer2 == 'paper' && computerAnswer2 == 'scissors') {
            score--
            alert('computer wins and your score is ' + score)
        }
        DoYouWantToContinue = prompt('Do You Want To Continue?');
    }
    alert('Thanks for playing! your total score is ' + score)
    return computerAnswer2;
    
}