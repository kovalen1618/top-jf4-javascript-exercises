const reverseString = function(string) {
    // reverse() is an array method, so the string must be split first and then rejoined
    let reversedString = string.split('').reverse().join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
