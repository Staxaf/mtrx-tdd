function div(a, n) {
  return a.map((row) => row.map((value) => value / n))
}

module.exports = div
