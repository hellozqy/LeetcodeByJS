var minWindow = function (s, t) {
  let l = 0;
  let r = 0;
  let need = new Map();
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }
  let needtype = need.size;
  let res = '';
  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) {
        needtype -= 1;
      }
    }
    while (needtype === 0) {
      const newres = s.substring(l, r + 1);
      if (!res || res.length > newres.length) res = newres;
      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) {
          needtype += 1;
        }
      }
      l += 1;
    }
    r += 1;
  }
  return res;
};
