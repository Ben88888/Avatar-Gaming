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
        const operations = ['+', '-', '*', '/', '%', '^', 'Max', 'Min'];
        const randomOperation = operations[Math.floor(Math.random() * 8)];
        return calculate(num1, num2, randomOperation);
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
        const randomSolution = calculate(num1, num2, '?');
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

