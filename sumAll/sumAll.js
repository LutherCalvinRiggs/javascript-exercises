const sumAll = function(min, max) {
    
    let sum = 0;
    let a, b;

    if (min < 0 || max < 0) {
        return "ERROR";
    } else if (typeof min !== "number" || typeof max !== "number") {
        return "ERROR";
    } else {
        if (min < max) {
            a = min;
            b = max;
        } else {
            a = max;
            b = min; 
        }   
    }

    for(let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
