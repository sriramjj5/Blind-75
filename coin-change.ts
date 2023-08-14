function coinChange(coins: number[], amount: number): number {
    // dp[amount] = min(dp[amount-coin1], dp[amount-coin2], dp[amount-coin3]...)
    let dp: number[] = [];
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        dp[i] = 1000000;
    }
    for (let coin of coins) {
        dp[coin] = 1;
    }

    let res = helper(coins, amount, dp);
    if (res > 1000000) {
        return -1;
    } else {
        return res;
    }
};

function helper(coins: number[], amount: number, dp: number[]) {
    if (amount < 0) {
        return 1000000;
    } else if (amount === 0) {
        return 0;
    } else if (dp[amount] !== 1000000) {
        return dp[amount];
    } 
    let temp;
    for (let coin of coins) {
        if (temp === undefined) {
            temp = 1 + helper(coins, amount-coin, dp);
        } else {
            temp = Math.min(temp, 1 + helper(coins, amount-coin, dp));
        }
    }
    dp[amount] = temp;
    return dp[amount];
}
