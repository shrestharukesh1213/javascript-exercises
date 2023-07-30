const fibonacci = function (numIndex) {
  let num1 = 0;
  let num2 = 1;
  if (numIndex < 0) return "OOPS";
  for (let i = 2; i <= numIndex; i++) {
    let fib = num1 + num2;
    num1 = num2;
    num2 = fib;
  }
  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
