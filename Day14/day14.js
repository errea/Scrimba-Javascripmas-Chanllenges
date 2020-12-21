function arrayMaximalAdjacentDifference(nums) {
    let maxDifference = 0;
    
    for(let i = 0; i < nums.length - 1; i++) {
        const absoluteDifference = Math.abs(nums[i] - nums[i + 1]);
        
        if(maxDifference < absoluteDifference) {
            maxDifference = absoluteDifference;
        }
    }
    
    return maxDifference;
}

