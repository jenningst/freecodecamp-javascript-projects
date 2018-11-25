/**
 * Returns an array of union values from two or more arrays.
 * @param {Array} arr The arrays on which to check for union.
 * @return {arr} The final array with all unique values from the arg arrays.
 */

// My Solution
function uniteUnique(arr) {
    let args = Array.prototype.slice.call(arguments);
    let masterList = [];

    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            masterList.push(args[i][j]);
        }
    }
    return [...new Set(masterList)];
}

// Tests
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].