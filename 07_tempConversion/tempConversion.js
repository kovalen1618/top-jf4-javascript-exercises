// Custom function that allows for rounding to a specified decimal place
const round = function(value, precision) {
  // Initializes multiplier with 10 to the power of the precision argument, or 0 which will always equal 1
  let multiplier = Math.pow(10, precision || 0);
  // Does the roundabout calculation of finding the decimal place
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(fahrenHeitTemp) {
  return round(((fahrenHeitTemp - 32) * (5/9)), 1);
};

const convertToFahrenheit = function(celsiusTemp) {
  return round(((celsiusTemp * (9/5)) + 32), 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
