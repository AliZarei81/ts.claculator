"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // your code here......
    let buttons = document.querySelectorAll("button:not(#clearBtn):not(#equalsBtn)");
    let clearBtn = document.getElementById("clearBtn");
    let equalsBtn = document.getElementById("equalsBtn");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let value = button.getAttribute("data-value");
            if (display.value === "0" && value !== ".") {
                display.value = value;
            }
            else {
                display.value += value;
            }
        });
    });
    clearBtn.addEventListener("click", () => {
        display.value = "0";
    });
    equalsBtn.addEventListener("click", () => {
        try {
            let result = eval(display.value);
            display.value = result.toString();
        }
        catch (error) {
            display.value = "Error";
        }
        const buttons = document.querySelectorAll(".buttons button");
        const result = document.getElementById("result");
        buttons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });
        function handleClick(event) {
            const button = event.target;
            const value = button.dataset.value;
            if (!isNaN(value) && value != 0) {
                const quotient = 10 / value;
                result.textContent = quotient.toString();
            }
            else {
                result.textContent = "Error";
            }
        }
    });
    function calculate(operator, num1, num2) {
        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                if (num2 === 0) {
                    return "Error";
                }
                return num1 / num2;
            default:
                return "Error";
        }
    }
    const operatorButtons = document.querySelectorAll(".operator");
    const equalsButton = document.getElementById("equalsBtn");
    const display = document.getElementById("display");
    display.value = "0";
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const operator = button.dataset.value;
            const num1 = parseFloat(display.value);
            const num2 = parseFloat(display.value);
        });
    });
    equalsButton.addEventListener("click", () => {
        const operator = display.value.charAt(0);
        const num1 = parseFloat(display.value.slice(1));
        const num2 = parseFloat(display.value.slice(1));
        if (isNaN(num1) || isNaN(num2)) {
            display.value = "Error";
        }
        else {
        }
    });
    const operandBtns = document.querySelectorAll(".buttons button[data-value]");
    operandBtns.forEach((button) => {
        button.addEventListener("click", (event) => {
            const value = button.dataset.value;
        });
    });
    let numbers = [];
    operandBtns.forEach((button) => {
        button.addEventListener("click", (event) => {
            const value = button.dataset.value;
            numbers.push(value);
        });
    });
    const operatorBtns = document.querySelectorAll(".buttons button.operator");
    operatorBtns.forEach((button) => {
        button.addEventListener("click", (event) => {
            const operator = button.dataset.value;
            switch (operator) {
                case "+":
                    break;
                case "-":
                    break;
                case "*":
                    break;
                case "/":
                    break;
            }
        });
    });
});
