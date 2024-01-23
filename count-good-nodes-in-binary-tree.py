# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        # helper with smallest so far, largest so far
        def helper(curr, largestInPath):

            if (not curr):
                return 0

            if (curr.val >= largestInPath.val):
                return 1 + helper(curr.left, curr) + helper(curr.right, curr)
            else:
                return 0 + helper(curr.left, largestInPath) + helper(curr.right, largestInPath)

        if root:
            return 1 + helper(root.left, root) + helper(root.right, root)
        else:
            return 0