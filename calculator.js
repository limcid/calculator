var enteredNum1 = "", enteredNum2 = "", entNumBuffer = "";
var calculated = false;
const Operators = ["clear", "divide", "multiply", "subtract", "add"];
var currOperator = "";

const calcButtons = document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
    console.log(item.id + ' Button clicked!');

    switch (item.id) {
      case "memClear":
        break;
      case "changeSign":
        break;
      case "blank":
        break;
      case "clear":
        clear();
        break;
      case "allClear":
        document.getElementById('lcd').innerHTML = "";
        entNumBuffer = ""
        break;
      case "memRecall":
        break;
      case "7":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "7";
        entNumBuffer += 7;
        break;
      case "4":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "4";
        entNumBuffer += 4;
        break;
      case "1":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "1";
        entNumBuffer += 1;
        break;
      case "0":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "0";
        entNumBuffer += 0;
        break;
      case "memSubtract":
        //document.getElementById('lcd').innerHTML += "1";
        //entNumBuffer += 1;
        break;
      case "8":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "8";
        entNumBuffer += 8;
        break;
      case "5":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "5";
        entNumBuffer += 5;
        break;
      case "2":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "2";
        entNumBuffer += 2;
        break;
      case "decimal":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += ".";
        entNumBuffer += ".";
        break;
      case "memAdd":
        //document.getElementById('lcd').innerHTML += "1";
        //entNumBuffer += 1;
        break;
      case "9":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "9";
        entNumBuffer += 9;
        break;
      case "6":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "6";
        entNumBuffer += 6;
        break;
      case "3":
        if (calculated) { clear() };
        document.getElementById('lcd').innerHTML += "3";
        entNumBuffer += 3;
        break;
      case "equals":
        console.log("Current enteredNum2 = " + enteredNum2);
        console.log("enteredNum2.length BEFORE being assigned = " + enteredNum2.length);
        console.log("entNumBuffer = " + entNumBuffer);
        if (enteredNum2.length == 0) {
          enteredNum2 = entNumBuffer;
        }
        console.log("enteredNum1 = " + enteredNum1);
        console.log("enteredNum2 = " + enteredNum2);
        console.log("--------------")

        if (enteredNum1.length > 0 && enteredNum2.length > 0) {
          console.log("READY to perform operation!");
          var eq = operate(enteredNum1, enteredNum2, currOperator);
          document.getElementById("lcd").innerHTML = eq;
          console.log("Back from performing operation, and the result equals: " + eq);
          calculated = true;
        // clear();
        }

        break;
      case "divide":
        console.log("--- Divide Key:");
        console.log("Current enteredNum1 = " + enteredNum1);
        console.log("enteredNum1.length BEFORE being assigned = " + enteredNum1.length);
        
        if (enteredNum1.length == 0) {
          enteredNum1 = entNumBuffer;
        }

        entNumBuffer = "";
        document.getElementById('lcd').innerHTML += " &#247 ";
        currOperator = "divide";

        console.log("enteredNum1 = " + enteredNum1);
        console.log("enteredNum2 = " + enteredNum2);
        console.log("--------------")
        break;
      case "multiply":
        console.log("--- Multiply Key:");
        console.log("Current enteredNum1 = " + enteredNum1);
        console.log("enteredNum1.length BEFORE being assigned = " + enteredNum1.length);
        
        if (enteredNum1.length == 0) {
          enteredNum1 = entNumBuffer;
        }

        entNumBuffer = "";
        document.getElementById('lcd').innerHTML += " x ";
        currOperator = "multiply";

        console.log("enteredNum1 = " + enteredNum1);
        console.log("enteredNum2 = " + enteredNum2);
        console.log("--------------")
        break;
      case "subtract":
        console.log("--- Subtract Key:");
        console.log("Current enteredNum1 = " + enteredNum1);
        console.log("enteredNum1.length BEFORE being assigned = " + enteredNum1.length);
        
        if (enteredNum1.length == 0) {
          enteredNum1 = entNumBuffer;
        }

        entNumBuffer = "";
        document.getElementById('lcd').innerHTML += " - ";
        currOperator = "subtract";

        console.log("enteredNum1 = " + enteredNum1);
        console.log("enteredNum2 = " + enteredNum2);
        console.log("--------------")
        break;
      case "1":
        document.getElementById('lcd').innerHTML += "1";
        entNumBuffer += 1;
        break;
      case "plus":
        console.log("--- Plus Key:");
        console.log("Current enteredNum1 = " + enteredNum1);
        console.log("enteredNum1.length BEFORE being assigned = " + enteredNum1.length);
        
        if (enteredNum1.length == 0) {
          enteredNum1 = entNumBuffer;
        }

        entNumBuffer = "";
        document.getElementById('lcd').innerHTML += " + ";
        currOperator = "add";

        console.log("enteredNum1 = " + enteredNum1);
        console.log("enteredNum2 = " + enteredNum2);
        console.log("--------------")
        break;

      default:
        break;
    }

  });
});



function operate(num1, num2, operator) {
  console.log("Hello, from the operate function!");
  console.log("The passed operator param = " + operator);
  switch (operator) {
    case "add":
      console.log("Hello, from within the operator's add case.");
      console.log("num1 value = " + num1);
      console.log("num2 value = " + num2);
      return add(num1, num2);
      break;
    case "subtract":
      console.log("Hello, from within the operator's subtract case.");
      console.log("num1 value = " + num1);
      console.log("num2 value = " + num2);
      return subtract(num1, num2);
      break;
    case "multiply":
      console.log("Hello, from within the operator's multiply case.");
      console.log("num1 value = " + num1);
      console.log("num2 value = " + num2);
      return multiply(num1, num2);
      break;
    case "divide":
      console.log("Hello, from within the operator's divide case.");
      console.log("num1 value = " + num1);
      console.log("num2 value = " + num2);
      return divide(num1, num2);
      break;

  
    default:
      break;
  }
}

function clear() {
  enteredNum1 = "";
  enteredNum2 = "";
  entNumBuffer = "";
  currOperator = "";
  document.getElementById('lcd').innerHTML = "";
  calculated = false;
}

function add(num1, num2) {
  console.log("Hello, from within the add function.");
  console.log("num1 value = " + num1);
  console.log("num2 value = " + num2);
  console.log("The addition of num1 and num2 is " + (parseInt(num1) + parseInt(num2)));
	return parseInt(num1) + parseInt(num2);
};

function subtract(num1, num2) {
  console.log("Hello, from within the subtract function.");
  console.log("num1 value = " + num1);
  console.log("num2 value = " + num2);
  console.log("The subtraction of num2 from num1 is " + (parseInt(num1) - parseInt(num2)));
	return parseInt(num1) - parseInt(num2);
};

// const sum = function(array) {
// 	let numbers = Array.from(array)
//   var totalSum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     totalSum += numbers[i];
//   }
//   return totalSum;
// };

function multiply(num1, num2) {
  console.log("Hello, from within the multiply function.");
  console.log("num1 value = " + num1);
  console.log("num2 value = " + num2);
  console.log("The multiplication of num2 by num1 is " + (parseInt(num1) * parseInt(num2)));
	return parseInt(num1) * parseInt(num2);
};

function divide(num1, num2) {
  console.log("Hello, from within the divide function.");
  console.log("num1 value = " + num1);
  console.log("num2 value = " + num2);
  console.log("Dividing num1 by num2 is " + (parseInt(num1) / parseInt(num2)));
	return parseInt(num1) / parseInt(num2);
};


// const multiply = function(array) {
// 	let numbers = Array.from(array)
//   var finalProduct = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     finalProduct *= numbers[i];
//   }
//   return finalProduct;

// };

const power = function(num, power) {
	var finalResult = 1;
  for (i = 0; i < power; i++) {
    finalResult = finalResult * num;
  }
  return finalResult;
};

const factorial = function(num) {
	var factorResult = 1;
  if (num === 0 || num === 1) {return 1;};

  for (let i = 1; i <= num; i++) {
    factorResult = factorResult * i;
  }
  return factorResult;

};
