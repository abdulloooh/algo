/**
 * Input: Array
 * Output: Maximum value in the given array
 */

function getMax(array) {
  //   return array.sort((a, b) => a - b)[array.length - 1];

  //problem with reduce down here: need to handle empty array
  if (!array.length) return undefined;
  return array.reduce((max, current) => (current > max ? current : max));
}

console.log(getMax([3, 0.1111111111, -1000000, 100, 1, 1900, 23, 190]));
console.log(getMax([]));
