# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def helper(root, currLevel):
            if not root:
                return
            # one thing per level
            # exploits the order that the recursive calls get resolved in
            if len(res) == currLevel:
                res.append(root.val)
            helper(root.right, currLevel+1)
            helper(root.left, currLevel+1)
        helper(root, 0)
        return res
        