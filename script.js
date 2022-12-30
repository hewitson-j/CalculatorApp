class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.clearAll();
  }

  clearAll() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {}
  chooseOperation(operation) {}
  compute(num1, num2) {}
  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operations]");
const equalsButton = document.querySelectorAll("[data-equals]");
const deleteButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const previousOperand = document.querySelectorAll("[data-previous-operand]");
const currentOperand = document.querySelectorAll("[data-current-operand]");

const calculator = new Calculator(previousOperand, currentOperand);
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
