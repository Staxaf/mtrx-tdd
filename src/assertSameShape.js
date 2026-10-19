const isSameShape = require('./isSameShape')

function assertSameShape(a, b) {
  if (!isSameShape(a, b)) {
    throw new TypeError('matrices must have the same shape')
  }
}

module.exports = assertSameShape
