/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  //[1,2,3,4] --> [24,12,8,6]

  //2*3*4 = 24
  //1*3*4 = 12
  //1*2*4 = 8
  //1*2*3 = 6

  //[1]
  //generating an output array, empty but with sent length to equal the length of the input array
  const output = new Array(nums.length);

  //using a prefix, to hold the product of everything left of the current index in nums
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    //iterating through nums, will assign the element at index i with the current prefix
    output[i] = prefix;
    //will then multiple prefix with the current element for the next element's prefix
    prefix *= nums[i];
  }
  //[1, 1, 2, 6]
  let postFix = 1;
  //iterating through the nums array from end to beginning
  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] *= postFix;
    postFix *= nums[j];
  }

  return output;
};
