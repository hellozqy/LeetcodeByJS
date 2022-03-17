/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function (n) {
	let s1 = new Set()
	function helper(s, n) {
		if (s.has(n)) {
			return false
		}
		s.add(n)
		let sum = 0
		while (n > 0) {
			sum += (n % 10) ** 2
			n = Math.floor(n / 10)
		}
    if (sum === 1) {
			return true
		}
		return helper(s, sum)
	}
	return helper(s1, n)
};
