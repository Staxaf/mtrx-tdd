function isMtrxLike(value) {
  if (!Array.isArray(value) || value.length === 0) {
    return false
  }

  const cols = Array.isArray(value[0]) ? value[0].length : -1
  if (cols < 0) {
    return false
  }

  return value.every(
    (row) => Array.isArray(row) && row.length === cols
  )
}

module.exports = isMtrxLike
