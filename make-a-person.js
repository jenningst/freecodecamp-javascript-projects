/**
 * Creates an object Person.
 */

// My Solution
var Person = function (firstAndLast) {
    
    let first = firstAndLast.split(' ')[0];
    let last = firstAndLast.split(' ')[1];
    let full = first.concat(' ', last)

    this.getFirstName = function() {
        return first;
    }
    this.getLastName = function () {
        return last;
    }
    this.getFullName = function () {
        return full;
    }
    this.setFirstName = function (fName) {
        first = fName;
        last = last;
        full = first.concat(' ', last) 
    }
    this.setLastName = function (lName) {
        first = first;
        last = lName;
        full = first.concat(' ', last) 
    }
    this.setFullName = function (fullName) {
        first = fullName.split(' ')[0];
        last = fullName.split(' ')[1];
        full = first.concat(' ', last);
    }
};

// Tests
var bob = new Person('Bob Ross');

console.log(Object.keys(bob).length); // // should return 6.
console.log(bob instanceof Person); // should return true.
console.log(bob.firstName); // should return undefined.
console.log(bob.lastName); // should return undefined.
console.log(bob.getFirstName()); // should return "Bob".
console.log(bob.getLastName()); // should return "Ross".
console.log(bob.getFullName()); // should return "Ross".

bob.setFirstName('Haskell');
console.log(bob.getFullName()); // should return "Haskell Ross" after bob.setFirstName("Haskell").

bob.setLastName('Curry');
console.log(bob.getFullName()); // should return "Haskell Curry" after bob.setLastName("Curry").

bob.setFullName('Arthur Bryant')
console.log(bob.getFullName()); // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName()); // should return "Haskell" after bob.setFullName("Haskell Curry").
console.log(bob.getLastName()); // should return "Curry" after bob.setFullName("Haskell Curry").