/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const fn = str => {
    let a = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '#') {
        a.push(str[i]);
      } else if (a.length) {
        a.pop();
      }
    }
    return a.join('');
  };
  return fn(s) === fn(t);
};
