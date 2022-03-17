/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function (strs) {
	let m = new Map()
	let k
	for (let i = 0; i < strs.length; i++) {
		k = strs[i].split('').sort().join('')
		m.has(k) ? m.get(k).push(strs[i]) : m.set(k, [strs[i]])
	}
	return Array.from(m.values())
};
