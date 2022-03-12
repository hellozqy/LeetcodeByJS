/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let list = [];
  let path = [];
  dfs(nums, nums.length, []);
  return list;

  function dfs(n, l, used) {
    if (path.length === l) {
      list.push([...path]);
      return;
    }
    for (let i = 0; i < l; i++) {
      if (used[i]) continue;
      path.push(n[i]);
      used[i] = true;
      dfs(n, k, used);
      path.pop();
      used[i] = false;
    }
  }
};
