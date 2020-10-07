/**
 *
 * Create a function that does the work of array include method
 * Input: array , searchElement
 * Output: Boolean
 */

function includes(array, searchElement) {
  // 1:   return array.indexOf(searchElement) === -1 ? false : true;
  for (let element of array) if (element === searchElement) return true;
  return false;
}

console.log(includes([1, 2, 3, 4], 4));
