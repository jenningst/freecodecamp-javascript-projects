/**
 * Convert a binary string to plain english.
 * @param {str} str String in binary.
 * @return {str} The converted string.
 */

// My Solution
function binaryAgent(str) {
    let binaryArr = str.split(' ');
    let strArr = [];
    
    function binToASCII(str) {
        let ascii = 0;
        if (str[0] == "1") {
            ascii+=128;
        }
        if (str[1] == "1") {
            ascii+=64;
        }
        if (str[2] == "1") {
            ascii+=32;
        }
        if (str[3] == "1") {
            ascii+=16;
        }
        if (str[4] == "1") {
            ascii+=8;
        }
        if (str[5] == "1") {
            ascii+=4;
        }
        if (str[6] == "1") {
            ascii+=2;
        }
        if (str[7] == "1") {
            ascii+=1;
        }
        return ascii;
    }

    let convertedStr = "";
    for (let binary of binaryArr) {
        strArr.push(String.fromCharCode(binToASCII(binary)));
    }
    return strArr.join('');
}

// Tests
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); // should return "Aren't bonfires fun!?"
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")); // should return "I love FreeCodeCamp!"