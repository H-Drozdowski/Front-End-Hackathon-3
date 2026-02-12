/** 
 * Warren Macalino
 * 2026-02-12
 * Hackathon 3
*/

// Input/Result Values
const input1 = document.getElementById('num1-input');
const input2 = document.getElementById('num2-input');
const resultDisplay = document.getElementById('result-value');

// Buttons
const subButton = document.getElementById('subtraction-button');
const divButton = document.getElementById('division-button');

// Functions
function subtract() {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);

    // Validation
    if (isNaN(val1) || isNaN(val2)) {
        resultDisplay.innerText = "Please enter valid numbers";
        return;
    }

    const total = val1 - val2;

    resultDisplay.Display.innerText = total;
}

function divide() {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);

    // Validation
    if (isNaN(val1) || isNaN(val2)) {
        resultDisplay.innerText = "Please enter valid numbers";
        return;
    }

    if (val2 === 0) {
        resultDisplay.innerText = "Cannot divide by zero!"
    } else {
        const total = val1 / val2;
        resultDisplay.innerText = total;
    }
}

// Events
subButton.addEventListener('click', subtract);
divButton.addEventListener('click', divide);