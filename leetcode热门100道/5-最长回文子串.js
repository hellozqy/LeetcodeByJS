/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    getCenter(i, i);
    getCenter(i, i + 1);
  }
	function getCenter(left, right) {
		while(left >= 0 && right < s.length && s[left] === s[right]) {
			left--
			right++
		}
		if (left + right - 1 > res.length) {
			res = s.slice(left + 1, right)
		}
	}
  return res;
};
