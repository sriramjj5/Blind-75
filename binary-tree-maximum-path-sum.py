# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        
        toReturn = root.val

        def dfs(node):
            nonlocal toReturn # smth about scoping
            if not node:
                return 0

            left = max(dfs(node.left), 0)
            right = max(dfs(node.right), 0)

            toReturn = max(node.val + left + right, toReturn)
            return node.val + max(left, right)

        dfs(root)
        return toReturn
