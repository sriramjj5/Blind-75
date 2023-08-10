// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }


function maxDepth(root: TreeNode | null): number {
    return maxDepthHelper(root, 0)
};

function maxDepthHelper(root: TreeNode | null, maxDepthSoFar: number): number {
    if (root === null) {
        return maxDepthSoFar;
    }
    return Math.max(maxDepthHelper(root.left, maxDepthSoFar + 1), maxDepthHelper(root.right, maxDepthSoFar + 1));
}