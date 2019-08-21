const randomAnswer = () => {
    const answers = ['rock', 'paper', 'scissors'];
    return answers[Math.floor(Math.random() * answers.length)];
}

const winnerDecider = (playerAnswer, computerAnswer) => {
    if (playerAnswer == computerAnswer) {
        return 0;
    }
    if (playerAnswer == 'rock' && computerAnswer == 'scissors' || 
        playerAnswer == 'paper' && computerAnswer == 'rock' || 
        playerAnswer == 'scissors' && computerAnswer == 'paper')
     {
        return 1;
    }
    if (playerAnswer == 'scissors' && computerAnswer == 'rock' || 
    playerAnswer == 'rock' && computerAnswer == 'paper' || 
    playerAnswer == 'paper' && computerAnswer == 'scissors') {
        return 2;
    } else {
        return 3;
    }
}
const actualGame = () => {
    DoYouWantToContinue = "yes";
    alert("Welcome to the rock paper scissors minigame!");
    let score = 0;
    while(DoYouWantToContinue == 'Yes' || DoYouWantToContinue == 'yes' || DoYouWantToContinue == 'y') {
        const neededThing = randomAnswer();
        const playerAnswer = prompt("Please enter rock, paper or scissors");
        const computerAnswer = neededThing;
        const result = winnerDecider(playerAnswer, computerAnswer);
        if (result == 0) {
            alert('tie and your score is ' + score);
        } else if (result == 1) {
            score++;
            alert('player wins and your score is ' + score);
        } else if (result == 2) {
            score--;
            alert('computer wins and your score is ' + score);
        } else {
            score = score - score / 2;
            alert('you cheated so you lose half of your points, so your score is ' + score + ' now, suffer')
        }
        DoYouWantToContinue = prompt('Do You Want To Continue?');
    }
    alert('Thanks for playing! your total score is ' + score)
    return computerAnswer;
    
}