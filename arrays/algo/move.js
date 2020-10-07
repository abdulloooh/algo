/**
 * Move an element from a certain index by the given offset, within the given array
 * Input: Array,index,offset
 * offset can be positive or negative
 *
 * returns invalid offset when it's needed
 *
 * Example
 * move([1,2,3,4], 1, 1)  //[1,3,2,4]
 */

function move(array, index, offset) {
  const output = [...array];
  const elementToBeMoved = output.splice(index, 1)[0];

  const newIndex = index + offset;
  if (newIndex < 0 || newIndex >= array.length) return "Invalid Offset";

  output.splice(newIndex, 0, elementToBeMoved);
  return output;
}

const array = [1, 2, 3, 4];
const output = move(array, 1, -1);
if (output === "Invalid Offset") console.error("Invalid Offset");
else console.log(output);

console.log(array);
