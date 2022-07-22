/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/*


  
const queue = [p, q];
while (queue.length > 0) {
  const first = queue.shift();
  const second = queue.shift();

  if (!first && !second) continue;
  if (!first || !second || first.val !== second.val) return false;

  queue.push(first.left);
  queue.push(second.left);
  queue.push(first.right);
  queue.push(second.right);
}

return true;
  
  
  
  
//     const queue1 = [p];
//     const queue2 = [q];
  
//     while (queue1.length > 0 && queue2.length > 0){
      
//         if (p.left && q.left){
//             queue1.push(p.left);
//             queue2.push(q.left);
//         }
//         if (p.right && q.right){
//             queue1.push(p.right);
//             queue2.push(q.right);
//         }
      
//         let compare1 = queue1.shift();
//         let compare2 = queue2.shift();
      
//         if (compare1.val != compare2.val) return false;
//     }
  
//     return true;

*/
