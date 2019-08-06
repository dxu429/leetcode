const binarySearch = require('./binarySearch')

test('testing binary search', () => {
  expect(binarySearch([], 1)).toBe(-1)
  expect(binarySearch([1,2,3,4], 2)).toBe(1)
})