// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

let nums = [2, 7, 11, 15]
let target = 26
const twoSum = (nums, target) => {
	let emptyArr = []
	let obj = {}
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i]
		console.log('diff:', diff)
		if(obj[diff] >= 0) {
			
			console.log('num', i)
			return [obj[diff], i]
		} else {
			obj[nums[i]] = i
		}
		console.log(obj)
	}
		return emptyArr
}
console.log(twoSum(nums, target))
    