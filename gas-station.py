from typing import List

class Solution:

    rotationsSoFar = 0
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        # start at 0, if you get until 4 and then fail -- 0-4 are all unviable starting pts
        # continue checking from 5 onward
        if self.rotationsSoFar >= len(gas):
            return -1
        else:
            return Solution.helper(self, gas, cost)

    def helper(self, gas: List[int], cost: List[int]) -> int:
        currentGas = 0
        for i in range(len(gas)):
            currentGas = currentGas + gas[i] - cost[i]
            if currentGas < 0:
                self.rotationsSoFar += i+1
                return Solution.canCompleteCircuit(self, gas[i+1:] + gas[:i+1], cost[i+1:] + cost[:i+1])
        return self.rotationsSoFar