/**
 * Transforms the array elements into orbital periods.
 * @param {Array} arr Array containing objects to convert.
 * @return {arr} The converted array.
 */

// My Solution
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    function convertToOrbital (alt) {
        return Math.round((2 * Math.PI) * Math.sqrt(Math.pow(alt+earthRadius, 3)/GM), 0);
    }

    let objects = [];
    for (let obj of arr) {
        let newObj = { name: obj['name'], orbitalPeriod: convertToOrbital(obj['avgAlt'])};
        objects.push(newObj);
    }
    return objects;
}

// Tests
console.log(orbitalPeriod([
    { name: "sputnik", avgAlt: 35873.5553 }])); 
    // should return [{ name: "sputnik", orbitalPeriod: 86400 }].
console.log(orbitalPeriod([
    { name: "iss", avgAlt: 413.6 }, 
    { name: "hubble", avgAlt: 556.7 }, 
    { name: "moon", avgAlt: 378632.553 }]));
    // should return [{ name: "iss", orbitalPeriod: 5557 }, 
    //  { name: "hubble", orbitalPeriod: 5734 }, 
    //  { name: "moon", orbitalPeriod: 2377399 }].