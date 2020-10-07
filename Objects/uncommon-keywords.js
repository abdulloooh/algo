//delete
const circle = { radius: 1 };
console.log(circle);

circle.thickness = 3;
circle.draw = function () {
  console.log(this.radius);
};

console.log(circle);

delete circle.thickness;
delete circle.draw;

console.log(circle);
/**
 *
 *
 *
 * Every object has a constructor property
 */
console.log(circle.constructor);

/**
 * When object is created using object literal, Js uses object constructor to create it
 * eg const obj = {}  ====>  const obj = new Object()
 * Others are new String() , new Boolean(), new Number()
 *
 * So, when we create object from self-defined constructor function,
 * obectCreated.constructor will return our initial function
 */

/**
 *
 *
 *
 *
 * In Js, functions are objects
 */

function Circle(radius) {
  this.radius = radius;
}
// Circle.call({}, 1);
// Circle.apply({}.[1])
console.log(Circle.constructor);

//Internally, this is what happens
const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
`
);
console.log(new Circle1(2).radius);

/**
 *
 * Primitive vs Reference types
 * Stored, Copied and Passed by Value :     Primitive types
 *  ✔    ,  ✔   ,     ✔     by reference: Reference types
 */

/**
 *
 * Enumerating properties of an objects
 */
let ball = {
  radius: 2,
  color() {
    console.log(this, this.radius);
  },
};
for (key in ball) console.log(key, ball[key]);
//but this for...of won't work
// for (key of ball) console.log(key);  ===>error, ball object is not iterable
//cos for...of can only be use on iterables like arrays and maps
//However, way-outs exists

for (key of Object.keys(ball)) console.log(key);
/**
 * remember, Object is an inbuilt constructor that would have been used to create ball
 * Object.keys returns a string array
 * Also,
 */
for (entry of Object.entries(ball)) console.log(entry);
//Object.entries return a parent array of arrays mapping each property to its value

/**
 *
 * "in" operator ===> returns boolean
 */
if ("radius" in ball) console.log("yes");

if ("thickness" in ball === false) console.log("yes");

/**
 *
 * Object.assign is also used to clone or merge objects
 * i.e copies enumerable ppts from one object to another
 * Object.assign({},sourceObject)  OR if targetObject alredy exists
 * Object.assign(targetObject, sourceObject)
 * targetObject doesn't have to be empty
 *
 * Object.assign returns the target object i.e both targetObject is now = returnedValue
 *
 * Better approach might be "spread operator"
 */

/**
 * Memory allocation and de-allocation ====> Garbage Collector
 * Javascript has complex algorithms that handle that in the bg
 */

/**
 *
 * Template literals
 * Actually also works like "pre" in html
 * other than it is even better on the first line as it perfectly aligns it
 */
const template = `Hi Abdullah,
        bla bla
bla bla bla`;

console.log(template);

/**
 *
 * Javascript Date
 * when new Date() is typed, the intellisense bring suggestion with an arrow
 * The arrow can be navigated up and down to see possible entries
 */
const date1 = new Date(10000); //date starts from 1970, that is 10000 second after 1970
const date2 = new Date("2020,12,6,15:39:0"); //A date from a particular date
const date3 = new Date("Oct 6, 2020");
//combine to a particular format
console.log(date1, date1.toDateString());
console.log(date2, date2.toDateString());
console.log(date3, date3.toDateString());
//modify with "set" methods
date1.setFullYear(2015);
date1.setHours(17);
date1.setMinutes(30);
console.log(
  date1,
  date1.toISOString(),
  date1.toDateString(),
  date1.toTimeString()
);

/**
 *
 * Comparing objects
 *
 * to compare if the same, i.e if referencing same object
 * simply check (obj1 === obj2)
 * This will only happen if one of them has been directly assigned to the other
 * e.g let obj2 = obj1
 *
 * For equality, no universal to check if one object equals another,
 * It mostly boils down to application level
 * == One way is to compare all the necessary properties
 * == Can also use underscore isEqual, it will brute force check all properties values
 */

/**
 *
 *
 * Note: If creating a constructor function
 * Default values can be set without having parameter (named variable listed in function)
 * or arguments(real value passed while calling the cuntion) passed into it
 * ex: this.defaultSth = 0
 */

/**
 *
 * Callback also called Predicate
 */
