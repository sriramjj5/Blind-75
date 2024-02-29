class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        myMap = {}
        soln = []
        myArr = [[] for i in range(0, len(nums) + 1)]

        for num in nums:
            if num in myMap:
                myMap[num] += 1
            else:
                myMap[num] = 1

        for i in myMap:
            myArr[myMap[i]].append(i)
    
        for i in range(len(myArr) - 1, -1, -1):
            while (k > len(soln)) and (myArr[i] != []):
                soln.append(myArr[i].pop())
        
        return soln
