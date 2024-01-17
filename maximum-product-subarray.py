class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        toReturn = max(nums)
        maxSoFar, minSoFar = 1, 1
        
        for n in nums:
            if n == 0:
                maxSoFar, minSoFar = 1, 1
                continue
            else: 
                tmp = maxSoFar*n
                tmp2 = minSoFar*n
                maxSoFar = max(tmp, tmp2, n)
                minSoFar = min(tmp, tmp2, n)
                toReturn = max(toReturn, maxSoFar)
        return toReturn