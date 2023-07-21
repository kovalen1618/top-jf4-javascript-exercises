const sumAll = function(numOne, numTwo) {
    // Initialize how many integers there are
    let numberOfIntegers = 0;

    if (numOne !== Number(numOne) || numTwo !== Number(numTwo)) {
        // Returns ERROR if argument is not a Number type
        return 'ERROR';
    } else {
        // Math.abs turns negative values to positive
        numberOfIntegers = Math.abs(numOne - numTwo) + 1;
    }

    // Sum of Arithmetic Sequence Formula
    sum = (numberOfIntegers * (numOne + numTwo)) / 2;

    // Returns ERROR if value is 0 or a negative value
    return sum > 0 ? sum : 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
