const userInput = document.querySelector('#input-number');
const addBtn = document.querySelector(`#btn-add`);
const subBtn = document.querySelector(`#btn-subtract`);
const mulBtn = document.querySelector(`#btn-multiply`);
const divBtn = document.querySelector(`#btn-divide`);

const currentResultOutput = document.querySelector(`#current-result`);
const currentCalculationOutput = document.querySelector(`#current-calculation`);




// console.log(`userInput`, userInput);
// console.log(`addBtn`, addBtn);
// console.log(`subBtn`, subBtn);
// console.log(`mulBtn`, mulBtn);
// console.log(`divBtn`, divBtn);

// console.log(`currentResultOutput`, currentResultOutput);
// console.log(`currentCalculationOutput`, currentCalculationOutput);

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt (userInput.value);
}

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}
// operand1 op operator operand2 0 + 5
function add() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1+operand2;
    console.log(`${operand1} + ${operand2} = ${currentResult}`);
    const calcText = `${operand1} + ${operand2}`
    outputResult(currentResult, calcText);
}

function sub() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 - operand2;
    console.log(`${operand1} - ${operand2} = ${currentResult}`);
    const calcText = `${operand1} - ${operand2}`
    outputResult(currentResult, calcText);
}

function mul() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 * operand2;
    console.log(`${operand1} * ${operand2} = ${currentResult}`);
    const calcText = `${operand1} * ${operand2}`
    outputResult(currentResult, calcText);
}

function div() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 / operand2;
    console.log(`${operand1} / ${operand2} = ${currentResult}`);
    const calcText = `${operand1} / ${operand2}`
    outputResult(currentResult, calcText);
}


addBtn.addEventListener('click',add);
subBtn.addEventListener('click',sub);
mulBtn.addEventListener('click',mul);
divBtn.addEventListener('click',div);


