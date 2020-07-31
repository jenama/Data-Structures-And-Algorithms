// Write a function that takes in an array of at least three integers and, without sorting
// the input array, returns a sorted array ot the three largest integers in the input array.

// input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
// output: [18, 141, 541]


const findThreeLargestNumbers =(array) => {
  let largest = -Infinity
	let secLargest = -Infinity
	let thirdLargest = -Infinity
	let newArr = []
	for (let i = 0; i < array.length; i++) {
		
		if (array[i] > largest) {
				thirdLargest = secLargest
				secLargest = largest
				largest = array[i]
				console.log('third', thirdLargest)
				console.log('second', secLargest)
				console.log('first', largest)
			
		} else if (array[i] > secLargest ) {
			thirdLargest = secLargest
			secLargest = array[i]
			console.log('third...', thirdLargest)
			console.log('second...', secLargest)
		} else if (array[i] > thirdLargest) {
			
			thirdLargest = array[i]
			console.log('third!!!!', thirdLargest)
		} 
		
	}
		newArr.push(thirdLargest, secLargest, largest)
		console.log(newArr)
		return newArr
		
}
console.log(findThreeLargestNumbers([55, 43, 11, 3, -3, 10]))