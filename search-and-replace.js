/**
 * Performs a search and replace on a sentence.
 * @param {str} str The sentence on which the search and replace will be performed.
 * @param {str} before The string that will be replaced.
 * @param {str} after The string that will be replacing 'before'.
 * @return {str} The converted sentence.
 */

// My Solution
function myReplace(str, before, after) {
    
    // checks if the first character of string is capitalized
    function isProper(str) {
        return str[0].match(/[A-Z]/) ? true : false;
    }

    // checks if the first character of string is capitalized
    function capitalizeString(str) {
        return str[0].toUpperCase().concat(str.slice(1, str.length));
    }

    // if proper, convert our after var
    return isProper(before) ? str.replace(before, capitalizeString(after)) : str.replace(before, after);
}

// Tests
console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".