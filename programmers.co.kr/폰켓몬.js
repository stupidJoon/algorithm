function solution(nums) {
    const unique = new Set(nums);
    return (unique.size > nums.length / 2) ? nums.length / 2 : unique.size;
}