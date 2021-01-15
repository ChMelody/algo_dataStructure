// Fibonacci

// Brute force, which will slow down tremendously onces it gets to 40 - 45, chrome devtool most likely will freeze if you try anything above 80
// Time complexity O(2^(n+m)) -> O(2^n), space complexity O(n+m) -> O(n)
const fibNaive = n => {
    if (n <= 2) return 1;
    return fibNaive(n - 1) + fibNaive(n - 2);
}

// Optimize using memoization recursive approach, time complexity is O(n) where n is the input size. This approach can max out call stack if given a very large number
// Time complexity O(m*n), space complexity O(n+m)
const fibMemo = (n, memo = {}) => {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    memo[n] = res;
    return res;
}

// Optimize using tabulation iterative approach, avoid maxing out the size of the call stack if we get a huge input
const fib = n => {
    // Pre-assign first 3 indices, same as if(n <=2) return 1;
    let fibNums = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

console.log(fib(100))