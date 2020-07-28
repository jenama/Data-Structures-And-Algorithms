// Given a positive integer num, write a function which returns True if num is a perfect 
// square else False.

// Input: num = 16
// Output: true

// Input: num = 14
// Output: false

let num = 101
const isPerfectSquare = (num) => {
   let sqrt = Math.sqrt(num)
   if (sqrt % 1 === 0) {
       return true
   } else {
        return false
   }
};
console.log(isPerfectSquare(num))
