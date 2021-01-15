// Grid Traveler
// How many ways to get to bottom right from top left of a grid
// Brute force: Time complexity O(2^(n+m)) -> O(2^n), space complexity O(n+m) -> O(n)
const gridTravelerBF = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

// Solving grid(m,n) is the same as solving grid(n, m)
// Time complexity O(m*n), space O(n+m)
const gridTraveler = (m, n, memo = {}) => {
    // You want to use both m,n as the key
    let key = m + ',' + n;
    
    if(key in memo) return memo[key];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}

console.log(gridTraveler(180, 10))