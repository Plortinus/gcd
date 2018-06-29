/**
 * 欧几里得算法
 * @param {*} x 正整数
 * @param {*} y 正整数
 */
function gcd(x, y) {
  const balance = Math.abs(x - y)
  const smaller = x > y ? y : x
  return balance === 0 ? x : gcd(balance, smaller)
}

export default gcd