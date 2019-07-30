import zip from './zip.js'
function maxOverlappingIntervals(intervals) {
  const [maxStart, maxEnd] = intervals.reduce(([start,end], [s,e]) => [Math.max(start, s), Math.max(end, e)], [-Infinity, -Infinity])
  const maxTime = Math.max(maxStart, maxEnd)
  let enterExit = Array(maxTime + 2).fill(0)
  for(let i = 0; i < intervals.length; ++i) {
    ++enterExit[intervals[i][0]]
    --enterExit[intervals[i][1]+1]
  }
  let currentlyOverlappingIntervals = 0
  let time = 0
  let maxOverlappingIntervalsSoFar = -Infinity
  for(let startTime = 0; startTime <= maxTime; ++startTime) {
    currentlyOverlappingIntervals += enterExit[startTime]
    if(maxOverlappingIntervalsSoFar < currentlyOverlappingIntervals) {
      maxOverlappingIntervalsSoFar = currentlyOverlappingIntervals
      time = startTime
    }
  }
  console.log(`Max intervals is ${maxOverlappingIntervalsSoFar} at time ${time}`)
  return time
}

let start = [13, 28, 29, 14, 40, 17, 3]
let end = [107, 95, 111, 105, 70, 127, 74]

console.log(maxOverlappingIntervals(zip(start, end)))