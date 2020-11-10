// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1


class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

 const invertTree = (root) => {
   
    if (!root) {
        return root
    }
    let l;
    let r;
    r = invertTree(root.right)
    l = invertTree(root.left)
   
     root.left = r
      // console.log('r:', root.left)
    root.right = l
    //  console.log('l:', root.right)
  
    return root
    
};
console.log(invertTree([4,2,7,1,3,6,9]))
