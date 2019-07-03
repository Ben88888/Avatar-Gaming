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