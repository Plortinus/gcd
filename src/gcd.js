/**
 * 欧几里得算法
 * @param {*} x 正整数
 * @param {*} y 正整数
 */
function gcd(x, y) {
  const difference = Math.abs(x - y)
  const smaller = x > y ? y : x
  return difference ? gcd(difference, smaller) : x
}

export default gcd