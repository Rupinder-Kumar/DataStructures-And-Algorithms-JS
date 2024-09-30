function fibonacciRecursive(n) { // O(2^n)
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10)); // 55
console.log(fibonacciRecursive(15)); // 610
// console.log(fibonacciRecursive(43)); // 433494437 (too slow)

