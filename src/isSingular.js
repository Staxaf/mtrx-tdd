const det = require('./det')

function isSingular(matrix) {
  return det(matrix) === 0
}

module.exports = isSingular
