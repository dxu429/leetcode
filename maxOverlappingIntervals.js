import zip from './zip.js'
function maxOverlappingIntervals(intervals) {
  let [maxStart, maxEnd] = intervals.reduce(([start,end], [s,e]) => [Math.max(start, s), Math.max(end, e)], [-Infinity, -Infinity])
  let maxTime = Math.max(maxStart, maxEnd)
  let enterExit = Array(maxTime + 2).fill(0)
  for(let i = 0; i < intervals.length; ++i) {
    ++enterExit[intervals[i][0]]
    --enterExit[intervals[i][1]+1]
  }
  let cur = 0
  let idx = 0
  let time = -Infinity
  for(let i = 0; i <= maxTime; ++i) {
    cur += enterExit[i]
    if(time < cur) {
      time = cur
      idx = i
    }
  }
  return idx
}

let start = [13, 28, 29, 14, 40, 17, 3]
let end = [107, 95, 111, 105, 70, 127, 74]

console.log(maxOverlappingIntervals(zip(start, end)))