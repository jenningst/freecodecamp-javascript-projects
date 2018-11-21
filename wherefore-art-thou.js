/**
 * Returns an array of objects that have matching name/value pairs 
 * @param {Array} collection An array of objects.
 * @param {Array} source An array of objects.
 * @return {Array} The arguments for the elements to be removed.
 */

 // My Solution
function whatIsInAName(collection, source) {
    let names = Object.keys(source);

    return collection.filter(function(item) {
        for (let i = 0; i < names.length; i++) {
            if(!item.hasOwnProperty(names[i] || item[names[i]] !== source[names[i]])) {
                return false;
            }
        }
        return true;
    })
}

// Tests
// console.log(whatIsInAName([
//                             { first: "Romeo", last: "Montague" }, 
//                             { first: "Mercutio", last: null }, 
//                             { first: "Tybalt", last: "Capulet" }
//                           ], 
//                             { last: "Capulet" })); 
    // should return [{ first: "Tybalt", last: "Capulet" }]

console.log(whatIsInAName([
                            { "apple": 1, "bat": 2 }, 
                            { "bat": 2 }, 
                            { "apple": 1, "bat": 2, "cookie": 4 }
                          ], 
                            { "apple": 1, "bat": 2 })); 
//     // [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

// console.log(whatIsInAName([
//                             {"a": 1, "b": 2, "c": 3}
//                           ], 
//                             {"a": 1, "b": 9999, "c": 3}));
//     // []