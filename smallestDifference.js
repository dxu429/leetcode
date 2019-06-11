// Write a function that takes in two non-empty arrays of integers. 
// The function should find the pair of numbers (one from the first array, one from the second array) 
// whose absolute difference is closest to zero. The function should return an array containing these two numbers, 
// with the number from the first array in the first position. 
// Assume that there will only be one pair of numbers with the smallest difference.

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let smallestSoFar = Infinity, result = []
  let i = 0, j = 0

  while(i < arrayOne.length || j < arrayTwo.length) {
    let currDiff = Math.abs(arrayOne[i] - arrayTwo[j])
    if(currDiff < smallestSoFar) {
      smallestSoFar = currDiff
      result = [arrayOne[i], arrayTwo[j]]
    }

    if(arrayOne[i] < arrayTwo[j]) {
      if(i < arrayOne.length - 1)
        ++i
    } else if(j < arrayTwo.length - 1) {
      ++j
    }
  }

  return result
}