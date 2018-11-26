/**
 * Returns the smallest common multiple of a range of numbers.
 * @param {arr} arr Array containing the floor and ceiling numbers.
 * @return {int} The smallest common multiple.
 */

// My Solution
function smallestCommons(arr) {
    let args = [...arr].sort();
    
    let range = [];
    for (let i = args[0]; i <= args[1]; i++) {
        range.push(i);  
    }
    return;
}

// Tests
console.log(smallestCommons([1, 5])); // should return a number.
console.log(smallestCommons([1, 5])); // should return 60.
// console.log(smallestCommons([5, 1])); // should return 60.
// console.log(smallestCommons([2, 10])); // should return 2520.
// console.log(smallestCommons([1, 13])); // should return 360360.
// console.log(smallestCommons([23, 18])); // should return 6056820.