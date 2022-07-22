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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  //using recursion
  //if the root is null, return null/root
  //     if (root === null) return root;

  //     //creating a new node, inversing the right and left values --> left = root.right, right = root.left
  //     //recursively calling invertTree on the root.right and root.left
  //     const res = new TreeNode(root.val, invertTree(root.right), invertTree(root.left))
  //     return res;

  if (root === null) return null;

  // let temp = root.left;
  // root.left = invertTree(root.right);
  // root.right = invertTree(temp);

  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;

  return root;

  /*
          4 
         / \ 
        2   7
       / \  / \
      1. 3 6.  9
  
          4
          
  
  
  
  */
};
