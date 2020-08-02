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

var invertTree = function (root) {
  let left = root.left;
  let right = root.right;
  if (!root) {
    return;
  }
  root.right = left;
  root.left = right;
  invertTree(root.right);
  invertTree(root.left);

  return root;
};
