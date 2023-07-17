const sumAll = function (firstIndex, lastIndex) {
  let sum = 0;
  if (
    Number.isInteger(firstIndex) &&
    Number.isInteger(lastIndex) &&
    lastIndex > 0 &&
    firstIndex > 0
  ) {
    if (firstIndex < lastIndex) {
      for (i = firstIndex; i <= lastIndex; i++) {
        sum += i;
      }
    } else if (firstIndex > lastIndex) {
      for (i = firstIndex; i >= lastIndex; i--) {
        sum += i;
      }
    }
    return sum;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
