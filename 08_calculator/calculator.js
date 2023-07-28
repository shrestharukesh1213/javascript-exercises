const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  const total = arr.reduce((currentTotal, item) => {
    return item + currentTotal;
  }, 0);
  return total;
};

const multiply = function (...num) {
  const total = num.reduce((currentTotal, item) => {
    return item * currentTotal;
  }, 1);
  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let fact = 1;
  for (i = num; i > 0; i--) {
    fact *= num--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
