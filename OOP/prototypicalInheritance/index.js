/***
 *
 *
 * Prototypical inheritance is simply one constructor inheriting
 * prototype ppt/value from another constructor e.g Circle from Shape
 */

function Shape() {}
Shape.prototype.duplicate = function () {
  console.log("draw");
};

function Circle() {
  this.radius = "someValue";
}

//Initially, Circle.prototype will contain only objectBase
//something like Object.create(Object.prototype)

//but now reassign the prototype value to that of another constructor which means
//indirectly, Circle has inherited ShapeBase and ObjectBase at same time
Circle.prototype = Object.create(Shape.prototype);

/**
 * However, Circle constructor property won't be accessible anymore cos
 * prototype value has been reset. EFFECT is that it will not be possible
 * to dynamically create an object anymore like: new Circle.prototype.constructor()
 * If you try that, you will get a Shape Object instead.
 * To FIX: reassign it
 */
Circle.prototype.constructor = Circle;
//This is called "resetting constructor"

Circle.prototype.move = function () {
  console.log("move");
};

let s = new Shape();
let c = new Circle();
console.log(s, c); //Prototypical inheritance
/**
 * For c:
 * c => cBase:Circle => CircleBase: ShapePrototype => ObjectBase
 */
