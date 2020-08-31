
// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true


const uniqueOccurrences = (arr) => {
    let occurences = {}
    let tracker = 0
    for (let num of arr) {
        occurences[num] =  (occurences[num] || 0) + 1  
    }
    
    let obj = Object.values(occurences).sort()
    for (let i = 0; i < obj.length -1; i++) {
           console.log(obj[i])
        if (obj[i] === obj[i + 1]){
         
            return false
        }
    } 
    
    return true
};
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))