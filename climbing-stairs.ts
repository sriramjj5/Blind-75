// given - number n, number of steps to reach the top 
// each time, can climb 1 stair or 2 stairs
// to return - how many distinct ways to climb to top?

function climbStairs(n: number): number {
    let numWays: number[] = [];
    numWays[0] = 0;
    numWays[1] = 1;
    numWays[2] = 2;
    for (let i = 3; i <= n; i++) {
        numWays[i] = numWays[i-1] + numWays[i-2];
    }
    return numWays[n];
};
