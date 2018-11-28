/**
 * Determines whether a phone number is a valid US format.
 * @param {str} str The telephone number to be validated.
 * @return {bool} True if valid, False if invalid.
 */

// My Solution
function telephoneCheck(str) {
    let cleanStr = str.replace(/\s/g, ''); // clean whitespace

    // check for invalid characters
    if (/[^0-9-\(\)]/.test(cleanStr)) {
        return false;
    }

    // initial checks for 10 and 11 digit formats
    if (/(\D*\d){11}/.test(cleanStr)) { // test for length 11
        if (!/^1/.test(cleanStr)) {
            return false;
        }
    } else {
        if (!/(\D*\d){10}/.test(cleanStr)) { // test for length 10
            return false;
        }
    }

    // check for parenthesis placement (if included)
    if (cleanStr.includes('(') || cleanStr.includes(')')) {
        if (!/^1?\(\d{3}\)\d{3}/.test(cleanStr)) {
            return false;
        }
    }
    return true; 
}

// Tests
console.log(telephoneCheck("555-555-5555")); // should return a boolean.
console.log(telephoneCheck("1 555-555-5555")); // should return true.
console.log(telephoneCheck("1 (555) 555-5555")); // should return true.
console.log(telephoneCheck("5555555555")); // should return true.
console.log(telephoneCheck("555-555-5555")); // should return true.
console.log(telephoneCheck("(555)555-5555")); // should return true.
console.log(telephoneCheck("1(555)555-5555")); // should return true.
console.log(telephoneCheck("555-5555")); // should return false.
console.log(telephoneCheck("5555555")); // should return false.
console.log(telephoneCheck("1 555)555-5555")); // should return false. 
console.log(telephoneCheck("1 555 555 5555")); // should return true.
console.log(telephoneCheck("1 456 789 4444")); // should return true.
console.log(telephoneCheck("123**&!!asdf#")); // should return false.
console.log(telephoneCheck("55555555")); // should return false.
console.log(telephoneCheck("(6054756961)")); // should return false
console.log(telephoneCheck("2 (757) 622-7382")); // should return false.
console.log(telephoneCheck("0 (757) 622-7382")); // should return false.
console.log(telephoneCheck("-1 (757) 622-7382")); // should return false
console.log(telephoneCheck("2 757 622-7382")); // should return false.
console.log(telephoneCheck("10 (757) 622-7382")); // should return false.
console.log(telephoneCheck("27576227382")); // should return false.
console.log(telephoneCheck("(275)76227382")); // should return false.
console.log(telephoneCheck("2(757)6227382")); // should return false.
console.log(telephoneCheck("2(757)622-7382")); // should return false.
console.log(telephoneCheck("555)-555-5555")); // should return false. 
console.log(telephoneCheck("(555-555-5555")); // should return false. 
console.log(telephoneCheck("(555)5(55?)-5555")); // should return false.