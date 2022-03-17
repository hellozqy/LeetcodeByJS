/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let m = new Map();
  let res = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (!m.has(nums1[i] + nums2[j])) {
        m.set(nums1[i] + nums2[j], 1);
      } else {
        m.set(nums1[i] + nums2[j], m.get(nums1[i] + nums2[j]) + 1);
      }
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      if (m.has(0 - (nums3[i] + nums4[j]))) {
        res += m.get(0 - (nums3[i] + nums4[j]));
      }
    }
  }
  return res;
};
