/**
 * Remove each element of an array until the function argument returns true.
 * @param {Array} arr An array of numbers to filter.
 * @param {Function} func A function to evaluate on each number in the array.
 * @return {Array} The filtered array.
 */

// My Solution
function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        let tempArr = [arr[i]];        
        if (tempArr.filter(func).length == 1) {
            return arr.slice(i);
        }
    }
    return [];
}

// Tests
console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })); // should return [3, 4].
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; })); // should return [1, 0, 1].
console.log(dropElements([1, 2, 3], function (n) { return n > 0; })); // should return [1, 2, 3].
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; })); // should return [].
console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; })); // should return [7, 4].
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })); // should return [3, 9, 2].