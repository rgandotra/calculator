function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  operator(num1, num2);
}

function addButtonClickListeners() {
  const buttons = document.querySelectorAll("button"); //check if this works
  buttons.forEach(function (button) {
    button.addEventListener("click", () => {
      var clickValue = button.dataset.value;
      document.getElementById("display").textContent = clickValue;
    });
  });
}

addButtonClickListeners();

/*
Make the calculator work! You’ll need to store 
the first number that is input into the calculator 
when a user presses an operator, and also save which 
operation has been chosen and then operate() on them
 when the user presses the “=” key.
 */
