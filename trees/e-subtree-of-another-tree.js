/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  //comparing the 2 nodes to each other
  function compare(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null || node1.val !== node2.val)
      return false;

    return compare(node1.left, node2.left) && compare(node1.right, node2.right);
  }

  //checking to see if subRoot is a subTree of root
  function dfs(node) {
    if (node === null) return false;
    if (compare(node, subRoot)) return true;

    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root, subRoot);
};
