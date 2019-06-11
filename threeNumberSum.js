//  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.
//  Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
//  Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

function threeNumberSum(array, targetSum) {
  let res = []
  array.sort((a, b) => a - b)
  for (let start = 0; start < array.length - 2; start++) {
    let left = start + 1, right = array.length - 1
    while (left < right) {
      let  element = array[start], l = array[left], r = array[right], diff = element + l + r - targetSum
      if (diff === 0)
        res.push([element, l, r])
      else if (diff < 0)
        --right
      else
        ++left
    }
    return res
  }
}
