// given - array of prices, prices[i] = price of stock on i'th day
// maximize profit by picking one day to buy & another to sell
// return max profit, 0 if can't profit
function maxProfit(prices: number[]): number {
    // loop through list 
    // keep track of min so far & max profit so far 
    // if (current num) - (min so far) > max profit so far, re-assign
    let minSoFar: number = prices[0];
    let maxProfitSoFar: number = 0;
    for (let price of prices) {
        if (price < minSoFar) {
            minSoFar = price;
        }
        if ((price - minSoFar) > maxProfitSoFar) {
            maxProfitSoFar = price - minSoFar;
        }
    }
    return maxProfitSoFar;
};