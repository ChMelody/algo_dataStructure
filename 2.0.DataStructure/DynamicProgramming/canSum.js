// Function canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments
// The function should return boolean indicating whether or not it is possible to generate the targetSum using numbers from the array
// You may use an element of the aray as many times as needed, you may assume that all input numbers are non-negatives
// Brute force, it gets very slow when its given a bigger targetNum
// Time complexity O(n^m), space O(m) -> m = target sum, n = array length
const canSumBF = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSumBF(remainder, numbers) === true) {
            return true ; 
        } 
    }
    return false;
}


// Optimize with memoization
// Time complexity O(m*n), space O(m) -> m = target sum, n = array length
const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true ; 
        } 
    }

    memo[targetSum] = false;
    return false;
}

console.log(canSum(300, [7,14]))  // false