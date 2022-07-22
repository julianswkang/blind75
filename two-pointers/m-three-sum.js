/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  const results = [];
  let target = 0; //in this case, target is 0, but can adjust to custom number if needed

  nums = nums.sort((a, b) => a - b);

  for (let left = 0; left < nums.length - 2; left++) {
    //if reaching this point, you break out because there are no numbers beyond this point that would bring the number back down since it is sorted
    if (nums[left] > target) break;
    //trying to avoid repeating numbers for the nums[left]
    if (left > 0 && nums[left] === nums[left - 1]) continue;
    let mid = left + 1;
    let right = nums.length - 1;

    while (mid < right) {
      let sum = nums[left] + nums[mid] + nums[right];

      if (sum === target) {
        results.push([nums[left], nums[mid], nums[right]]);

        //changes BOTH mid and right positions since there arent any duplicates in the array, no point in changing only one of the positions
        mid++;
        right--;

        //avoiding repeating numbers for mid and right
        //for mid: if the current number at mid is the same as the number at mid+1, will increment mid to skip to the next number
        while (mid < right && nums[mid] === nums[mid + 1]) {
          mid++;
        }
        //for right: if the current number at right is the same as the number at right-1, will decrement right to skip to the next number
        while (mid < right && nums[right] === nums[right - 1]) {
          right--;
        }
      } else if (sum < target) {
        mid++;
      } else {
        right--;
      }
    }
  }
  return results;
};
