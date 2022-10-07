const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(x, y) {
	let total = x;
  for (let i = 1; i < y; i++) {
    total *= x;
  }
  return total;
};

const factorial = function(x) {
  return x <= 1 ? 1 : x * factorial(x - 1);
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
