/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (s.length === 0) return 0;

  //setting up sliding window
  let left = 0,
    right = 0;
  //variable to keep track of how many instances of the most frequency character
  let mostFreq = 0;
  //variable to keep track of the longest string while within <=k switches
  let result = 0;

  //cache to hold the letters we have in the window
  const cache = {};

  //iterate through string to create window
  while (right < s.length) {
    //if the letter at right index is in cache, increment; otherwise, set to 1
    cache[s[right]] = (cache[s[right]] || 0) + 1;

    //calculating the most frequent character in the cache so far
    mostFreq = Math.max(mostFreq, cache[s[right]]);
    //let mostFreq = Math.max(...Object.values(cache)); //this is MUCH slower

    //if the length of the string minus the most frequent character is greater than k, then will need to shrink window while also remove the character that was removed from the window, from the cache object
    while (right - left + 1 - mostFreq > k) {
      cache[s[left]]--;
      left++;
    }

    //calculating the longest string within constraints and storing in result
    result = Math.max(right - left + 1, result);

    //once we are within limits, will increment right to move to the next letter
    right++;
  }

  return result;
};
