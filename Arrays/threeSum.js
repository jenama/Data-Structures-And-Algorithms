let array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetSum = 0;

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let emptyArr = [];

  for (let i = 0; i < array.length - 2; i++) {
    let j = i + 1;
    let diff = array.length - 1;

    console.log("arr[j + 1]", array[j + 1]);
    while (j < diff) {
      let currSum = array[i] + array[j] + array[diff];
      if (currSum < targetSum) {
        j++;
      } else if (currSum > targetSum) {
        diff--;
      } else {
        emptyArr.push([array[i], array[j], array[diff]]);

        j++;
        diff--;
      }
    }
  }

  return emptyArr;
}

console.log(threeNumberSum(array, targetSum));
