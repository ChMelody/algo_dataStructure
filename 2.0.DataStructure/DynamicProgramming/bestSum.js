// bestSum(targetSum, numbers) 
// that return an array containing the shortest combination of numbers that add up to exactly the targetSum
// If there is a tie for the shortest combo, you may return any one of the shortest
// Brute force: time O(n^m * m), space O(m^2)
// Memo: time O(m^2 * n), space O(m^2)
const bestSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortest = null; 

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderCombo = bestSum(remainder, numbers, memo);

        if(remainderCombo !== null){
            const combination = [...remainderCombo, num];
            if(shortest === null || combination.length < shortest.length) {
                shortest = combination;
            }
        }
    }
    memo[targetSum] = shortest;
    return shortest; 
}

console.log(bestSum(7, [5,3,4,7])) // [7]
console.log(bestSum(8, [2,3,5])) // [3,5]
console.log(bestSum(8, [1,4,5])) // [4,4]
console.log(bestSum(100, [1,2,5,25])) // [25,25,25,25]

