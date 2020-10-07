/**
 * Two methods: sort and reverse
 * If no callback supplied,it can sort numbers and strings incrementally as default
 * /////Red flag: this guy up here failed me
 *
 * With callback, it can sort any
 * callback take two parameters and the returned value determines sorting approach
 *
 * But exclusively formatted callback for Objects
 *
 * However generally, positive value returned is for Incremental sorting
 * negative value returned is for Decremental sorting
 */

const numbers = [6, 3, 46, 4, 1, 1.0];

/**
 * Primitives
 */
//Incremental sorting
numbers.sort((a, b) => a - b); //or numbers.sort((a,b)=>a-b)
console.log(numbers);
// Decremental sorting
numbers.sort((a, b) => b - a);
console.log(numbers);
numbers.reverse();
console.log(numbers);

/**
 * Object Array
 */
const stock = [
  { id: 1, name: "Biscuit" },
  { id: 2, name: "apple" },
  { id: 3, name: "zebra" },
];
//stock based on name value

//incrementally
stock.sort((a, b) => {
  //be wary of case cause lowercase & uppercase have diff ASCII values
  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();

  if (aName > bName) return 1;
  if (aName < bName) return -1;
  return 0;
});
console.log(stock);

//Decrementally

stock.sort((a, b) => {
  //be wary of case cause lowercase & uppercase have diff ASCII values
  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();

  if (aName > bName) return -1;
  if (aName < bName) return 1;
  return 0;

  /**
   * actually, if the destination value being compared is number, no need for all
   * the paparazzi above,
   *
   * Simply subtract.
   * If LHS > RHS => positive is returned and vice versa. If equal, zero returned
   *
   * The sign of what's returned is the main deal not exact value
   *
   * but for string values, it cannot be subtracted
   */
});
console.log(stock);
