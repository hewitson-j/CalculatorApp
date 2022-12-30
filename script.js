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

//Number Buttons and functions
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

//Delete button and function
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

//All Clear button and funtion
allClearButton.forEach((button) => {
  button.addEventListener("click", () => {
    previousOperand.textContent = "";
    currentOperand.textContent = "0";
  });
});

//Operations Buttons and function
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //If current operand ends in decimal, adds a zero to avoid errors
    if (
      currentOperand.textContent.charAt(
        currentOperand.textContent.length - 1
      ) === "."
    ) {
      currentOperand.textContent = currentOperand.textContent + "0";
    }

    //If no value to operate against, adds this value as first operator and clears current for input of second operator
    if (previousOperand.textContent === "") {
      const newPreviousOperand =
        currentOperand.textContent + " " + button.textContent;
      previousOperand.textContent = newPreviousOperand;
      currentOperand.textContent = "0";
      return;
    }
    //If there is already an operator to add against, it performs the function with the currently input operator
    else {
      const previousOperandValue = previousOperand.textContent.substring(
        0,
        previousOperand.textContent.length - 2
      );

      const operationCharacter = previousOperand.textContent.charAt(
        previousOperand.textContent.length - 1
      );

      switch (operationCharacter) {
        case "+":
          var preOperand = parseFloat(previousOperandValue);
          var curOperand = parseFloat(currentOperand.textContent);

          var value = preOperand + curOperand;

          previousOperand.textContent = "";
          currentOperand.textContent = value.toString();
          break;
        case "-":
          var preOperand = parseFloat(previousOperandValue);
          var curOperand = parseFloat(currentOperand.textContent);

          var value = preOperand - curOperand;

          previousOperand.textContent = "";
          currentOperand.textContent = value.toString();
          break;
        case "*":
          var preOperand = parseFloat(previousOperandValue);
          var curOperand = parseFloat(currentOperand.textContent);

          var value = preOperand * curOperand;

          previousOperand.textContent = "";
          currentOperand.textContent = value.toString();
          break;
        case "÷":
          var preOperand = parseFloat(previousOperandValue);
          var curOperand = parseFloat(currentOperand.textContent);

          var value = preOperand / curOperand;

          previousOperand.textContent = "";
          currentOperand.textContent = value.toString();
          break;
      }
    }
  });
});

//Equals Button and functions
equalsButton.forEach((button) => {
  button.addEventListener("click", () => {
    //If no value to operate against, the calculator returns and does nothing.
    if (previousOperand.textContent === "") {
      return;
    }

    var previous = previousOperand.textContent.substring(
      0,
      previousOperand.textContent.length - 2
    );
    var current = currentOperand.textContent;
    const operationCharacter = previousOperand.textContent.charAt(
      previousOperand.textContent.length - 1
    );

    //If current operand ends in decimal, adds a zero to avoid errors
    if (current.charAt(current.length - 1) === ".") {
      current = current + "0";
    }

    //Performs operation based on operation character
    switch (operationCharacter) {
      case "+":
        var previousNum = parseFloat(previous);
        var currentNum = parseFloat(current);

        var value = previousNum + currentNum;

        previousOperand.textContent = "";
        currentOperand.textContent = value.toString();
        break;
      case "-":
        var previousNum = parseFloat(previous);
        var currentNum = parseFloat(current);

        var value = previousNum - currentNum;

        previousOperand.textContent = "";
        currentOperand.textContent = value.toString();
        break;
      case "*":
        var previousNum = parseFloat(previous);
        var currentNum = parseFloat(current);

        var value = previousNum * currentNum;

        previousOperand.textContent = "";
        currentOperand.textContent = value.toString();
        break;
      case "÷":
        var previousNum = parseFloat(previous);
        var currentNum = parseFloat(current);

        var value = previousNum / currentNum;

        previousOperand.textContent = "";
        currentOperand.textContent = value.toString();
        break;
    }
  });
});
