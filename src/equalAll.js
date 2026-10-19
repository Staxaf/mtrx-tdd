const isSameShape = require('./isSameShape')

function equalAll(a, b) {
  if (!isSameShape(a, b)) {
    return false
  }

  return a.every((row, i) =>
    row.every((value, j) => value === b[i][j])
  )
}

module.exports = equalAll
