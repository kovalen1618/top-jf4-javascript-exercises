const fibonacci = function(term) {
    if (term <= 0) {
        return "OOPS";
    } else {
        return (
            Math.round((Math.pow((1 + Math.sqrt(5)), term) - (Math.pow(1 - Math.sqrt(5)), term)) / (Math.pow(2, term) * Math.sqrt(5)))
        );
    }
};

console.log(fibonacci(-20))

// Do not edit below this line
module.exports = fibonacci;
