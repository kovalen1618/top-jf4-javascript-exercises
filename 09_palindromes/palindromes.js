const palindromes = function (string) {
    let stringHolder = string;
    const punctuation = ['!', '.', '?'];
    const puncExists = stringHolder.split('').some(punc => punctuation.includes(punc));

    stringHolder = stringHolder.split('');
    if (puncExists) stringHolder.pop();
    stringHolder = stringHolder.join('').toUpperCase();
    // With regex replace
    stringHolder = stringHolder.replace(/,/g, "").replace(/\s/g, "");

    let reverse = stringHolder.split('').reverse();
    reverse = reverse.join('').toUpperCase();
    // With regex replace
    reverse = reverse.replace(/,/g, "").replace(/\s/g, "");

    // console.log(reverse)
    // console.log(stringHolder)

    return reverse === stringHolder;
};

// console.log(palindromes('Racecar!'));
// console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
