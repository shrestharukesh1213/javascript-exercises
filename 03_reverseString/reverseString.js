const reverseString = function (str) {
  let str1 = "";
  let i = str.length;
  for (i; i >= 0; i--) {
    str1 += str.charAt(i);
  }
  return str1;
};

// Do not edit below this line
module.exports = reverseString;
