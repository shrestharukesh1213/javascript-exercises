const palindromes = function (string) {
  let replacedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return replacedString.split("").reverse().join("") === replacedString
    ? true
    : false;
};

// Do not edit below this line
module.exports = palindromes;
