/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  //initialize an empty output array

  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let string = strs[i].split("").sort().join("");

    if (!map.has(string)) {
      map.set(string, [strs[i]]);
    } else {
      map.set(string, [...map.get(string), strs[i]]);
    }
  }

  const output = [];
  console.log(map.values());
  for (let array of map.values()) {
    output.push(array);
  }

  return output;

  //return Array.from(map.values());
};

//console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
