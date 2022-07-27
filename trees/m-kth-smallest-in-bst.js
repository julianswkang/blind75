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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  //     const output = [];

  //     const queue = [ root ];

  //     while (queue.length > 0 ){

  //         const length = queue.length;
  //         for (let i = 0; i < length; i++){
  //             const current = queue.shift();

  //             output.push(current.val);
  //             if (current.left) queue.push(current.left);
  //             if (current.right) queue.push(current.right);
  //         }
  //     }

  //     output.sort((a,b) => a-b);

  //     for (let i = 0; i < output.length; i++){
  //         if (i+1 === k) return output[i];
  //     }

  //     //dfs in-order traversal, recursion
  //     function inOrder(root, arr){
  //         if (root === null) return arr;
  //         //traverse to the most left node
  //         inOrder(root.left, arr);
  //         //push the valid most left node into the array
  //         arr.push(root.val);
  //         //traverse to the right node, and then traverse all the way to the most left node
  //         inOrder(root.right, arr);
  //         //return the array containing all of the nodes
  //         return arr;
  //     }

  //     const output = inOrder(root, []);
  //     return output[k-1]

  //in order traversal, iterative
  const stack = [];

  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    k--;
    if (k === 0) {
      return root.val;
    }
    root = root.right;
  }
};
