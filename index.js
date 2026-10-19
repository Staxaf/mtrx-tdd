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

    return new Mtrx(
      this.map((row, i) => row.map((value, j) => value + other[i][j]))
    )
  }

  sub(other) {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new TypeError('matrices must have the same shape')
    }

    return new Mtrx(
      this.map((row, i) => row.map((value, j) => value - other[i][j]))
    )
  }

  mul(other) {
    if (typeof other === 'number') {
      return new Mtrx(
        this.map((row) => row.map((value) => value * other))
      )
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
    return new Mtrx(
      this.map((row) => row.map((value) => value / n))
    )
  }
}

module.exports = Mtrx
