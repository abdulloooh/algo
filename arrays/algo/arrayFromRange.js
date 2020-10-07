/**
 * Input: minValue,maxValue eg -1,4
 * Return: List numbers from min to max eg -1,0,1,2,3,4
 */

function arrayFromRange(min, max) {
  const output = [];
  for (let currentNumber = min; currentNumber <= max; currentNumber++) {
    output.push(currentNumber);
  }
  return output;
}
console.log(arrayFromRange(-9, -7));
