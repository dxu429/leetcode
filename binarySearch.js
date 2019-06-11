function binarySearch(arr, val) {
  let l = 0
  let r = arr.length - 1
  while(l <= r) {
    let m = (l + r)/2
    if(arr[m] < val)
      l = m + 1
    else if(arr[m] > val)
      r = m - 1
    else
      return m
  }
  return -1
}