/**
 * Returns an array of objects that have matching name/value pairs 
 * @param {Array} collection An array of objects.
 * @param {Array} source An array of objects.
 * @return {Array} The arguments for the elements to be removed.
 */

 // My Solution
function whatIsInAName(collection, source) {
    let sourceNames = Object.keys(source); // keys of the source arg

    return collection.filter(function (item) { // filter the collection
        for (let i = 0; i < sourceNames.length; i++) {
            if (!item.hasOwnProperty(sourceNames[i])) {
                return false;
            } else {
                if (item[sourceNames[i]] !== source[sourceNames[i]]) {
                    return false;
                }
            }
        }
        return true;
    })
}

// Tests
console.log(whatIsInAName([
                            { first: "Romeo", last: "Montague" }, 
                            { first: "Mercutio", last: null }, 
                            { first: "Tybalt", last: "Capulet" }
                          ], 
                            { last: "Capulet" })); 
    // should return [{ first: "Tybalt", last: "Capulet" }]

console.log(whatIsInAName([
                            { "apple": 1, "bat": 2 }, 
                            { "bat": 2 }, 
                            { "apple": 1, "bat": 2, "cookie": 4 }
                          ], 
                            { "apple": 1, "bat": 2 })); 
     // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

console.log(whatIsInAName([
                            {"a": 1, "b": 2, "c": 3}
                          ], 
                            {"a": 1, "b": 9999, "c": 3}));
    // should return []

console.log(whatIsInAName([
                            { "apple": 1, "bat": 2 }, 
                            { "apple": 1 }, 
                            { "apple": 1, "bat": 2, "cookie": 2 }
                          ], 
                            { "apple": 1, "cookie": 2 }));
    // should return [{ "apple": 1, "bat": 2, "cookie": 2 }]