/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (cache.hasOwnProperty(target - nums[i]))
      return [cache[target - nums[i]], i];
    else cache[nums[i]] = i;
  }
};
