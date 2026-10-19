const assertSameShape = require('./assertSameShape')

function sub(a, b) {
  assertSameShape(a, b)
  return a.map((row, i) => row.map((value, j) => value - b[i][j]))
}

module.exports = sub
