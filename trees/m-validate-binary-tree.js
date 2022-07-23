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
 * @return {boolean}
 */
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  //if current node is null, will return true, since BSTs can have null nodes
  if (root === null) return true;
  //if root.val is less than the passed in minimum or greater than the max--> first iteration it is -Infinity and Infinity, respectively
  //second iteration, it will be testing left node with -Infinity as min and parent node as max
  //if testing left, want to make sure that the left node is not larger than the parent node
  //second iteration, it will be testing the right node with parent node as min and Infinity as max
  //if testing right, want to make sure that the right node is not less than the parent node
  if (root.val <= min || root.val >= max) return false;

  //will then make a recursive call to the left and right nodes of the current node with the same principle as above
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
