function maxSubArray(nums: number[]): number {
    // to find - subsequence of elements with the largest sum
    // to return - its sum
    // time complexity - O(n)

    // [-2, 1, -3, 4, -1, 2, 1, -5, 4] -> [4, -1, 2, 1] -> 6
    // first number in subsequence has to be positive, which cannot be followed by a number more neg than it
    // [4, 7, -2, 1] -> [4, 7] -> 11
    // [5, -6, 7, -4, 7, -4, -5, 3] -> [7, -4, 7]

    // can iterate through, 'collapsing' the sum so far into one number? if sum so far becomes -ve, abort

    let max: number = 0;
    let maxSoFar: number = 0;
    let maxElement = nums[0]

    for (let num of nums) {
        let temp = num + maxSoFar;
        if (num > maxElement) {
            maxElement = num;
        }
        if (temp<=0) {
            maxSoFar = 0;
            continue;
        } else {
            if (temp>max) {
                max = temp;
                maxSoFar = temp;
            } else {
                maxSoFar = temp;
            }
        } 
    }

    return ((max === 0) ? maxElement : max);

};