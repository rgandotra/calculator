function add(num1, num2) {
  return (parseFloat(num1) + parseFloat(num2)).toFixed(3);
}

function subtract(num1, num2) {
  return (parseFloat(num1) - parseFloat(num2)).toFixed(3);
}

function multiply(num1, num2) {
  return (parseFloat(num1) * parseFloat(num2)).toFixed(3);
}

function divide(num1, num2) {
  var divideByZero = num2 === "0";
  if (divideByZero) {
    alert("Cannot divide by zero!");
  } else {
    return (parseFloat(num1) / parseFloat(num2)).toFixed(3);
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
      storeClicks(button);
    });
  });
}

////global Array!!!!!!
var numStoreArray = ["", "", ""];
var answer;

function storeClicks(button) {
  var clickDigit = button.classList.contains("digits");
  var clickFunction = button.classList.contains("functions");
  var clickEquals = button.classList.contains("equals");
  var clickClear = button.classList.contains("clear");

  var clickValue = button.dataset.value;

  if (clickClear) {
    numStoreArray = [];
    displayClicks("0");
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
    displayClicks(numStoreArray[0]);
  }

  //the second digit in the calculation
  else if (clickDigit) {
    if (numStoreArray[2]) {
      numStoreArray[2] = numStoreArray[2] + clickValue;
    } else {
      numStoreArray[2] = clickValue;
    }
    displayClicks(numStoreArray[2]);
  }
}

function displayClicks(toBeDisplayed) {
  document.getElementById("display").textContent = toBeDisplayed;
}

//called once the numStoreArray[] is fully built out
function computeClicks() {
  var num1 = numStoreArray[0];
  var operator = numStoreArray[1];
  var num2 = numStoreArray[2];

  answer = operate(operator, num1, num2);

  if (!answer) {
    displayClicks("0");
  } else {
    displayClicks(answer);
  }
  numStoreArray = [];
  numStoreArray[0] = answer;
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
