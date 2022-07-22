/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  console.log(s.replace(/\w/g, ""));
  s = s.replace(/\W/g, "").toLowerCase();

  //\w will select all alphanumeric characters
  //\W will select all non-alphanumeric characters

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
