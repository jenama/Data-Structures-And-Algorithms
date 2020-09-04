// Given a positive integer num, write a function which returns True if num is a perfect 
// square else False.

// Input: num = 16
// Output: true

// Input: num = 14
// Output: false

// let num = 101
// const isPerfectSquare = (num) => {
//    let sqrt = Math.sqrt(num)
//    if (sqrt % 1 === 0) {
//        return true
//    } else {
//         return false
//    }
// };
// console.log(isPerfectSquare(num))

// Binary Search version
const isPerfectSquare = (num) => {
    /* check if the num is less than  to 1 b/c 0*0 = 0 and since
    num is positive negative numbers will also be false.
    */
    if (num < 1) return false
    let first = 1
    let last = num
   while (first <= last) {
       let mid = Math.floor((first + last)/2)
       console.log(mid)
       if (mid * mid === num) return true       
       
       if (mid * mid > num) {
            last = mid - 1
            
        } else if (mid * mid < num) {
           first = mid + 1
        }
    }
    return false
};
console.log(isPerfectSquare(14))
