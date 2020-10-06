/*
Input: An array of values
Output how many values are truth inside the array
*/

function countTruthy(input) {
  let count = 0;
  for (let el of input) {
    if (el) count++;
  }
  console.log(count);
}

// countTruthy([""]);
