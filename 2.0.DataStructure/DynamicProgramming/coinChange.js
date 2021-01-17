// You are given coins of different denominations and a total amount of money.
// Write a function to compute the number of combinations that make up that amount. 
// You may assume that you have infinite number of each kind of coin.


const change = (amount, coins) => {
	// there is only 1 way to make 0
    if(amount === 0) return 1;
	// if no coins, we can't make any amount
    if(coins === 0) return 0;
    
    // initialise  dp array to 0
    const dp = Array(amount + 1).fill(0);
    
    // start at 1 - there is always only 1 way to make zero
    dp[0] = 1;
    
    for(let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        for(let j = coins[i]; j <= amount; j++) {
            dp[j] = dp[j-coin] + dp[j];
        }
    }
    return dp[amount];
};


var coinChange = function(coins, amount) {
    var dp=new Array(amount+1);
    dp.fill(Number.MAX_VALUE-1);
    dp[0]=0;
    for(var i=1;i<=amount;i++)
    {
        for(var j=0;j<coins.length;j++)if(coins[j]<=i){
            dp[i]=Math.min(dp[i-coins[j]]+1, dp[i]);
        }
    
    }
    
    return dp[amount]==Number.MAX_VALUE-1 ? -1:dp[amount];
};

console.log(change(5, [1,2,5])) // 4
console.log(change(3, [2]))  // 0
console.log(change(10, [10]))  // 1