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
  var divideByZero = num2 === 0;
  if (divideByZero) {
    return "You cannot divide by 0";
  } else {
    return parseInt(num1) / parseInt(num2);
  }
}

function operate(operator, num1, num2) {
  //operator is passed as a string; if passed as function e.g. on console, operator(num1,num2) would suffice
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
var numStoreArray = ["", "", ""];
var answer;

function storeDisplayClicks(button) {
  var clickDigit = button.classList.contains("digits");
  var clickFunction = button.classList.contains("functions");
  var clickEquals = button.classList.contains("equals");
  var clickClear = button.classList.contains("clear");

  var clickValue = button.dataset.value;

  if (clickClear) {
    numStoreArray = [];
    document.getElementById("display").textContent = "";
  }

  if (clickEquals) {
    computeClicks();
  }

  //the function in the calculation
  if (clickFunction) {
    if (numStoreArray[1]) {
      computeClicks();
      numStoreArray[1] = clickValue;
    } else {
      numStoreArray[1] = clickValue;
    }
  }

  // the first digit in the calculation
  if (clickDigit && !numStoreArray[1]) {
    if (numStoreArray[0]) {
      numStoreArray[0] = numStoreArray[0] + clickValue;
    } else {
      numStoreArray[0] = clickValue;
    }
    document.getElementById("display").textContent = numStoreArray[0];
  }

  //the second digit in the calculation
  else if (clickDigit) {
    if (numStoreArray[2]) {
      numStoreArray[2] = numStoreArray[2] + clickValue;
    } else {
      numStoreArray[2] = clickValue;
    }
    document.getElementById("display").textContent = numStoreArray[2];
  }
}

function computeClicks() {
  var num1 = numStoreArray[0];
  var operator = numStoreArray[1];
  var num2 = numStoreArray[2];

  answer = operate(operator, num1, num2);
  numStoreArray = [];
  numStoreArray[0] = answer;
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
 ---how to store multiple digits? 
 keep pushing/displaying all clicks as a concatenated string until an operator has been pressed 
 2. then when you press an operator, save what operator has been pressed 
 3. then when you press another number button, save that in memory and display it on screen 
 4. when the user presses the =, operate with the saved variables and display on screen 

 I think i should be storing stuff in a global array 
 */
