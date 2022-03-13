var generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push(row);
  }
  return res;
};

// res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
// res[2][2] = res[1][1] + res[1][2][([1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1])];
