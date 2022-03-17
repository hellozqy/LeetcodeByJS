/**
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function (s) {
  let list = [];
  for (const i of s) {
    if (list.includes(i)) {
      list.splice(list.indexOf(i), 1);
    } else {
      list.push(i);
    }
  }
  return list.length <= 1;
};
