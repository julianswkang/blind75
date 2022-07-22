/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;

  const set = new Set();
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

//"a b c a b c b b"
//               r
//               l

//set = [b ]
//longest = 3
