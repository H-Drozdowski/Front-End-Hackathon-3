/*
Hudson Drozdowski
2026-02-12
Hackathon 3
*/

// represents current state and numbers selected.
let currentState = "addition"
let number1 = 0
let number2 = 0

// the buttons to select calculation type.
const additionButton = document.getElementById("addition-button")
const subtractionButton = document.getElementById("subtraction-button")
const divisionButton = document.getElementById("division-button")
const multiplicationButton = document.getElementById("multiplication-button")

// calculate button
const calculateButton = document.getElementById("calculate-button")

// inputs.
const input1 = document.getElementById("input-1")
const input2 = document.getElementById("input-2")

const resultDisplay = document.getElementById("result-value")

// calculates the total based on the selected calculation type.
function calculate(currentState){
    console.log(number1)
    console.log(number2)

    switch(currentState){

        case "addition":{
            addition(number1, number2) 
            break;
        }

        case "subtraction":{
            subtract(number1, number2)
            break;
        }

        case "multiplication":{
            multiplication(number1, number2)
            break;
        }

        case "division": {
            divide(number1, number2)
            break;
        }
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    // on website loaded.
    calculate(currentState)

    // On calculation type buttons clicked.
    additionButton.addEventListener("click", () =>{
        currentState = "addition"
    })

    subtractionButton.addEventListener("click", () =>{
        currentState = "subtraction"
    })

    multiplicationButton.addEventListener("click", () =>{
        currentState = "multiplication"
    })

    divisionButton.addEventListener("click", () =>{
        currentState = "division"
    })

    // On calculate button clicked
    calculateButton.addEventListener("click", () => {
        number1 = input1.value
        number2 = input2.value
        calculate(currentState)
    })
});

function subtract(val1, val2) {
    val1 = parseFloat(input1.value);
    val2 = parseFloat(input2.value);

    // Validation
    if (isNaN(val1) || isNaN(val2)) {
        resultDisplay.innerText = "Please enter valid numbers";
        return;
    }

    const total = val1 - val2;

    resultDisplay.innerText = total;
}

function divide(val1, val2) {
    val1 = parseFloat(input1.value);
    val2 = parseFloat(input2.value);

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

function addition(val1, val2){
    val1 = parseFloat(input1.value);
    val2 = parseFloat(input2.value);

    addition_calculation = val1 + val2;
    resultDisplay.innerText = addition_calculation
}

function multiplication(val1, val2){
    val1 = parseFloat(input1.value);
    val2 = parseFloat(input2.value);

    multiplication_calculation = val1 * val2;
    resultDisplay.innerText = multiplication_calculation
}