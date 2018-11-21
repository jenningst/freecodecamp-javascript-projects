/**
 * Sum all numbers between two values (inclusive).
 * @param {Array} arr A two-element array of numbers.
 * @return {number} The result of summing all numbers between the arr elements, inclusive.
 */

 // My Solution
function sumAll(arr) {
    let total = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
}

// Tests
console.log(sumAll([1, 4])); // should return 10
console.log(sumAll([4, 1])); // should return 10
console.log(sumAll([5, 10])); // should return 45
console.log(sumAll([10, 5])); // should return 45