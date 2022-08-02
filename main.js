function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function operate(operator, num1, num2) {
  //operator is passed as a string, if passed as function, operator(num1,num2) would suffice
  return window[operator](num1, num2);
}

function addButtonClickListeners() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", () => {
      storeDisplayClicks(button);
    });
  });
}

////global Array!!!!!!
var numStoreArray = [];

function storeDisplayClicks(button) {
  var clickValue = button.dataset.value;
  if (clickValue === "=") {
    return computeClicks();
  }
  numStoreArray.push(clickValue);

  var clickedDigit = button.classList.contains("digits");
  if (clickedDigit) {
    document.getElementById("display").textContent = clickValue;
  }
}

function computeClicks() {
  var num1 = numStoreArray[0];
  var operator = numStoreArray[1];
  var num2 = numStoreArray[2];
  numStoreArray = [];
  var answer = operate(operator, num1, num2);
  document.getElementById("display").textContent = answer;
}

addButtonClickListeners();

/*
Make the calculator work! You’ll need to store 
the first number that is input into the calculator 
when a user presses an operator, and also save which 
operation has been chosen and then operate() on them
 when the user presses the “=” key.
 
 lets break it down - 

 1.when you press a number button, store that number and display that number on screen 
 2. then when you press an operator, save what operator has been pressed 
 3. then when you press another number button, save that in memory and display it on screen 
 4. when the user presses the =, operate with the saved variables and display on screen 

 I think i should be storing stuff in a global array 
 */
