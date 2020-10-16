/**
 * Prototypical Inheritance
 * Resetting the Constructor
 * calling the super constructor
 * Intermediate function Inheritance
 * Method Overriding
 * Polymorphism
 * When to use Inheritance (Composition > Inheritance)
 * Composition , mixins
 */

/***
 *
 *
 * Prototypical inheritance is simply one constructor inheriting
 * prototype ppt/value from another constructor e.g Circle from Shape
 */

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(length) {
  this.length = length;
}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(length) {
  //calling the super function and giving it reference to our desired "this"
  Shape.call(this, length); //with this, this.length = 10

  this.radius = "someValue";
}

//Initially, Circle.prototype will contain only objectBase
//something like Object.create(Object.prototype)

//but now reassign the prototype value to that of another constructor which means
//indirectly, Circle has inherited ShapeBase and ObjectBase at same time

// Circle.prototype = Object.create(Shape.prototype);

/**
 * However, Circle constructor property won't be accessible anymore cos
 * prototype value has been reset. EFFECT is that it will not be possible
 * to dynamically create an object anymore like: new Circle.prototype.constructor()
 * If you try that, you will get a Shape Object instead.
 * To FIX: reassign it
 */

//  Circle.prototype.constructor = Circle;
//This is called "resetting constructor"

//use Intermediate function inheritance
extend(Circle, Shape);

Circle.prototype.move = function () {
  console.log("move");
};

// let s = new Shape();
let c = new Circle(10);
console.log(/*s,*/ c); //Prototypical inheritance
/**
 * For c:
 * c => cBase:Circle => CircleBase: ShapePrototype => ObjectBase
 */

function Square() {}
extend(Square, Shape);

/**
 * Method Overriding
 * If there is need to change the implementation of a certain inherited mtd
 */
Square.prototype.duplicate = function () {
  //However if we need to invoke the original method, Simply
  Shape.prototype.duplicate();

  //IF the "this" context is used in it, we need to pass the apt "this"
  Shape.prototype.duplicate.call(this);
  //If not, no need for above

  console.log("duplicate modified by Square");
};

s = new Square();
s.duplicate(); //duplicate modified by Square

/**
 *
 * Polymorphism
 * So, Polymorphism is just a phenomenon in OOP where each object can modify
 * its own inherited function and personalise it avoiding several
 * conditional statement. EXAMPLE is Square prototype above, another below
 */
function Rectangle() {}
extend(Rectangle, Shape);
Rectangle.prototype.duplicate = function () {
  console.log("duplicate rectangle");
};

let shapes = [new Square(), new Rectangle()];

//so we can easily run duplicate function on diff instances e.g
for (let shape of shapes) shape.duplicate();

//instead of
for (let shape of shapes) {
  /**
   * if shape is circle
   *    call circleSpecialDuplicateFunction
   * else if shape is rectangle
   *    call rectangleSpecialDuplicateFunction
   * etc
   */
}

/**
 * So simply, Polymorphism is combining logic of encapsulation
 * and prototypical inheritance.
 *
 * More theoretically, it is a core concept of OOP that provides a way to
 * perform a single action in different forms. It provides an ability to
 * call the same method in different Javascript objects.
 */

/**
 *
 * Problem with Inheritance
 * It can lead to complex hierarchies when trying to encapsulate properties e.g
 *                                  BODY
 *                  |                               |
 *           MAMMAL(walk(),eat())            FISH(eat(),swim())
 *           |                                   |
 *        Boy,Cat                           Whale,Tilapia
 * This will lead to serious complexity problem
 * AVOID CREATING INHERITANCE HIERARCHIES. At most, just one level
 *
 * SOLUTION: Composition (using mixins)
 *
 */

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("Eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

//It may be preferred to have a mixin function
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const cat = {};
mixin(cat, canWalk, canEat);
console.log(cat);

//Mixin can also be extended into constructors

function TilapiaFish() {
  this.hunger = 4;
}
mixin(TilapiaFish.prototype, canSwim, canEat);

console.log(new TilapiaFish());
