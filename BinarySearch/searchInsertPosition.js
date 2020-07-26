// Given a sorted array and a target value, return the index if the target is found.
//  If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 2
// Output: 1

// https://leetcode.com/problems/search-insert-position/

let nums = [1,3,5,6]
let target = 7

const searchInsert = (nums, target) => {
  
    let low = 0
    let high = nums.length -1

    if (target) {
      while (low <= high) {
      let mid = Math.floor((low + high)/2)
      if (nums[mid] === target) {
        return mid
            
        } else if (nums[mid] < target){
            low = mid + 1
        } else {
            high = mid - 1
        }
      }
    }
   
   return low
    
};

console.log(searchInsert(nums, target))