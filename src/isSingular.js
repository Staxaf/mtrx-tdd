function isSingular(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0] === 0
}

module.exports = isSingular
