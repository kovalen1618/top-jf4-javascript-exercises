const palindromes = function (string) {
    const split = string.toUpperCase().split('');
    const punctuation = split.pop();

    console.log('Split: ' + split)

    let reverse = split.reverse();
    reverse.push(punctuation)
    reverse = reverse.join('');
    console.log('Reverse: ' + reverse)

    return reverse === string.toUpperCase();
};

console.log(palindromes('Racecar!'));

// Do not edit below this line
module.exports = palindromes;
