//Given a singly linked list, determine if it is a palindrome.
// Input: 1->2
// Output: false

//  * Definition for singly-linked list.
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}

// https://leetcode.com/problems/palindrome-linked-list/
const isPalindrome = (head) => {
  let currNode = head
  if (head === null || currNode.next === null ) {
      return true
  }
     while (currNode.next !== null) {
        
      console.log('check', currNode.next)
       
      if ( head === currNode.next) {
          return true
      }
       currNode = currNode.next
    }
      return false
   
};