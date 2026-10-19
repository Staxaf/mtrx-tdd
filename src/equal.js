const assertSameShape = require('./assertSameShape')
const equalAll = require('./equalAll')

function equal(a, b) {
  assertSameShape(a, b)
  return equalAll(a, b)
}

module.exports = equal
