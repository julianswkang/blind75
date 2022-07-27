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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  //if root is null, return empty array
  if (!root) return [];
  //initialize empty array which will hold sub arrays
  const outputArr = [];
  //initialize a queue which will start with the root node passed in
  const queue = [root];

  //iterate while the queue has elements
  while (queue.length > 0) {
    //initialize holding array which will hold the element of each level
    const holding = [];
    //initialize a variable which will indicate the amount of elements currently in the queue
    let nodesInQueue = queue.length;

    //iterate through the elements currently in the node
    for (let i = 0; i < nodesInQueue; i++) {
      //shift off the first element in the queue
      let current = queue.shift();

      //if the shifted off node has a left child, will push that left child into the queue
      //same for right
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      //will then push the current nodes value into the holding array, which will be holding the elements at each level
      holding.push(current.val);
      //this will occur for each node at the current level since only iterating to variable of nodesInQueue
    }
    //will then push the holding array into output array
    outputArr.push(holding);
  }
  //return the output array
  return outputArr;
};
