const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(numArray) {
	let sum = 0;
  
  numArray.forEach(num => {
    sum += num;
  });

  return sum;
};

const multiply = function(...nums) {
  let numArray = Array(...nums);
  let multiple = 1;
  
  numArray.forEach(num => multiple *= num);
  
  return multiple;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
  let factorialValue = 1;

  while (num > 0) {
    factorialValue = factorialValue * (num * (num > 1 ? num - 1 : 1));
    
    num -= 2;
  }

  return factorialValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};