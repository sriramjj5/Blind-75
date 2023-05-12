// given - array of ints
// return true if there are any duplicate values in this array^
function containsDuplicate(nums: number[]): boolean {
    let numsAsHash: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        numsAsHash.set(nums[i], 0);
        // could check length at each iteration of for loop
        // should make no difference to runtime on an average though?
        // or lookup -> add -> lookup -> add -> ... 
    }
    if (numsAsHash.size === nums.length) {
        return false;
    }
    return true;
};