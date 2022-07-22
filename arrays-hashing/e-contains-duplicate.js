/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //     //initialize an empty cache object

  //     const cache = {};

  //     //iterate through the nums array

  //     for (let i = 0; i < nums.length; i++){
  //         if (cache.hasOwnProperty(nums[i])) return true;
  //         cache[nums[i]] = true
  //     }
  //     return false;

  //     //if the current element is in the array, return false
  //     //otherwise, add the current element into the cache

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    else set.add(nums[i]);
  }

  return false;
};
