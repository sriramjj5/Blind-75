function longestConsecutive(nums: number[]): number {
    // worst case is O(nm) where m = length of longest subsequence?
    // eg. in case of [1, 2, 7, 8, 10, 11, 15, 16, 19, 20]
    // but in these cases, m is so small compared to n (& case is rare enough) that it doesn't matter

    let soln: number = 0;
    let numSet = new Set(nums);
    for (let num of nums) {
        if (numSet.has(num-1)) {
            continue;
        } else {
            let tempNum = num + 1;
            while (numSet.has(tempNum)) {
                tempNum += 1;
            }
            let currSoln = tempNum - num;
            if (currSoln > soln) {
                soln = currSoln;
            }
        }
    }

    return soln;

};