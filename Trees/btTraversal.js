// Given the root node of a binary tree (but not necessarily a binary search tree,) write three functions that will print the tree in pre-order, in-order, and post-order.

// A Node has the following properties:

// var data; // A number or string.
// Node left; // Undefined if there is no left child.
// Node right; // Undefined if there is no right child.
// The structure of a tree looks like:

// data Tree a = Nil | Node (Tree a) a (Tree a)


/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

var a = new Node(5);
var b = new Node(10);
var c = new Node(2);
a.left = b;
a.right = c;

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node){
    let arr = []
    if (!node) {
    return 
}
  
function pot (node) {
    arr.push(node.data)
    
    if (node.left) {
        pot(node.left)
    }
  
    if(node.right) {
      pot(node.right)
     }
}
  
  pot(node)
  return arr
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node){
  let arr = []
  if (!node) {
    return
  }
  
  function iot (node) {
    if (node.left) {
       iot(node.left)
    }
    
    arr.push(node.data)
    
    if (node.right) {
      iot(node.right)
    }
  }
   
  iot(node)
   return arr
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node){
  let arr = []
   if (!node) {
    return
  }
  
  function traversal (node){
    if (node.left) {
      traversal(node.left)
    }
    
    if (node.right){
      traversal(node.right)
    }
    
    arr.push(node.data)
  }
  
    traversal(node)
    return arr
}

