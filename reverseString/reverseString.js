const reverseString = function(word) {
    
    let i = 0, newString = '';
    
    let stringArray = word.split('');
    while (i < word.length) {
        let x = stringArray.pop();
        newString += x;

        i++;
    }
    
    return newString;
}

module.exports = reverseString


// also acceptable
/* 

    return word.split('').reverse().join('');

*/