var enteredNum1, enteredNum2;
const Operators = ["clear", "divide", "multiply", "subtract", "add"];

const calcButtons = document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
    console.log(item.id + ' Button clicked!');

    switch (item.id) {
      case "memClear":
        alert("You pressed the Clear Memory button");
        break;
      case "changeSign":
        alert("You pressed the Sign Change button");
        break;
      case "blank":
        alert("You pressed the Blank button");
        break;
      case "clear":
        document.getElementById('lcd').innerHTML = "";
        break;
      case "allClear":
        document.getElementById('lcd').innerHTML = "";
        break;
      case "memRecall":
        alert("You pressed the Memory Recall button");
        break;
      case "7":
        document.getElementById('lcd').innerHTML += "7";
        break;

      default:
        break;
    }

  });
});



function operate(num1, num2, operator) {

}

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let numbers = Array.from(array)
  var totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
};

const multiply = function(array) {
	let numbers = Array.from(array)
  var finalProduct = 1;
  for (let i = 0; i < numbers.length; i++) {
    finalProduct *= numbers[i];
  }
  return finalProduct;

};

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
