function extractEachKth(nums, index) {
    return nums.filter((value, i) => (i + 1) % index !== 0);
}