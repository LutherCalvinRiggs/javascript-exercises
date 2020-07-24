// The easiest way to get an array of all of the arguments that are passed to a function is using the spread operator.
const removeFromArray = function(...args) {
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    let array = args[0];
    // create a new empty array
    let newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
        // push every element into the new array UNLESS it is included in the function arguments so we create a new array with every item, except those that should be removed
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    // and return that array
    return newArray;

};

module.exports = removeFromArray
