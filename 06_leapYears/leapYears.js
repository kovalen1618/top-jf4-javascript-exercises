const leapYears = function(year) {
    // Returns true if is a leap year divisible by 400 (i.e. 1600, 2000, etc.)
    if (year % 400 === 0) {
        return true;
    }

    // Returns true if its a leap year that's also not a century year like the one above
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }

    // Returns false be default as that means its not a leap year
    return false;
};

// Do not edit below this line
module.exports = leapYears;
