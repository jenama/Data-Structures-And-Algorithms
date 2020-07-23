//Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

let nums = [-1,0,3,5,9,12]
let target = 9

// solution1
const search = (nums, target) => {
    console.log('target:', target)
    let start = 0
    let end = nums.length -1
    while (start <= end) {
        
        let mid = Math.floor((start + end)/2)
        if (target === nums[mid]) {
         console.log('end:', end)
            
          return mid
        } else if (nums[mid] < target) { 
            console.log('mid:', mid) 
            start= mid + 1;
            
        } else {
            end = mid -1;
        } 
        console.log('start:', start)
        console.log('end:', end)
        console.log('mid:', mid)
    }
         
    return -1
};
search(nums, target)