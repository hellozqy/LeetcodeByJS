/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30102
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (78.95%)
 * Likes:    2728
 * Dislikes: 0
 * Total Accepted:    947K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 收集所有排列
  let list = []
  // 记录当前排列
  let cur = []
  const dfs = (used) => {
    if (cur.length === nums.length) {
      list.push([...cur])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      cur.push(nums[i])
      used[i] = true
      dfs(used)
      cur.pop()
      used[i] = false
    }
  }
  dfs([])
  return list
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

