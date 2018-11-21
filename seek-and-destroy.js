/**
 * Removes all elements from an array that are the same value as the arguments.
 * @param {Array} arr An array of elements needing removal.
 * @param {args} The arguments for the elements to be removed.
 * @return {Array} An array with elements removed.
 */

 // My Solution
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments).slice(1);
    return arr.filter(function(val) {
        return !args.includes(val);
    })
}

// Tests
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // should return [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // should return [1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // should return [1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // should return []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); //should return ["hamburger"]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], 
    "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // should return [12, 92, 65]