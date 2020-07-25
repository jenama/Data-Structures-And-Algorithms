//Write a function that takes in an array of integers and returns a sorted 
//version of that array. Use the bubble sort algorithm to sot the array.

// https://www.algoexpert.io/questions/Bubble%20Sort
let array = [8, 5, 2, 9, 5, 6, 3]
//output = [2, 3, 5, 5, 6, 8, 9]

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
	    for (let j = 0; j < array.length; j++) {
		    if (array[j] > array[j+1] ) {
			 let num = array[j]
			 console.log('curr:',array[j] )
			 console.log('next:', array[j+1])
			
		 		array[j] = array[j+1]
				 array[j+1] = num
				 console.log('array', array)
		} 
	 }
 }
	return array
}

bubbleSort(array)