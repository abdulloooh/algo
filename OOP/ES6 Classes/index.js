/***
 * ES6 classes
 * Hoisting
 * Static Methods
 * This keyword
 *
 */

class Circle {
  constructor(radius) {
    this.radius = radius;

    //methods defined here won't end up inside prototype
    this.move = function () {
      console.log("move");
      this.draw();
    };
  }

  draw() {
    console.log("draw");
    console.log(this.radius);
  }

  /**
   *
   * static methods
   *
   * TWO types of members: Instance and Static members
   */
  //they are accessible without having to create a new instance of the object
  // they are MOSTLY USE TO CREATE UNITLITY FUNCTIONS
  static parse(str) {
    return new Circle(JSON.parse(str).radius);
  }
}

let c = new Circle(1);
console.log(c);
//class is essentially a syntactical sugar over constructor function
//but they are still almost same thing tho in a cleaner way

//🔼 🔼 🔼  Class declaration

//class expression 🔻🔻🔻
const Square = class {};

//Neither class expression nor declaration is hoisted

let circle = Circle.parse('{"radius":10}');
console.log(circle);

//ANOTHER STATIC MTDS EXAMPLE
class MathClone {
  static abs(value) {
    //do something
    return value + 1;
  }
}
console.log(MathClone.abs(10));

/**
 * "This" keyword, Method call, function call, "use strict"=> strict mode, ES6 class
 * Non-Strict Mode; Method call:"this" => caller object, function call:"this"=>Global
 * Strict Mode: Function call: "this"=> undefined
 * ES6 class automatically runs in strict mode so 🔍
 */
