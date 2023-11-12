document.addEventListener("DOMContentLoaded", () => {
  // your code here......
  let buttons: NodeListOf<HTMLElement> = document.querySelectorAll(
    "button:not(#clearBtn):not(#equalsBtn)"
  );
  let clearBtn = document.getElementById("clearBtn") as HTMLButtonElement;
  let equalsBtn = document.getElementById("equalsBtn") as HTMLButtonElement;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let value: any = button.getAttribute("data-value");

      if (display.value === "0" && value !== ".") {
        display.value = value;
      } else {
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
    } catch (error) {
      display.value = "Error";
    }

    const buttons = document.querySelectorAll(".buttons button");
    const result = document.getElementById("result")! as HTMLInputElement;

    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    function handleClick(event: any) {
      const button = event.target;
      const value = button.dataset.value;

      if (!isNaN(value) && value != 0) {
        const quotient = 10 / value;
        result.textContent = quotient.toString();
      } else {
        result.textContent = "Error";
      }
    }
  });

  function calculate(operator: any, num1: any, num2: any) {
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

  const operatorButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".operator");
  const equalsButton = document.getElementById(
    "equalsBtn"
  )! as HTMLInputElement;
  const display = document.getElementById("display")! as HTMLInputElement;
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
    } else {
    }
  });

  const operandBtns: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".buttons button[data-value]"
  );

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
  const operatorBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    ".buttons button.operator"
  );

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
