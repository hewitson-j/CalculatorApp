// console.log("Hello world");

class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operations]");
const equalsButton = document.querySelectorAll("[data-equals]");
const deleteButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
// const previousOperandText = document.querySelectorAll(
//   "[data-previous-operand]"
// );
// const currentOperandText = document.querySelectorAll("[data-current-operand]");
const currentOperand = document.querySelector("#currentOperand");
const previousOperand = document.querySelector("#previousOperand");
const testText = document.querySelector("#test-text");

// const calculator = new Calculator(previousOperandText, currentOperandText);
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      currentOperand.textContent.includes(".") &&
      button.textContent === "."
    ) {
      return;
    }
    if (currentOperand.textContent === "0") {
      currentOperand.textContent = button.textContent;
      return;
    } else {
      currentOperand.textContent =
        currentOperand.textContent + button.textContent;
      return;
    }
  });
});

deleteButton.forEach((button) => {
  button.addEventListener("click", () => {
    const newOperand = currentOperand.textContent.substring(
      0,
      currentOperand.textContent.length - 1
    );
    currentOperand.textContent = newOperand;
    if (currentOperand.textContent.length <= 0) {
      currentOperand.textContent = "0";
    }
  });
});

allClearButton.forEach((button) => {
  button.addEventListener("click", () => {
    previousOperand.textContent = "";
    currentOperand.textContent = "0";
  });
});
