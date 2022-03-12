/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let res = [];
  const map = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' };
  const dfs = (str, i) => {
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }
    const a = map[digits[i]];
    for (const b of a) {
      dfs(curStr + b, i + 1);
    }
  };
  dfs('', 0);
  return res;
};
