/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let list = new Set();
  const dfs = (candidates, path, sum, start) => {
    // 递归终点
    if (sum === target) {
      list.add([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] <= target) {
        path.push(candidates[i]);
        dfs(candidates, path, sum + candidates[i], i);
        path.pop();
      }
    }
  };
  dfs(candidates, [], 0, 0);
  return [...list];
};
