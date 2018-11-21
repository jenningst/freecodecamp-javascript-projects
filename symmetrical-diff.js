/**
 * Return the symmetric difference of 2 arrays.
 * @param {Array} arr1 First 1-dimensional array.
 * @param {Array} arr2 Second 1-dimensional array.
 * @return {Array} An array of symmetric difference values.
 */

 // My Solution
 function diffArray(arr1, arr2) {
    let newArr = [];
    let arrBig = [...arr1, ...arr2];

    function countInArray(arr, element) {
        return arr.filter(item => item == element).length;
    }

    arrBig.forEach(function(element) {
        if (countInArray(arrBig, element) == 1) {
            newArr.push(element);
        }
    });
    return newArr;
}

// Tests
console.log(diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["pink wool"]
console.log(diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["diorite", "pink wool"]
console.log(diffArray(
    [], 
    ["snuffleupagus", "cookie monster", "elmo"])); // should return ["snuffleupagus", "cookie monster", "elmo"]
console.log(diffArray(
    [1, "calf", 3, "piglet"], 
    [1, "calf", 3, 4])); // should return ["piglet", 4]

