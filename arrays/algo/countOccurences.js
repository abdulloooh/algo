/**
 *
 * Input: An array, a value
 * Ouput: The number of times the element occurs in the array
 */

function countOccurences(array, value) {
  return array.filter((el) => el === value).length;
  //   return array.reduce(
  //     (accumulator, currentValue) =>
  //       currentValue === value ? accumulator + 1 : accumulator,
  //     0
  //   );
}

console.log(countOccurences([1, 1, 2, 3, 1, 3, 2, 4, 1], 5));
