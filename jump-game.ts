function canJump(nums: number[]): boolean {
    // always need to jump from first index - but to where?
    // [2, 3, 1, 1, 4] -> 2 -> 3.
    // choice was between jumping from 2 -> 3 and 2 -> 1.
    // pick the choice that lets you jump furthest from the landing spot?
    // which would be (distance jumped, ie. diff. in indexes) + (value of number landed on)
    // O(n)

    return helper(nums, 0, nums[0]);

};

function helper(nums: number[], currIndex: number, currValue: number) {
    let temp = currValue;
    let bestIndexSoFar;
    for (let i = 0; i <= currValue; i++) {
        if (currIndex+i+1 < nums.length) {
            if ((nums[currIndex+i] + i) > temp) {
                temp = Math.max(temp, nums[currIndex+i] + i);
                bestIndexSoFar = currIndex + i;
            }
        } else {
            return true;
        } 
    }

    if (temp === currValue) {
        return false;
    } else {
        return helper(nums, bestIndexSoFar, nums[bestIndexSoFar]);
    }
}