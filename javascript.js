const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else {
            currentInput += buttonValue;
            display.value = currentInput;
        }
    });
});

function clearDisplay() {
    currentInput = '';
    operator = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
