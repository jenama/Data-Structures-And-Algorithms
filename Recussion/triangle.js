/*Recursion-1 -- triangle
We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

Examples

triangle(0) → 0
triangle(1) → 1
triangle(2) → 3 */

const triangle = (rows) => {
  if (rows <= 1) return rows
  return rows + triangle(rows - 1)
}
console.log(triangle(0)) // 0		
console.log(triangle(1)) // 1		
console.log(triangle(2)) // 3		
console.log(triangle(3)) // 6		
console.log(triangle(4)) // 10		
console.log(triangle(5)) // 15		
console.log(triangle(6)) // 21		
console.log(triangle(7)) //28