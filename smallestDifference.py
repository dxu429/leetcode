import math
def smallestDifference(arrayOne, arrayTwo):
  # Write your code here.
  arrayOne = sorted(arrayOne)
  arrayTwo = sorted(arrayTwo)
  smallestSoFar = math.inf
  result = []
  i = 0
  j = 0
  while i	< len(arrayOne) - 1 and j < len(arrayTwo) - 1:
    e1 = arrayOne[i]
    e2 = arrayTwo[j]
    print([e1, e2], i , j)
    currDiff = math.fabs(e1 - e2)
    if currDiff < smallestSoFar:
      smallestSoFar = currDiff
      result = [e1, e2]
    
    if e1 < e2:
      i += 1
    elif e1 > e2:
    	j += 1
   
  
  while i < len(arrayOne)  or j < len(arrayTwo):
    currDiff = math.fabs(arrayOne[i] - arrayTwo[j])
    if currDiff < smallestSoFar:
      smallestSoFar = currDiff
      result = [arrayOne[i], arrayTwo[j]]
    if i == len(arrayOne) - 1:
      j += 1
    elif j == len(arrayTwo) -1:
      i += 1
  return result

print(smallestDifference([0, 20], [21, -2]))