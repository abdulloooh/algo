/**
 * Input: list of arguments, can be array of args
 * Output: their sum
 */

const sum = function (...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = items[0];
  return items.reduce((sum, next) => (sum += next));
};
console.log(sum([1, 2, 3, 4]));
console.log(sum(1, 2, 3, 4, 5));
