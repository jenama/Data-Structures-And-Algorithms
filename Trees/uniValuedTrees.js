// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

 

// Example 1:


// Input: [1,1,1,1,1,null,1]
// Output: true
// Example 2:


// Input: [2,2,2,5,2]
// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */

const isUnivalTree = (root) => {
    return checkTree(root, root.val) 
};

const checkTree = (currNode, value) => {
    if (!currNode) {
        return true 
    }
       
    if(currNode.val !== value ) {
        return false
    }
     
    return checkTree(currNode.left, currNode.val) && checkTree(currNode.right, currNode.val)   
}

console.log(isUnivalTree([1,1,1,1,1,null,1]))