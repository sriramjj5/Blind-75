// given: array of integers, target
// to return: indices of two numbers that add to target
// exactly one solution. can't use same element twice. 

function twoSum(nums: number[], target: number): number[] {
    // use map - O(1) lookup time
    let numsAsHash: Map<number, number> = new Map<number, number>();
    for (let i = 0; i <= nums.length; i++) {
        let correspondingNum = target - nums[i];
        if (numsAsHash.has(correspondingNum)) {
            return [i, numsAsHash.get(correspondingNum) as number];
        }
        numsAsHash.set(nums[i], i);
    }
    return [0];
};