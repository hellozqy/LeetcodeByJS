/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let s = new Map()
	for (let i = 0; i < nums.length; i++) {
		if (s.has(target - nums[i])) {
			return [i, s.get(target - nums[i])]
		} else {
			s.set(nums[i], i)
		}
	}
	return null
};
