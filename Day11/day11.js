function avoidObstacles(nums) {
    const largestNum = nums.sort((a, b) => a-b)[nums.length - 1];
    
    for (let i = 1; i <= largestNum + 1; i++) {
        if(nums.every((value) => value % i !== 0)) {
            return i;
        } 
    }
}