/**
 * Converts a string to pig latin.
 * @param {str} str String to convert to pig latin.
 * @return {str} The converted string.
 */

// My Solution
function translatePigLatin(str) {
    let newStr = "";
    let vowels = /[aeiou]/i; // starting with vowel, case insensitive
    
    if (str[0].match(vowels)) { // first letter is a vowel
        return str.concat('way');;
    } else { // first letter is a consanant
        for (let char of str) {            
            if(char.match(vowels)){              
                let index = str.indexOf(char); // first instance of vowel
                return str.slice(index, str.length - 1).concat(str.slice(0, index), 'ay');
            }
        }
    }
}

// Tests
console.log(translatePigLatin("california")); // should return "aliforniacay".
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
console.log(translatePigLatin("glove")); // should return "oveglay".
console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("eight")); // should return "eightway".