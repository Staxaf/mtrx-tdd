const add = require('./src/add')
const sub = require('./src/sub')
const mul = require('./src/mul')
const div = require('./src/div')
const isDiag = require('./src/isDiag')
const isMtrxLike = require('./src/isMtrxLike')
const isSameShape = require('./src/isSameShape')
const isSingular = require('./src/isSingular')
const equalAll = require('./src/equalAll')
const equal = require('./src/equal')

class Mtrx extends Array {
  constructor(matrix) {
    super(matrix.length)
    for (let i = 0; i < matrix.length; i++) {
      this[i] = matrix[i].slice()
    }
  }

  get rows() {
    return this.length
  }

  get cols() {
    return this[0] ? this[0].length : 0
  }

  add(other) {
    return new Mtrx(add(this, other))
  }

  sub(other) {
    return new Mtrx(sub(this, other))
  }

  mul(other) {
    return new Mtrx(mul(this, other))
  }

  div(n) {
    return new Mtrx(div(this, n))
  }

  static isDiag(matrix) {
    return isDiag(matrix)
  }

  static isMtrx(value) {
    return value instanceof Mtrx
  }

  static isMtrxLike(value) {
    return isMtrxLike(value)
  }

  static isSingular(matrix) {
    return isSingular(matrix)
  }

  static isSameShape(a, b) {
    return isSameShape(a, b)
  }

  static equalAll(a, b) {
    return equalAll(a, b)
  }

  static equal(a, b) {
    return equal(a, b)
  }
}

module.exports = Mtrx
