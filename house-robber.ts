function rob(nums: number[]): number {
    // either house 1 or house 2 have to be robbed to maximize.
    // max of house 1 = house 1 + max(house 3, house 4)
    // max of house 2 = house 2 + max(house 4, house 5)
    // etc.
    let dp: number[] = [];
    dp[0] = 0;
    for (let i = 1; i <= nums.length; i++) {
        dp[i] = -1;
    }

    let oneFirst = helper(1, nums, dp);
    let twoFirst = helper(2, nums, dp);

    return Math.max(oneFirst, twoFirst);
};

function helper(currHouse: number, nums: number[], dp: number[]) {
    if (currHouse > nums.length) {
        return 0;
    } else if (currHouse === nums.length || currHouse === nums.length-1) {
        return nums[currHouse-1];
    } else if (dp[currHouse] !== -1) {
        return dp[currHouse];
    }
    dp[currHouse] = nums[currHouse-1] + Math.max(helper(currHouse+2, nums, dp), helper(currHouse+3, nums, dp));
    return dp[currHouse];
}