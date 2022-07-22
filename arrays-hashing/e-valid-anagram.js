/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //edge cases: what if either string is empty? what if both strings empty?
  //     const cache = {};

  //     for (let i=0; i<s.length; i++){
  //         cache[s[i]] = (cache[s[i]] || 0) + 1
  //     }

  //     for (let j=0; j<t.length; j++){
  //         if (cache[t[j]] <= 0) return false;
  //         else cache[t[j]]--;
  //     }

  //     return Object.keys(cache).every(key => {
  //         return cache[key] === 0;
  //     })

  return s.split("").sort().join("") === t.split("").sort().join("");
};
