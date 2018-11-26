/**
 * Converts a string to properly formatted HTML.
 * @param {str} str String to convert.
 * @return {str} The converted string.
 */

// My Solution
function convertHTML(str) {
    function convertHTMLEntities(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    }
    return convertHTMLEntities(str);
}

// Tests
console.log(convertHTML("Dolce & Gabbana")); // should return Dolce & amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return Hamburgers & lt; Pizza & lt; Tacos.
console.log(convertHTML("Sixty > twelve")); // should return Sixty & gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); // should return Stuff in & quot; quotation marks & quot;.
console.log(convertHTML("Schindler's List")); // should return Schindler & apos; s List.
console.log(convertHTML("<>")); // should return & lt;& gt;.
console.log(convertHTML("abc")); // should return abc.