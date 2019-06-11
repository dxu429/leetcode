function quickSort(nums) {
  if(nums.length <= 1)
        return nums
    
    let pivot = nums[Math.random() * nums.length | 0]
    let lt = []
    let eq = []
    let gt = []
    for(let i = 0; i < nums.length; ++i) {
        if(nums[i] < pivot) {
            lt.push(nums[i])
        } else if(nums[i] > pivot)
            gt.push(nums[i])
        else
            eq.push(nums[i])
    }
    return quickSort(lt).concat(eq, quickSort(gt))
}