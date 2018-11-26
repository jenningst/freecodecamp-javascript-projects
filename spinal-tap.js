/**
 * Converts a string to spinal case (i.e. all lowercase and joined by dashes).
 * @param {str} str String to convert to all-lowercase-joined-by-dashes.
 * @return {str} The converted string.
 */

// My Solution
function spinalCase(str) {
    let localStr = str;
    // /(?=[A-Z])/
    // /[[A-Z]\s\W]/g

    return;
}

// Tests
console.log(spinalCase("This Is Spinal Tap")) // should return "this-is-spinal-tap"
console.log(spinalCase("thisIsSpinalTap")) // should return "this-is-spinal-tap"
console.log(spinalCase("The_Andy_Griffith_Show")) // should return "the-andy-griffith-show"
console.log(spinalCase("Teletubbies say Eh-oh")) // should return "teletubbies-say-eh-oh"
console.log(spinalCase("AllThe-small Things")) // should return "all-the-small-things"