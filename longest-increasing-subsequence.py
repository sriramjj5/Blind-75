class Solution:
    # O(n^2) but O(n) is possible
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums:
            return
        if len(nums) == 1:
            return 1

        lengthOfLongest = 1

        subsequenceLengthsSoFar = [0] * len(nums)
        subsequenceLengthsSoFar[0] = [nums[0], 1]
        if (subsequenceLengthsSoFar[0][0] >= nums[1]):
            subsequenceLengthsSoFar[1] = [nums[1], 1]
        else:
            subsequenceLengthsSoFar[1] = [nums[1], 2]
            lengthOfLongest = 2

        # first element: 1
        # second element: 1 if smaller than first element, else 2 
        # third element: (of the elements smaller than it, get the largest count) + 1

        for i in range(2, len(nums)):
            bestCountSoFar = 1
            for j in subsequenceLengthsSoFar:
                if (j == 0): 
                    break
                if (j[0] < nums[i] and j[1] >= bestCountSoFar):
                    bestCountSoFar = j[1] + 1
            subsequenceLengthsSoFar[i] = [nums[i], bestCountSoFar]
            if bestCountSoFar > lengthOfLongest:
                lengthOfLongest = bestCountSoFar

        return lengthOfLongest


