function add(a, b) {
  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new TypeError('matrices must have the same shape')
  }

  return a.map((row, i) => row.map((value, j) => value + b[i][j]))
}

module.exports = add
