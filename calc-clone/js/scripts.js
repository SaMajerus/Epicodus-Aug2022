// Business Logic
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

// User Interface Logic
function handleCalculation(event) { 
  event.preventDefault(); 
  const number1 = parseInt(document.querySelector("input#input1").value); 
  const number2 = parseInt(document.querySelector("input#input2").value); 
  const operator = document.querySelector("input[name='operator']:checked").value; 
/*
  console.log("Number 1: " + number1);
  console.log("Number 2: " + number2);
  console.log("Operator:", operator);
*/ 


  let result;
  if (operator === "add") {
    result = add(number1, number2);
  } else if (operator === "subtract") {
    result = subtract(number1, number2);
  } else if (operator === "multiply") {
    result = multiply(number1, number2);
  } else if (operator === "divide") {
    result = divide(number1, number2);
  }

  document.getElementById("output").innerText = result;
} 

window.addEventListener("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
}); 