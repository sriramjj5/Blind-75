let soln = [];

function subsets(nums: number[]): number[][] {
    soln.push([]);
    for (let i = 0; i < nums.length; i++) {
        helper([nums[i]], nums.slice(i+1));
    }
    let solnToReturn = soln; // a bit unclean but it's fine
    soln = [];
    return solnToReturn;
};

function helper(curr: number[], nums: number[]) {
    if (nums.length === 0) {
        soln.push(curr);
    } else {
        helper(curr.concat(nums[0]), nums.slice(1));
        helper(curr, nums.slice(1));
    }
}