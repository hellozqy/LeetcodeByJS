/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let m = null;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    m = m === null ? prices[i] : Math.min(m, prices[i]);
    res = Math.max(res, prices[i] - m);
  }
  return res;
};
