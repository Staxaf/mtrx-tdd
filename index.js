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
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new TypeError('matrices must have the same shape')
    }
    const result = []
    for (let i = 0; i < this.rows; i++) {
      result[i] = []
      for (let j = 0; j < this.cols; j++) {
        result[i][j] = this[i][j] + other[i][j]
      }
    }
    return new Mtrx(result)
  }

  sub(other) {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new TypeError('matrices must have the same shape')
    }
    const result = []
    for (let i = 0; i < this.rows; i++) {
      result[i] = []
      for (let j = 0; j < this.cols; j++) {
        result[i][j] = this[i][j] - other[i][j]
      }
    }
    return new Mtrx(result)
  }

  mul(other) {
    if (typeof other === 'number') {
      const result = []
      for (let i = 0; i < this.rows; i++) {
        result[i] = []
        for (let j = 0; j < this.cols; j++) {
          result[i][j] = this[i][j] * other
        }
      }
      return new Mtrx(result)
    }

    if (this.cols !== other.rows) {
      throw new TypeError('incompatible matrix shapes for multiplication')
    }
    const result = []
    for (let i = 0; i < this.rows; i++) {
      result[i] = []
      for (let j = 0; j < other.cols; j++) {
        let sum = 0
        for (let k = 0; k < this.cols; k++) {
          sum += this[i][k] * other[k][j]
        }
        result[i][j] = sum
      }
    }
    return new Mtrx(result)
  }

  div(n) {
    const result = []
    for (let i = 0; i < this.rows; i++) {
      result[i] = []
      for (let j = 0; j < this.cols; j++) {
        result[i][j] = this[i][j] / n
      }
    }
    return new Mtrx(result)
  }
}

module.exports = Mtrx
