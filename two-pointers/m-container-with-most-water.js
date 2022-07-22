/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //two pointers with iteration
  let left = 0;
  let right = height.length - 1;
  let max = -Infinity;

  while (left < right) {
    let leftH = height[left];
    let rightH = height[right];
    let minHeight = Math.min(leftH, rightH);
    let product = (right - left) * minHeight;

    max = Math.max(product, max);

    //product will only increase by making the smallest height, taller
    //so will need to take the shortest height and move the pointer to the next column
    //with hopes that the next column will be taller than the previous column in order to increase the product area
    if (leftH < rightH) {
      left++;
    } else {
      right--;
    }
  }
  return max;

  //backtracking approach with two pointers
  //     let max = -Infinity;
  //     let left = 0;
  //     let right = height.length-1;

  //     const helper = (leftSide, rightSide) => {
  //         if (leftSide >= rightSide){
  //             return;
  //         }

  //         let minHeight = Math.min(height[leftSide], height[rightSide]);
  //         let product = minHeight * (rightSide-leftSide);

  //         max = Math.max(product, max);

  //         helper(leftSide+1, rightSide);
  //         helper(leftSide, rightSide-1);
  //     }

  //     helper(left, right);

  //     return max;
};
