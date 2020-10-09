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
 * Polymorphism : Refactor ugle if/else or switch/case statements
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
