function adjacentElementsProduct(nums) {
    let largestProduct = nums[0] * nums[1];
    
    for(let i = 1; i < nums.length - 1; i++) {
        const adjacentProduct = nums[i] * nums[i + 1];
        
        if(largestProduct < adjacentProduct) {
            largestProduct = adjacentProduct;
        }
    }
    
    return largestProduct;
}