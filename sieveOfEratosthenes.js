function primesUpToN(n) {
  const seive = Array(n/2|0).fill(true)
  for(let i = 3; i < n**0.5 + 1; i += 2) {
    if(seive[i/2|0]) {
      for(let j = i*i/2; j < seive.length; j += i) {
        seive[j|0] = false
      }
    }
  }

  return [2].concat(seive.map((v, i) => v && i >= 1 ? i*2+1 : null).filter(v => v !== null))
}

function fastSeive(n) {
  const isPrime = Array(n).fill(true)
  const SPF = Array(n) // smallest prime factor
  const prime = Array()
  isPrime[0] = isPrime[1] = false
  for(let i = 2; i < n; ++i) {
    if(isPrime[i]){
      prime.push(i)
      SPF[i] = i
    }
    let j = 0
    while(j < prime.length && i * prime[j] < n && prime[j] <= SPF[i]) {
      isPrime[i * prime[j]] = false
      SPF[i*prime[j]] = prime[j]
      ++j
    }
  }
  return prime
}

function segmentedSieve(n=2, m) {
  if(n <= 1) n = 2
  if(!m) [n,m] = [2,n]
  let primes = fastSeive(m**0.5 | 0) // get primes up to sqrt(m)
  let mark = Array(m-n+1).fill(false)
  for(let i = 0; i < primes.length; ++i) {
    let firstPrimeMultiple = ((n / primes[i]) | 0) * primes[i]
    if(firstPrimeMultiple < n)
      firstPrimeMultiple += primes[i]
    if(firstPrimeMultiple == primes[i])
      firstPrimeMultiple += primes[i]
    
    for(let j = firstPrimeMultiple; j <= m; j += primes[i])
      mark[j - n] = true
  }
  return mark.map((v, i) => !v ? i+n : null).filter(num => num !== null && num < m)
}

// console.log(primesUpToN(1000))

console.log(fastSeive(25))

segmentedSieve(1000000,2000000)