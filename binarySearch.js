function binarySearch(arr, val) {
  let l = 0
  let r = arr.length - 1
  while(l <= r) {
    let m = (l + r)/2 | 0
    if(arr[m] === val)
      return m
    if(arr[m] < val)
      l = m + 1
    else if(arr[m] > val)
      r = m - 1
  }
  return -1
}

module.exports = binarySearch