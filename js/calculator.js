/**
 * calc
 * it's a calculator.
 * @param {number} num1 the first number you input.
 * @param {number} num2 the second number you input.
 * @param {number} operation the action.
 */
const calculate = (num1, num2, operation) => {
    if (operation == "+") {
        return num1 + num2;
    }
    if (operation == "-") {
        return num1 - num2;
    }
    if (operation == "*") {
        return num1 * num2;
    } if (operation == ":") {
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
}