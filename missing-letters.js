/**
 * Return the letter missing from a string of text.
 * @param {str} str String to check for missing letters
 * @return {str} The missing letter.
 */

// My Solution
function fearNotLetter(str) {
    const firstLetterCode = str.charCodeAt(str[0]); // char code at first letter
    let letterChecker = firstLetterCode;
    
    for (let i = 0; i < str.length; i++) {  
        if (str.charCodeAt(i) !== letterChecker) {
            return String.fromCharCode(letterChecker);
        }
        letterChecker++;              
    }
    return undefined;
}

// Tests
console.log(fearNotLetter("abce")); // should return "d".
console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
console.log(fearNotLetter("stvwx")); // should return "u".
console.log(fearNotLetter("bcdf")); // should return "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.