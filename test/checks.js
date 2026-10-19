const Mtrx = require('..')
const { expect } = require('chai')

describe('checks', function() {
  let m, like

  beforeEach(function() {
    like = [[1, 2], [3, 4]]
    m = new Mtrx(like)
  })

  it('detects a diagonal matrix', function() {
    expect(Mtrx.isDiag([[2, 0], [0, 5]])).to.equal(true)
    expect(Mtrx.isDiag([[1, 2], [0, 1]])).to.equal(false)
  })

  it('detects Mtrx instances and matrix-like arrays', function() {
    expect(Mtrx.isMtrx(m)).to.equal(true)
    expect(Mtrx.isMtrx(like)).to.equal(false)
    expect(Mtrx.isMtrxLike(m)).to.equal(true)
    expect(Mtrx.isMtrxLike(like)).to.equal(true)
    expect(Mtrx.isMtrxLike([1, 2])).to.equal(false)
  })

  it('detects a singular matrix', function() {
    expect(Mtrx.isSingular([[1, 2], [2, 4]])).to.equal(true)
    expect(Mtrx.isSingular(like)).to.equal(false)
  })

  it('checks whether two matrices have the same shape', function() {
    expect(Mtrx.isSameShape(like, [[3, 4], [5, 6]])).to.equal(true)
    expect(Mtrx.isSameShape(like, [[1], [2]])).to.equal(false)
  })

  it('checks whether all elements are equal', function() {
    expect(Mtrx.equalAll(like, like)).to.equal(true)
    expect(Mtrx.equalAll(like, [[1, 2], [3, 4]])).to.equal(true)
    expect(Mtrx.equalAll(like, [[1, 2], [3, 5]])).to.equal(false)
  })

  it('errors if equal compares matrices with different shapes', function() {
    expect(() => Mtrx.equal(like, [[1], [2]])).to.throw(TypeError)
  })
})
