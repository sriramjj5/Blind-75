class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        # helper with smallest so far, largest so far
        def helper(root, closestSmaller, closestLarger):
            if root is None:
                return True

            if root.val <= closestSmaller or root.val >= closestLarger:
                return False

            return (
                helper(root.left, closestSmaller, root.val)
                and helper(root.right, root.val, closestLarger)
            )

        if root:
            return helper(root, float('-inf'), float('inf'))
        else:
            return True