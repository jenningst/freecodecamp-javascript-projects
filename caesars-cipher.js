/**
 * Converts a string to a ROT13-encoded string.
 * @param {str} str The string to convert with the cipher.
 * @return {str} The encoded string.
 */

// My Solution
function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let input = str.split('');

    let output = input.map((currentValue, index) => {
        if (alphabet.indexOf(currentValue) > -1) { 
            let alphaIndex = alphabet.indexOf(currentValue);            
            return alphabet[(alphaIndex + 13) % 26]; 
        } else {
            return currentValue;
        }
    })
    return output.join('');
}

// Tests
console.log(rot13("SERR PBQR PNZC")); // should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // should decode to FREE PIZZA!
console.log(rot13("SERR YBIR?")); // should decode to FREE LOVE ?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.