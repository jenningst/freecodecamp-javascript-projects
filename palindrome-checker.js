/**
 * Determines if a given string is a palindrome.
 * @param {str} str The string to check for "palindrome-ness".
 * @return {bool} Return true if string is palindrome, else false.
 */

 // My Solution
function palindrome(str) {

    let firstHalf = "";
    let secondHalf = "";
    let newStr = str.replace(/[\W\s]/gi, '').replace('_', '').toLowerCase();

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    if (newStr.length % 2 == 0) { // even number of characters
        firstHalf = newStr.slice(0, (newStr.length / 2));
        secondHalf = reverseString(newStr.slice(newStr.length / 2, newStr.legnth));
    } else { // odd number of characters
        firstHalf = newStr.slice(0, Math.floor(newStr.length / 2));
        secondHalf = reverseString(newStr.slice(Math.ceil(newStr.length / 2)));
    }

    return firstHalf !== secondHalf ? false : true;
}

// Tests
console.log(palindrome("eye")); // should return a boolean.
console.log(palindrome("eye")); // should return true.
console.log(palindrome("_eye")); // should return true.
console.log(palindrome("race car")); // should return true.
console.log(palindrome("not a palindrome")); // should return false.
console.log(palindrome("A man, a plan, a canal. Panama")); // should return true.
console.log(palindrome("never odd or even")); // should return true.
console.log(palindrome("nope")); // should return false.
console.log(palindrome("almostomla")); // should return false.
console.log(palindrome("My age is 0, 0 si ega ym.")); // should return true.
console.log(palindrome("1 eye for of 1 eye.")); // should return false.
console.log(palindrome("0_0 (: /-\ :) 0-0")); // should return true.
console.log(palindrome("five|\_/|four")); // should return false.