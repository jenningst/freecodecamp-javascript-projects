/**
 * Return the DNA strand with its missing pairing element.
 * @param {str} str The DNA strand to convert.
 * @return {str} The converted DNA strand.
 */

// My Solution
function pairElement(str) {
    let dnaStrand = str.split('');
    let mappedPairs = [];

    // our base pairs for matching
    const basePairs = {
        "A": "T", "T": "A", "C": "G", "G": "C"
    };

    dnaStrand.forEach((base, index) => {
        let dnaObj = [];
        dnaObj.push(base, basePairs[base]);
        mappedPairs[index] = dnaObj;
    });

    // intermediate solution
    // return arr.map(x => [x, pairs[x]]);

    return mappedPairs;
}

// Tests
console.log(pairElement("ATCGA")); // should return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]].
console.log(pairElement("TTGAG")); // should return [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]].
console.log(pairElement("CTCTA")); // should return [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]].