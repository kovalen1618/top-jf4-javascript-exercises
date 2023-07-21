// Attempted originally to use ...arguments as the parameter name, but that is a special variable
const removeFromArray = function(array, ...args) { // Using a rest parameter
    // Loop through args to check on per arg basis
    for (const arg in args) {
        // Loop through array to check each element in array
        for (const element in array) {
            // If the array element at iteration index is the same as arg iteration element, then remove from array
            if (array[element] === args[arg]) {
                // Removes the element
                array.splice(array.indexOf(array[element]), 1);
            };
        };
    };

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
