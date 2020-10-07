/**
 * Tl;Dr
 * array_methods
 * addElements: unshift, splice, push
 * removeElement: shift, splice, pop
 *  === addElements and removeElement mutates the array
 *  === removeElement methods return the value(s) that was added/removed
 * Emptying array: assign to [] or modify its length ppt to 0
 * findELements: indexOf/lastIndexOf/includes(primitive) , find/findIndex(reference)
 *
 *  combining array: array1.concat(array2)
 *  selecting out of an array array.slice(startIndex,count)
 * NoTE: combining and slicing copies non-primitive values by reference
 *       so there is need to be extra careful to not mutate original array later
 *
 * array every() and some() for testing element(s) of an array
 * array map() and filter(), they do not mutate the original array
 *                           and are also chainable
 *                         array sort() also chainable
 * array reduce: crazy guy that wants to do everything
 */

/**
 *
 * Adding Elements
 */
let arr = [4];

//end
arr.push(5, 6);
//beginning
arr.unshift(1, 2, 3);
//middle
// arr.splice(start,deleteCount,values to be inserted)
arr.splice(3, 0, "a", "b", "c");

console.log(arr); // (1,2,3,"a","b","c",4,5,6)

/**
 *
 *
 * Finding element (primitive)
 */
console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(3));
//to check practically
console.log(arr.indexOf(2) !== -1);

//but even better now with new Js method
console.log(arr.includes("f"));
// Note: All the methods can take second paramter which will specify where to stat from
//eg
console.log(arr.includes(1, 3)); //skipped location of 1
console.log(arr.includes(1));

/**
 *
 * Finding Elements (reference)
 */
arrd = [
  { a: 1, b: 2 },
  { c: "d", e: "f" },
];
let found = arrd.find((el) => el.e === "f");
let willNotBeFound = arrd.find((el) => el.e === "fk");
let foundIndex = arrd.findIndex((el) => el.a === 1);
let willNotFindIndex = arrd.findIndex((el) => el.a === 10);
console.log(found);
console.log(willNotBeFound);
console.log(foundIndex);
console.log(willNotFindIndex);

/**
 *
 * Removing Elements in array
 */
//middle
// arr.splice(start,deleteCount,values to be inserted)
arr.splice(3, 3);
//beginning
arr.shift();
//end
arr.pop();
console.log(arr);

//removeElement methods return the value(s) that was added/removed

/**
 *
 * Emptying array
 * 2 sane methods from my pov
 * re-assign to [] but doesn't clean up all its references
 * set length ppt to 0, cleans up
 */
numbers = [1, 2, 3];
another = numbers;

number = []; //more like shifting its wire to somwhere else with empty value
console.log(another); //this still points to the first

numbers.length = 0; //However, this flushes out all values in same location
console.log(another); // Thus, this does not also find anything again

/**
 *
 * array.every() checks if all values match a given condtion
 * and array.some() checks for at least one
 */
numbers = [1, 2, 3, 45];
const allPostive = numbers.every((value) => value >= 0);
console.log(allPostive);

withNegative = [3, 4, 23, 1090, -2];
const atLeastOne = numbers.some((value) => value < 0);
console.log(atLeastOne);

/**
 *
 * To return an object only and directly from an arrow function,
 * wrap in braces e.g
 */
const arrowFcn = () => ({ id: 1, value: 20 });
console.log(arrowFcn());
//cause curly brackets are being used to mark code blocks

/***
 *
 * Array reduce
 * Let's say we wanna sum an array/countOccurence/sort etc
 */
let arrayToReduce = [1, 2, 3];
const sum = arrayToReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
//if initialValue is not specified, the first value in the array is used
console.log(sum);

arrayToReduce = ["a", "b", "v"];
const concat = arrayToReduce.reduce(
  (accumulator, currentValue) => `${accumulator}-${currentValue}`
);
//of course, just for testing, simply use array join method
console.log(concat);
