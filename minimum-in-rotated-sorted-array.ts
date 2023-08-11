function findMin(nums: number[]): number {
    // O(log n) typically repeated halving 
    // ---> binary search-esque?
    // [1, 2, 3, 4, 5, 6] -> [1, 2, 3] and [4, 5, 6]
    // [2, 3, 4, 5, 6, 1] -> [2, 3, 4] and [5, 6, 1]
    // [3, 4, 5, 6, 1, 2] -> [3, 4, 5] and [6, 1, 2]
    // [4, 5, 6, 1, 2, 3] -> [4, 5, 6] and [1, 2, 3]
    // [5, 6, 1, 2, 3, 4] -> [5, 6, 1] and [2, 3, 4]
    // [6, 1, 2, 3, 4, 5] -> [6, 1, 2] and [3, 4, 5]

    // we pick the subarray with the smallest last element? 
    if (nums.length === 1) {
        return nums[0];
    } else {
        let middleIndex = Math.floor(nums.length / 2);
        let firstHalf = nums.slice(0, middleIndex);
        let secondHalf = nums.slice(middleIndex);
        if (firstHalf[firstHalf.length - 1] < secondHalf[secondHalf.length - 1]) {
            return findMin(firstHalf);
        } else {
            return findMin(secondHalf);
        }
    }
};
