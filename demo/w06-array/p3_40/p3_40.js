const userInput = document.querySelector('#input-number');
const c = document.querySelector('#btn-c');
const f = document.querySelector('#btn-f');

const currentCalculationOutput = document.querySelector('#current-calculation');

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function outputResult(text) {
    currentCalculationOutput.textContent = text;
}

function ctof() {
    const operand1 = getUserInput();

    const calcText = (operand1*9/5+32).toFixed(2);
    console.log(calcText);

    const result = `${operand1}C = ${calcText}F`;
    outputResult(result);
}

function ftoc() {
    const operand1 = getUserInput();

    const calcText = ((operand1 - 32)*5/9).toFixed(2);
    console.log(calcText);

    const result = `${operand1}F = ${calcText}C`;
    outputResult(result);
}

c.addEventListener('click', ctof);
f.addEventListener('click', ftoc);