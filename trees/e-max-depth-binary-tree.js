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
 * @return {number}
 */
var maxDepth = function (root) {
  //     if (root === null) return 0;

  //     let depth = 0;
  //     depth = Math.max(maxDepth(root.left), maxDepth(root.right));
  //     return depth+1;

  if (root === null) return 0;
  let depth = 0;

  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      let current = queue.shift();

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }

    depth++;
  }

  return depth;
};
