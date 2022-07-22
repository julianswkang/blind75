/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  //edge cases
  //nums empty
  //nums not an array
  if (nums === null || nums.length === 0) return 0;

  //initialize a set, with the nums array
  //initialize a variable that holds the max number in the consecutive sequence
  const set = new Set(nums);
  let max = 0;

  //will iterate through the set
  for (let num of set) {
    //need to ensure we are at the lowest number of a consecutive sequence
    //if current element - 1 exists, continue through the iteration so that we can achieve the lowest number of the consecutive sequence
    if (set.has(num - 1)) continue;

    //otherwise, we are at the lowest number of a possible sequence
    //initialize a current counter to 1
    //while there is a number that is +1 in the set, will iterate through an increment the current counter
    let current = 1;
    while (set.has(num + 1)) {
      current++;
      num++;
    }
    //find the max between the max and current max
    max = Math.max(current, max);
  }
  //return max
  return max;
};
