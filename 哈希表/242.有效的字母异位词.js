/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let res = new Array(26).fill(0);
  let base = 'a'.charCodeAt();
  for (let i of s) {
    res[i.charCodeAt() - base]++;
  }
  for (let i of t) {
    if (!res[i.charCodeAt() - base]) return false;
    res[i.charCodeAt() - base]--;
  }
  return true;
};
