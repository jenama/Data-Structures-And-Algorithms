//Given a singly linked list, determine if it is a palindrome.
// Input: 1->2
// Output: false

//  * Definition for singly-linked list.
//   function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
//   }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}

// https://leetcode.com/problems/palindrome-linked-list/

// solution with unshift
const isPalindrome = (head) => {
  if (head === null) {
      return true
  }
     
    let currNode = head
    let newArr = [currNode.val]
     while (currNode.next !== null) {
           currNode = currNode.next
         newArr.unshift(currNode.val)
        console.log('newArr:', newArr)
    }
    
    let i = 0
    let j = newArr.length - 1

    while(i < j) {
        if(newArr[i] === newArr[j]) {
            console.log('head', head)
            console.log('newArr:', newArr)
            
            i++;
            j--;
         } else {
             return false
         }
    }
      return true
   
};


   
//solution with push because I noticed that push is twice as fast as unshift
const isPalindrome = (head) => {
  if (head === null) {
      return true
  }
     
    let currNode = head
    let newArr = [currNode.val]
     while (currNode.next !== null) {
           currNode = currNode.next
         newArr.push(currNode.val)
        console.log('newArr:', newArr)
    }
    
    let i = 0
    let j = newArr.length - 1

    while(i < j) {
        if(newArr[i] === newArr[j]) {
            console.log('head', head)
            console.log('newArr:', newArr)
            
            i++;
            j--;
         } else {
             return false
         }
    }
      return true
   
};
isPalindrome(head)

