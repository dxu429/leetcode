/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  // 1 in every tens place
  // 10^k for every magnitude of 10^k
  
  // find tens place less than n  = int(n / 10)  * 10
  // maybe use memoization?
  let [q, x, ans] = [n, 1, 0]
  while(q > 0) {
      let digit = q % 10
      q = q/10 << 0
      ans += q * x
      let g = 0
      if(digit === 1) {
        g = n % x + 1
          ans += n % x + 1
      } else if(digit > 0) {
          ans += x
          g = x
      }
      console.log(q * x, g)
      // console.log(digit, q, ans, x)
      x *= 10
  }
  return ans
}
let q = 4211
countDigitOne(q)
// 422 + 1
// 420 + 2
// 400 + 100
// 1000 
let z = []
for(let i = 0; i <= q; ++i) {
  if((i/10 << 0) % 10 === 1)
    z.push(i)
}
console.log(z.length)

