/**
 * Input : Array1 , array2
 * Output: Exclude every element in array1 that has same value with any of the
 *  elements in array2
 */

function except(array, excluded) {
  return array.filter((value) => excluded.includes(value) === false);
}

console.log(except([1, 2, 3, 1, 2, 5, 4, 6, 2, 3, 1, 3, 7, 8], [10, 8, 7, 3]));
