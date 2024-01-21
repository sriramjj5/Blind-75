from collections import deque 

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        # use a queue FIFO
        queue = collections.deque()
        res = []

        if not root:
            return []
        else: 
            queue.append(root)

        while queue:
            toAppend = []
            for i in range(len(queue)):
                temp = queue.popleft()
                toAppend.append(temp.val)
                if (temp.left):
                    queue.append(temp.left)
                if (temp.right):
                    queue.append(temp.right)
            res.append(toAppend)

        return res