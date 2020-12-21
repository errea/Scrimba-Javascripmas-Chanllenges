function arrayPreviousLess(nums) {
    const previousLess = [];
    
    for(let i = nums.length -1; i >= 0; i--) {
        for(let j = i; j >= 0; j--) {
            if(nums[i] > nums[j]) {
                previousLess.unshift(nums[j]);
                break;
            } else if (j === 0) {
                previousLess.unshift(-1);
            }
        }
    }
    
    return previousLess;
}