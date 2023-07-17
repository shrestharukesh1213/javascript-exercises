const repeatString = function (str, repeat) {
  let str1 = "";
  if (repeat < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < repeat; i++) {
      str1 = str1 + str;
    }
    return str1;
  }
};

// Do not edit below this line
module.exports = repeatString;
