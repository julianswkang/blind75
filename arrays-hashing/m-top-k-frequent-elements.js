/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //initialize cache to store numbers and frequency
  const cache = {};

  //itereate through nums array and insert into cache

  nums.forEach((num) => {
    cache[num] = (cache[num] || 0) + 1;
  });

  const output = [];

  const sorted = Object.keys(cache).sort((a, b) => cache[b] - cache[a]);

  for (let i = 0; i < k; i++) {
    output.push(sorted[i]);
  }

  return output;
};
