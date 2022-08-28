//TODO Make font size in "lcd" smaller when length of entered numbers gets too long for proper display.
var enteredNum1 = "", enteredNum2 = "", entNumBuffer = "";
var enteredNum1_CSS = `background: #FFEB6E; color: black; padding: 3px; border-radius: .5em; border: 1px solid blue`;
var enteredNum2_CSS = `background: #FFD433; color: black; padding: 3px; border-radius: .5em; border: 1px solid blue`;
var genInfo_CSS = `background: black; color: yellow; padding: 3px; border-radius: .5em; border: 1px solid orange`;
// var operatorKey = `background: green; color: black; padding: 3px; border-radius: .5em; border: 1px solid black`;

var calculated = false;
var currOperator = "";
var calcMemory = 0;
var lcdContents = "";

const calcButtons = document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
    console.log("%c" + item.id + " Button clicked!",
      `background: #E0E0E0;
      color: black;
      padding: 3px;
      border-radius: .5em;
      border: 1px solid blue`
    );
    
    switch (item.id) {
      case "memClear":
        calcMemory = 0;
        console.log("calcMemory: " + calcMemory + " calcMemory cleared.")
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
        if (enteredNum1 == 0) {
          enteredNum1 = calcMemory
        } else {
          enteredNum2 = calcMemory;
        }
        document.getElementById('lcd').innerHTML += calcMemory;
        console.log("calcMemory: Data recalled from memory! --> " + calcMemory);
        console.log("enteredNum1: " + enteredNum1 + " , " + "enteredNum2: " + enteredNum2);
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
        lcdContents = document.getElementById('lcd').innerHTML;
        if (lcdContents > "") {
          calcMemory -= parseInt(lcdContents);
          //update memory indicator
          console.log("calcMemory: Data subtracted from memory! --> " + calcMemory);
        };
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
        lcdContents = document.getElementById('lcd').innerHTML;
        if (lcdContents > "") {
          calcMemory += parseInt(lcdContents);
          console.log("calcMemory: Data added to memory! --> " + calcMemory);
        };
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
        performEquals(enteredNum1, enteredNum2, entNumBuffer);
        break;
      case "divide":
        console.log("--- Divide Key:");
        
        if (enteredNum1.length == 0) {
          enteredNum1 = entNumBuffer;
        }

        if (currOperator.length > 0) { //then we are currently chaining operations
          performEquals(enteredNum1, enteredNum2, entNumBuffer);
          enteredNum1 = document.getElementById("lcd").innerHTML;
          calculated = false; 
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
        
        if (enteredNum1.length == 0) {
          enteredNum1 = entNumBuffer;
        }

        if (currOperator.length > 0) { //then we are currently chaining operations
          performEquals(enteredNum1, enteredNum2, entNumBuffer);
          enteredNum1 = document.getElementById("lcd").innerHTML;
          calculated = false; //questionable
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
        
        if (enteredNum1.length == 0) {
          enteredNum1 = entNumBuffer;
        }

        if (currOperator.length > 0) { //then we are currently chaining operations
          performEquals(enteredNum1, enteredNum2, entNumBuffer);
          enteredNum1 = document.getElementById("lcd").innerHTML;
          calculated = false;
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
          
        if (enteredNum1.length == 0) {
          enteredNum1 = entNumBuffer;
        }

        if (enteredNum1.length == 0) {
          return;
        }
      
        if (currOperator.length > 0) { //then we are currently chaining operations
          performEquals(enteredNum1, enteredNum2, entNumBuffer);
          enteredNum1 = document.getElementById("lcd").innerHTML;
          calculated = false;
        }
        
        entNumBuffer = "";
        document.getElementById('lcd').innerHTML += " + ";
        currOperator = "add";
        console.log("%c enteredNum1 = " + enteredNum1, enteredNum1_CSS); 
        console.log("%c enteredNum2 = " + enteredNum2, enteredNum2_CSS);
        console.log("--------------")
        break;

      default:
        break;
    }

  });
});

function performEquals(num1, num2, num_buffer) {
  
  if (enteredNum1.length == 0 && enteredNum2.length == 0) {
    return;
  }
    
  console.log("%centeredNum1: " + enteredNum1 + " enteredNum2: " + enteredNum2, genInfo_CSS);
  
  console.log("--- performEquals function:")
  if (enteredNum2.length == 0) {  // TODO enteredNum2 needs to be assigned before the equal key is pressed, not within performEquals function.
    enteredNum2 = entNumBuffer;
    console.log("%c enteredNum2 = " + enteredNum2, enteredNum2_CSS);
  }

  if (enteredNum1.length > 0 && enteredNum2.length > 0) {
    var eq = operate(enteredNum1, enteredNum2, currOperator);
    if (eq == Math.floor(eq)) {
      document.getElementById("lcd").innerHTML = eq;
    } else {
      document.getElementById("lcd").innerHTML = parseFloat(eq.toFixed(3));
    }
    calculated = true;
  }

  enteredNum1 = "";
  enteredNum2 = "";
  entNumBuffer = "";
  console.log("%cEnteredNums have been cleared.", "color: blue; font-style: italic; font-weight: bold");
  console.log("%centeredNum1 = " + enteredNum1, enteredNum1_CSS);
  console.log("%centeredNum2 = " + enteredNum2, enteredNum2_CSS);
  console.log("%centNumBuffer = " + entNumBuffer, enteredNum1_CSS);
  console.log("--------------")

}

function operate(num1, num2, operator) {
  console.log("%cHello, from the operate function!", genInfo_CSS);
  console.log("%cThe passed operator param = " + operator, genInfo_CSS);
  switch (operator) {
    case "add":
      console.log("%cHello, from within the operator's add case.", genInfo_CSS);
      console.log("num1 value = " + num1);
      console.log("num2 value = " + num2);
      return add(num1, num2);
      break;
    case "subtract":
      console.log("%cHello, from within the operator's subtract case.", genInfo_CSS);
      console.log("num1 value = " + num1);
      console.log("num2 value = " + num2);
      return subtract(num1, num2);
      break;
    case "multiply":
      console.log("%cHello, from within the operator's multiply case.", genInfo_CSS);
      console.log("num1 value = " + num1);
      console.log("num2 value = " + num2);
      return multiply(num1, num2);
      break;
    case "divide":
      console.log("%cHello, from within the operator's divide case.", genInfo_CSS);
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
  console.log("%cHello, from within the add function.", genInfo_CSS);
  // console.log("num1 value = " + num1);
  // console.log("num2 value = " + num2);
  console.log("%cThe addition of num1 and num2 is " + (parseFloat(num1) + parseFloat(num2)), genInfo_CSS);
	return parseFloat(num1) + parseFloat(num2);
};

function subtract(num1, num2) {
  console.log("Hello, from within the subtract function.");
  console.log("num1 value = " + num1);
  console.log("num2 value = " + num2);
  console.log("%cThe subtraction of num2 from num1 is " + (parseFloat(num1) - parseFloat(num2)), genInfo_CSS);
	return (parseFloat(num1) - parseFloat(num2));
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
  console.log("The multiplication of num1 by num2 is " + (parseFloat(num1) * parseFloat(num2)));
	return (parseFloat(num1) * parseFloat(num2));
};

function divide(num1, num2) {
  console.log("Hello, from within the divide function.");
  console.log("num1 value = " + num1);
  console.log("num2 value = " + num2);
  console.log("Dividing num1 by num2 is " + (parseFloat(num1) / parseFloat(num2)));
	return (parseFloat(num1) / parseFloat(num2));
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
