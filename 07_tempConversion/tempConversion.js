const convertToCelsius = function (tempInFahrenheit) {
  let celsiusTemp = (tempInFahrenheit - 32) * (5 / 9);
  return Number(celsiusTemp.toFixed(1));
};

const convertToFahrenheit = function (tempInCelsius) {
  let fahrenheitTemp = tempInCelsius * (9 / 5) + 32;
  return Number(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
