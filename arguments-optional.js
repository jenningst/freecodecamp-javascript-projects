/**
 * Sum two arguments together. If only 1 argument is provided, return a function that accepts one 
 * argument and return the sum. If no valid arguments are provided, the return undefined.
 * @return {int, function} Returns the sum of 2 arguments, a function, or undefined.
 */

// My Solution
function addTogether() {
    let args = new Array(arguments.length);
    for (let i = 0; i < args.length; i++) {
        args[i] = arguments[i];
    }
    
    if (arguments.length == 1){   
        if (Number.isInteger(arguments[0])) {
            let c = arguments[0];
            return function addTo(x) {
                if (Number.isInteger(x)) {
                    return x + c;
                }
            };
        } else {
            return undefined;
        }
    } else {
        return (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) ? arguments[0] + arguments[1] : undefined;
    }
}

// Tests
console.log(addTogether(2, 3)); // should return 5.
console.log(addTogether(2)(3)); // should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")); // should return undefined.
console.log(addTogether(2, "3")); // should return undefined.
console.log(addTogether(2)([3])); // should return undefined.