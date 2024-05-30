/* helper funciton */
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

/* bubbleSort algorithm */
const bubbleSort = input => {
  let swapCount = 0
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};

/* tests */

const testArr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 15, 16, 13];
const testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`testArr1 before sort = ${testArr1}`);
bubbleSort(testArr1);
console.log(`testArr1 after sort = ${testArr1}`);

console.log("\n\n");

console.log(`testArr2 before sort = ${testArr2}`);
bubbleSort(testArr2);
console.log(`testArr2 after sort = ${testArr2}`);
