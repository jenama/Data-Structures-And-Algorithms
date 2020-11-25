/*Given a List of words, return the words that can be typed using 
letters of alphabet on only one row's of American keyboard like the 
image below.

Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
*/

/*
  @param {string[]} words
  @return {string[]}
 */
const findWords = (words) => {
    const row1 = new Set('qwertyuiop')
    const row2 = new Set('asdfghjkl')
    const row3 = new Set('zxcvbnm')

    const output = words.filter((word) =>{
         let lowerCase = word.toLowerCase().split('')
        console.log('lowerCase', lowerCase)
      
        const check = lowerCase.every(el => row1.has(el)) || lowerCase.every(el => row2.has(el)) ||                               lowerCase.every(el => row3.has(el))
        return check    
    })
      return output
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))


