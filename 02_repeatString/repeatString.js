const repeatString = function(string, num) {
    let finalString = '';

    if (num === 0) {
        finalString = '';
    } else if (num > 0) {
        let i = 0;
        while (i < num) {
            finalString = finalString + string;
            // string = string + string;
            i++;
        }
    } else if (num < 0) {
        finalString = 'ERROR';
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
