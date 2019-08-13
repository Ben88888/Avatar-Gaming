const randomOperation = () => {
    const operations = ['+', '-', '*', '/', '%', '^', 'Max', 'Min'];
    return operations[Math.floor(Math.random() * 8)];
}

/**
 * calc
 * it's a calculator.
 * @param {number} num1 the first number you input.
 * @param {number} num2 the second number you input.
 * @param {number} operation the action.
 */
const calculate = (num1, num2, operation) => {
    if (operation == "+") {
        return parseInt(num1) + parseInt(num2);
    }
    if (operation == "-") {
        return num1 - num2;
    }
    if (operation == "*") {
        return num1 * num2;
    } if (operation == "/") {
        return num1 / num2;
    }
    if (operation == "^") {
        return Math.pow(num1, num2);
    }
    if (operation == "%") {
        return num1 % num2;
    }
    if (operation == "Min") {
        return Math.min(num1, num2);
    }
    if (operation == "Max") {
        return Math.max(num1, num2);
    }
    if (operation == "?") {
        return calculate(num1, num2, randomOperation());
    }
}
const randomNumbers = () => {
    DoYouWantToContinue = "yes";
    alert("Welcome to the calculator minigame!");
    let score = 0;
    while(DoYouWantToContinue == 'Yes' || DoYouWantToContinue == 'yes' || DoYouWantToContinue == 'y') {
        const num1 = Math.floor(Math.random() * 10000);
        const num2 = Math.floor(Math.random() * 10000);
        document.getElementById('firstNumber').value = num1;
        document.getElementById('secondNumber').value = num2;
        const randomSolution = randomOperation();
        alert("Num1 = " + num1 + " Num 2 = " + num2 + " solution = " + randomSolution);
        const guessOperation = prompt("Please guess the operation!");
        const guessSolution = calculate(num1, num2, guessOperation);
        if (randomSolution == guessSolution) {
            score++;
            alert('Correct and your score is ' + score);
        } else {
            score--;
            alert('Wrong and your score is ' + score);
        }
        DoYouWantToContinue = prompt('Do You Want To Continue?');
    }
    alert('Thanks for playing! your total score is ' + score)
    return randomSolution;
    
}

const randomExercise = () => {
    DoYouWantToContinue = "yes";
    alert("Welcome to the exercise minigame!");
    let score = 0;
    while(DoYouWantToContinue == 'Yes' || DoYouWantToContinue == 'yes' || DoYouWantToContinue == 'y') {
        const num1 = Math.floor(Math.random() * 10000);
        const num2 = Math.floor(Math.random() * 10000);
        document.getElementById('firstNumber').value = num1;
        document.getElementById('secondNumber').value = num2;
        const randomOperation2 = randomOperation();
        alert(num1 + " " + randomOperation2 + " " + num2 + " = ");
        const guessSolution = prompt("Please guess the solution!");
        const randomSolution = calculate(num1, num2, randomOperation2);
        if (randomSolution == guessSolution) {
            score++;
            alert('Correct and your score is ' + score);
        } else {
            score--;
            alert('Wrong and your score is ' + score);
        }
        DoYouWantToContinue = prompt('Do You Want To Continue?');
    }
    alert('Thanks for playing! your total score is ' + score)
    return randomOperation2;    

}