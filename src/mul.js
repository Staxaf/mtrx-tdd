function mul(a, b) {
  if (typeof b === 'number') {
    return a.map((row) => row.map((value) => value * b))
  }

  if (a[0].length !== b.length) {
    throw new TypeError('incompatible matrix shapes for multiplication')
  }

  const result = []
  for (let i = 0; i < a.length; i++) {
    result[i] = []
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0
      for (let k = 0; k < a[0].length; k++) {
        sum += a[i][k] * b[k][j]
      }
      result[i][j] = sum
    }
  }
  return result
}

module.exports = mul
