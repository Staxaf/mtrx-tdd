const add = require('./src/add')
const sub = require('./src/sub')
const mul = require('./src/mul')
const div = require('./src/div')

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
}

module.exports = Mtrx
