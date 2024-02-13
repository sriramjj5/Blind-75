# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        # inorder traversal
        self.count = 0
        self.result = 0
        def helper(root: Optional[TreeNode], k: int): 
            if not root or (self.count >= k):
                return
            else:
                helper(root.left, k)
                self.count += 1
                if self.count == k:
                    self.result = root.val
                    return
                helper(root.right, k)
        helper(root, k)
        return self.result

