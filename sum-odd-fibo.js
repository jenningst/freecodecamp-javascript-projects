/**
 * Returns the sum of all odd Fibonacci numbers that are less than or equal to a number.
 * @param {int} num A positive integer.
 * @return {int} The sum of all odd Fibonacci numbers less than or equal to num.
 */

// My Solution
function sumFibs(num) {
    function getFiboSeries(num) {
        let fib = [0, 1];
        let max = num;
        let i = 2;
        while (fib[i - 1] + fib[i - 2] <= max) {
            i = fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    }
    return getFiboSeries(num).filter(e => e % 2 !== 0).reduce((acc, val) => acc + val);
}

// Tests
console.log(sumFibs(1)); // should return a number
console.log(sumFibs(1000)); // should return 1785
console.log(sumFibs(4000000)); // should return 4613732
console.log(sumFibs(4)); // should return 5
console.log(sumFibs(75024)); // should return 60696
console.log(sumFibs(75025)); // should return 135721