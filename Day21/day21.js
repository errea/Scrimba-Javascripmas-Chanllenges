function sumOfTwo(nums1, nums2, value) {
    const map = {};
    
    for(let num of nums1) {
        const difference = value - num;
        map[difference] = difference;
    }
    
    for(let num of nums2) {
        if(map.hasOwnProperty(num)) {
            return true;
        }
    }
    
    return false;
}