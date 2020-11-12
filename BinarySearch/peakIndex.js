/*Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

  */

const peakIndexInMountainArray = (A) => {
   let f = 0;
    let l = A.length -1 
    while (f < l){
      let mid = Math.floor((f + l)/2) 
       console.log('mid', mid)
        if(A[mid-1] < A[mid] && A[mid] > A[mid+1]) {
            return mid
        }else if (A[mid-1] > A[mid] && A[mid] > A[mid+1] ) {
            l = mid 
        } else if (A[mid - 1] <  A[mid] && A[mid] < A[mid + 1]) {
            f = mid + 1         
        }else {
            l = mid - 1 
        }
    }
    return f
};

console.log(peakIndexInMountainArray([0,1,0]));// 1
console.log(peakIndexInMountainArray([0,2,1,0]));//1
console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]));//2
console.log(peakIndexInMountainArray([3,5,3,2,0]));
console.log(peakIndexInMountainArray([12,13,19,41,55,69,70,71,72,96]));

