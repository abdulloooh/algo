/**
 * OOP is the alternative to PROCEDURAL PROGRAMMING (that sometimes lead to spaghetti code)
 * FOUR PILLARS OF OOP
 * - Encapsulation : Group related variables & functions together =>ppts and mtds
 * - Abstraction : Hide details of complexity & show only essentials
 * - Inheritance : Eliminate redundant code
 * - Polymorphism : Refactor ugle if/else or switch/case statements
 */

/**
 * BENEFITS OF OOP
 * With;
 * Encapsulation : Reduce complexity + increase reusability
 * Abstraction: Reduce complexity + isolate impact of change
 * Inheritance : Eliminate redundant code
 * Polymorphism : Refactor ugly if/else or switch/case statements
 */

/**
 *
 * Abstraction : Private properties and Methods
 *
 * Used to hide the details of complexity/unnecessary and only essentials are publicly accessible
 */
function Circlee(radius) {
  let fixedNumber = 5; //private property
  this.radius = radius;
  this.area = function () {
    console.log(fixedNumber * this.radius); //fixedNumber has been abstracted
  };
}
let circle = new Circlee(5);
console.log(circle.area());
//I think this can also be referred to as closure
//Also see stopwatch example under algo

/***
 *
 *
 * INHERITANCE
 * Major class:       Parent/Super/Base class
 * Other classes:     Derived/Sub/Child class
 * The relationship:  IS-A
 * e.g
 * Circle(sub class) IS-A Shape(parent class)
 * Square(sub class) IS-A Shape(parent class)
 *
 * This is classical definition of Inheritance which we do not have in Js
 * We majorly have Objects
 *
 * which brings about Classical vs Prototypical Inheritance
 *
 */

/**
 * PROTOTYPE and PROTOTYPICAL INHERITANCE
 * All objects created in Javascribt has a prototype(equivalent to parent class)
 * and that prototype is like the base object, say "objectBase"
 *
 * This objectBase is "the only object with no protoype" in Js
 * and it is only one in memory
 */
let x = {};
let y = {};
console.log(x.__proto__ === y.__proto__); //true
//tho, this __proto__ is deprecated, Js now use prototypical inheritance mechanism
//right way
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
/**
 * So generally, any new object created inherits the prototype object
 * An object (say Circle) created(extend) from another (say Shape)
 * will inherits the properties of Shape
 * So, the way prototypical inheritance works is such that:
 * When Circle needs a method for example, it checks Circle first
 * if not found, it checks Shape and it checks all the way up to the Object Base
 * eg
 */
console.log(circle.toString());
//circle itself does not have this method, it is inherited from Protopye object

//NOTE : A prototype is just a regular object in memory

/**
 * Multilevel inheritance
 * If any array is created [], it has a protoype, say arrayBase
 * which has methods like push, pull, index, indexOf etc
 * This arrayBase also has another prototype which is objectBase
 * Remeber this objectBase is the base object of everything in Js
 *
 * Same with creating Objects(say Circle, Rectangle) from a constructor (say, Shape)
 * All object created from this constructor has common prototype with properties
 * "constructor(which is the fcn were created from)" and "another protoytpeObject"
 * which is the objectBase in Js
 */

/***
 *
 * Property Descriptor
 * --Enumerable, writable, configurable etc
 * By default, prototype object is not enumerable
 */
const soArray = { name: "Abdullah" };
console.log(soArray.toString());
//but this toString mtd will not be enumerated
console.log(Object.keys(soArray));
//OR
for (key in soArray) console.log(key);
//why
let objectBase = Object.getPrototypeOf(soArray);
console.log(Object.getOwnPropertyDescriptor(objectBase, "toString"));
/**
Object
configurable: true
enumerable: false
value: ƒ toString()
writable: true
__proto__: Object
**/
/**
 * enumerable determines if it will show up in Object.keys
 * writable determines if the value can be modified or not
 * configurable means if you can delete the property
 */

//so we can make name read-only for instance
Object.defineProperty(soArray, "name", {
  writable: false, //value can't be modified again
  enumerable: false, // will not show up in Object.keys again
  configurable: false,
});
soArray.name = "Mosh";
delete soArray.name;
console.log(soArray.name, soArray, Object.keys(soArray));
//name will still be Abdullah
// name will not show up in Obeject.keys
//name property can't be deleted

/***
 *
 * Constructor prototype
 * All constructors have prototype too ranging from Object, Array
 * and custom constructors
 *
 * It is these prototype ppt that becomes the parent(__proto__) of object
 * created from them
 */
const someObject = {};
console.log(Object.getPrototypeOf(someObject) === Object.prototype);
//also
console.log(circle.__proto__ === Circlee.prototype);

/**
 *
 * Instance vs Prototype members
 * Js knows how it interwines them together and look out for demanded ppt or mtd
 * So,
 * 1. reusable mtds or ppts can be added as prototype member
 * 2. instance member can be referenced in protoype adn vicer versa
 */
function Rectangle() {
  this.length = "10cm";
  // this.draw = function () {
  //   console.log("draw sth");
  // };
  //problem is: every instance of Rectangle will have draw mtd in memory

  //also to see referencing protoype member in practice
  this.move = function () {
    console.log("Referencing protype member in practice 🔻 ");
    this.draw();
  };
}

//better
Rectangle.prototype.draw = function () {
  console.log("using proto and refrencing instance member", this.length);
};

const r1 = new Rectangle();
const r2 = new Rectangle();
r1.draw();
r2.draw();
r1.move();

//You can also modify built-in-prototypes tho not advisable
Rectangle.prototype.toString = function () {
  console.log("hahaha, mad oo, toString don cast");
};
r1.toString(); //and r1 itself won't turn to string anymore

//You can also do something like modifying Js built-in constructor ojects
Number.prototype.toString = function () {
  console.log("Number.toString() self don cast...lol");
};
//now define a number
r1.aNumber = 3;
r1.aNumber.toString(); // it will print Number.toString() self don cast...lol
//and the number itself won't turn to string
//cos the r1.aNumber will create a number object from Number constructor
//and the Number.protoype will be its own __proto__ which we don override now

/***
 *
 * Iterating instance/own and protoype members
 */
//Object.key only retun own/instance members
console.log(Object.keys(r1)); //length,move

//for..in retuns both own/instance and self-defined protoype members
for (let key in r1) console.log(key); //length,move,draw

//we can check if ppt is owned or prototyped by
console.log(r1.hasOwnProperty("move")); //true
console.log(r1.hasOwnProperty("draw")); //false

/***
 *
 * DON't MODIFY OBJECTS you do not own, like Array,Number etc,
 * like "HOW I MODIFIED Number.toString", do not ever do that cos
 * Chances are another develope could have modified same ppt
 * and name it exactly what you wana name it with diff implementation
 * OR
 * Js maintainers might even add same method in future which could potentially
 * break your codebase
 */

/**
 *
 * Finally as an optimization technique,
 * METHODS should be added to prototype and not directly in object
 * Otheriwse, it would cos memory lag for each instance having their seperate mtd
 *
 * However "premature Optimization is the root of all evils...lol"
 * So, don't do all those hard bullshits if u wana create just few instances
 *
 * However, abstracted variables would not be accessible by the prototyped anymore
 * and they need to be modified to publicly accessible read-only property
 *
 * CHECK stopWatchAdvanceImplementation example for better understanding
 * tho it is a bad idea but just for practice
 */
