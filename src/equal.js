function equal(a, b) {
  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new TypeError('matrices must have the same shape')
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) {
        return false
      }
    }
  }
  return true
}

module.exports = equal
