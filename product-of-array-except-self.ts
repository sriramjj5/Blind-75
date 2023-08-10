function productExceptSelf(nums: number[]): number[] {
    // [1,2,3,4]
    // 2*3*4, 1*3*4, 1*2*4, 1*2*3
    // (everything before nums[i])*(everything after nums[i])
    // prefix array - [1, 1, 2, 6]        -> each element in const. time
    // suffix array - [24, 12, 4, 1]      -> each element in const. time
    let prefixes: number[] = [];
    prefixes[0] = 1;
    let suffixes: number[] = [];
    suffixes[nums.length - 1] = 1;
    let soln: number[] = [];
    for (let i=1; i<nums.length; i++) {
        prefixes[i] = prefixes[i-1]*nums[i-1];
        suffixes[nums.length - i - 1] = suffixes[nums.length - i]*nums[nums.length - i];
    }
    for (let i=0; i<nums.length; i++) {
        soln[i] = prefixes[i]*suffixes[i];
    }
    return soln;
};