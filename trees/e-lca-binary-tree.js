/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (!p || !q) return null;

  //if the root value is in between p and q, that means it must be the lowest common ancestor
  if (
    (p.val >= root.val && root.val >= q.val) ||
    (q.val >= root.val && root.val >= p.val)
  ) {
    return root;
  }
  //if the root value is greater than p or greater than q, will move the root to become a smaller value
  else if (root.val > p.val || root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  //if the root value is less than p or less than q, will move the root to become a larger value
  else if (root.val < p.val || root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
};
