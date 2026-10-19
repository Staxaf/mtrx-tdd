const Mtrx = require('..')
const { expect } = require('chai')

describe('arithmetic', function() {
  let a, b

  beforeEach(function() {
    a = new Mtrx([[1, 2], [3, 4]])
    b = new Mtrx([[5, 6], [7, 8]])
  })

  it('adds two matrices', function() {
    expect(a.add(b)).to.deep.equal([[6, 8], [10, 12]])
  })

  it('subtracts two matrices', function() {
    expect(b.sub(a)).to.deep.equal([[4, 4], [4, 4]])
  })

  it('multiplies a matrix by a number', function() {
    expect(a.mul(2)).to.deep.equal([[2, 4], [6, 8]])
  })

  it('multiplies two matrices', function() {
    expect(a.mul(b)).to.deep.equal([[19, 22], [43, 50]])
  })

  it('divides a matrix by a number', function() {
    expect(a.div(2)).to.deep.equal([[0.5, 1], [1.5, 2]])
  })

  it('errors if add gets matrices with different shapes', function() {
    const c = new Mtrx([[1], [2]])
    expect(() => a.add(c)).to.throw(TypeError)
  })
})
