// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.


function adjacentElementsProduct(inputArray) {
    let largest = inputArray[0] * inputArray[1]
    for (let i = 0; i < inputArray.length; i++) {
        let j = i + 1
        if (inputArray[i] * inputArray[j] > largest) {
            largest = inputArray[i] * inputArray[j]
        }
    }
    return largest
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))