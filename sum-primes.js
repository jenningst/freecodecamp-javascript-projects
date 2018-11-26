/**
 * Returns the sum of all prime numbers less than or equal to a number.
 * @param {int} num A positive integer.
 * @return {int} The sum of all prime numbers.
 */

// My Solution
function sumPrimes(num) {
    let primeList = [2, 3, 5, 7];

    for (let i = 7; i <= num; i++) { 
        let j = 0;
        while (j < primeList.length) { 
            if (i % primeList[j] !== 0) {
                if (j == primeList.length - 1){
                    primeList.push(i);
                    break;
                }
                j++;
            } else {
                break;
            }
        }
    }
    return primeList.reduce((acc, val) => acc + val);
}

// Tests
console.log(sumPrimes(10)); // should return a number.
console.log(sumPrimes(10)); // should return 17.
console.log(sumPrimes(20)); // should return 17.
console.log(sumPrimes(977)); // should return 73156.