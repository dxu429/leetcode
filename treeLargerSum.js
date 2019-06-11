const solution = (arr) => {
    // Type your solution here 
    if(arr.length === 0)
        return ""
    let leftSum = 0
    let rightSum = 0
    let level = 0
    let i = 1
    while(i < arr.length) {
        for(let j = 0; j < 2**level && i < arr.length; ++j) {
            let item = arr[i++]
            leftSum += item === -1 ? 0 : item
        }
        for(let j = 0; j < 2**level && i < arr.length; ++j) {
            let item = arr[i++]
            rightSum +=   item === -1 ? 0 : item
        }
        ++level
    }
    console.log(leftSum, rightSum)
    if(leftSum < rightSum)
        return "Right"
    else if(leftSum > rightSum)
        return "Left"
    else
        return ""
};

console.log(solution([3,6,2,9,-1,10]))