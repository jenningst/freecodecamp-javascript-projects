/**
 * Convert the given number into a roman numeral.
 * @param {int} num The integer to convert.
 * @return {str} The conversion to roman numeral.
 */

// My Solution
function convertToRoman(num) {
    const numString = num.toString();
    // const romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'MD', 'M'];
    // const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let romanArray = [];
    let dividesIntoRemainder = 0;
    let remainder = num;
    while (remainder > 0) {
        for (let i = 0; i < nums.length; i++) {          
            if (remainder >= nums[i]) { // remainder is larger than the current element
                dividesIntoRemainder = Math.floor(remainder / nums[i]);
                //console.log(`${nums[i]} divides into remainder of ${remainder} ${dividesIntoRemainder} times`);
                romanArray.push(romans[i].repeat(dividesIntoRemainder));
                remainder -= dividesIntoRemainder * nums[i];                
            }
        }
    }       
    return romanArray.join(''); 
}

// Tests
console.log(convertToRoman(2)); // should return "II".
console.log(convertToRoman(3)); // should return "III".
console.log(convertToRoman(4)); // should return "IV".
console.log(convertToRoman(5)); // should return "V".
console.log(convertToRoman(9)); // should return "IX".
console.log(convertToRoman(12)); // should return "XII".
console.log(convertToRoman(16)); // should return "XVI".
console.log(convertToRoman(29)); // should return "XXIX".
console.log(convertToRoman(44)); // should return "XLIV".
console.log(convertToRoman(45)); // should return "XLV"
console.log(convertToRoman(68)); // should return "LXVIII"
console.log(convertToRoman(83)); // should return "LXXXIII"
console.log(convertToRoman(97)); // should return "XCVII"
console.log(convertToRoman(99)); // should return "XCIX"
console.log(convertToRoman(400)); // should return "CD"
console.log(convertToRoman(500)); // should return "D"
console.log(convertToRoman(501)); // should return "DI"
console.log(convertToRoman(649)); // should return "DCXLIX"
console.log(convertToRoman(798)); // should return "DCCXCVIII"
console.log(convertToRoman(891)); // should return "DCCCXCI"
console.log(convertToRoman(1000)); // should return "M"
console.log(convertToRoman(1004)); // should return "MIV"
console.log(convertToRoman(1006)); // should return "MVI"
console.log(convertToRoman(1023)); // should return "MXXIII"
console.log(convertToRoman(2014)); // should return "MMXIV"
console.log(convertToRoman(3999)); // should return "MMMCMXCIX"