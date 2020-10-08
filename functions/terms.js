//Hoisting,arguments,rest,defaultParameters,getters/setters,Defensive programming
//local vs global scope, let, const, var, this, window/global object

/**
 * Function declaration
 * === function name(params) {}
 * Function expression
 * === let sth = function (params) {};
 *
 * Under those two, there are two subdivisions
 * === Named and Anonymous function
 *
 * HOISTING is a simple phenomenon by which javascript engine moves all
 * function DECLARATION to the top at runtime
 * REASON why we can call this kind of function in our code before it is even
 * declared. HOWEVER, this doesn't work for FUNCTION EXPRESSION, it is not hoisted
 *
 * javascript DECLARATIONS are hoisted, EXPRESSIONS are not
 */

move();
// walk();
function move() {
  console.log("move");
}

const walk = function () {
  console.log("talk");
};

/**
 *
 * Arguments   [[a better way in next junction]]
 * Js is dynamically typed, up to function arguments level
 * You can pass args > params or args < params with no direct error
 * Also has a keyword arguments
 */
function sum() {
  console.log(arguments); //arguments object is iterable unlike conventional objects
  let total = 0;
  for (let arg of arguments) total += arg;
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/**
 *
 * REST operator   >>>> arguments
 * NB: Rest parameter must be the last formal parameter
 */
function sum(...args) {
  return args.reduce((total, price) => total + price);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function evaluate(discount, ...prices) {
  const total = prices.reduce((total, price) => total + price);
  return total * (1 - discount);
}

console.log(evaluate(0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/**
 *
 * Default parameters are awesome but there is one caveat
 * Once a parameter has default value, there should not be any parameter
 * with no default after it cos it'll confuse the arguments when being set
 *
 * A way around this is to pass undefined for the position of default value
 * but it's ugly and not good practice
 */
function sum(a, b = 1, c) {
  return a + b + c;
}
//if we only have params to pass for a and c
console.log(sum(1, undefined, 2)); //it will pick up the default for b like that

/**
 *
 * Getters and Setters.... WHY?
 */
//Assuming
let person = {
  firstname: "abd",
  lastname: "ola",
  //   fullname: `${person.firstname} ${person.lastname}`,
  //ReferenceError can't access person before initialization
  // Instead, we make it fcn so it is not invoked yet
  fullname() {
    return `${person.firstname} ${person.lastname}`;
  },
};
// console.log(person.fullname);
console.log(person.fullname());
/**
 * Caveat: It would be nice to call fullname as ppt and not mtd: person.fullname
 * Also, fullname is read only
 * We can't directly modify fullname or use it to adjust first and last
 * SOLUTION: Getters and Setters
 */
person = {
  firstname: "abd",
  lastname: "ola",
  get fullname() {
    return `${person.firstname} ${person.lastname}`;
  },
  set fullname(value) {
    //Defensive programming
    if (typeof value !== "string") throw new Error("Input not a string");

    const parts = value.split(" ");
    if (parts.length < 2) throw new Error("Enter first and last name");

    person.firstname = parts[0];
    person.lastname = parts[1];
  },
};
console.log(person.fullname);

try {
  person.fullname = "Ade Wale"; //we need a setter for this
  console.log(person);
} catch (err) {
  console.error(err);
}

/**
 *
 * try...catch
 * Error thrown is called Exception
 * error object can be defined without being thrown
 * HANDLED in the last junction
 */

/**
 *
 * LOCAL vs GLOBAL variable    || let,const
 * Variables defined with const or let are scoped in their code blocks
 */
let bVariable = 20; //global scope
{
  const aVariable = 10; //local scope, not accessible outside
  console.log(aVariable); //cool
  // console.log(bVariable); //cool, global variable accessible

  //bVariable can be modified and it changes global scope too
  // bVariable = 15;

  //but if the same variable name is redeclared,
  //reference to the variable will throw Reference error "variable not accessible b4 declaration" cos of hoisting I guess 😕
  //Reference after where it is redeclared with take the local value without modifying d global
  //BAD CODING PRACTICE tho, make your code reusable with no trouble
  const bVariable = 18;
  console.log(bVariable); //18
}
// console.log(aVariable); //ReferenceError
console.log(bVariable); //cool, global variable accessible //20

//For "var", it becomes global variable anywhere it is declared ==function scoped tho
if (true) {
  var j = 10;
}
console.log(j);

/***
 *
 * var keyword and WHY TO AVOID it plus its diff from let/const
 * 1: var is function-scoped while let/var are block-scoped
 */
function sayHi() {
  if (true) {
    let b = "let";
    var c = "var";
  }
  // console.log(b); //this will fail cos let  is block scoped
  console.log(c); // ✔ //var
}
sayHi();

/**
 * 2: var defined at the gloabl scope attaches itself to the window var
 * If another module is used with same variable name, this can coincide
 * and one can override the other
 */
var c = "hello";
console.log(window.c);

let d = "hello";
console.log(window.d); // this will be undefined

//Same issue with FUNCTION DECLARATION which can be taken care of with
//FUNCTION expression defined with const/let
function sayHello() {
  console.log("Hello");
}
let helloSay = function () {
  console.log("hi");
};
window.sayHello(); // Hello
// window.helloSay(); //Error
//If it was declared with "var", it will also attach to window

/***
 *
 * this keyword
 * RULE OF THUMBS
 * "this" in a method reference the containing Object
 * "this" in a function declaration reference the window object
 * ==More to be explained below
 */
function heyHi() {
  console.log(this);
}
heyHi(); //global

const anObject = {
  name: "Abdullah",
  writename() {
    console.log(this); //anObject
  },
};
anObject.writename();
anObject.sayName = function () {
  console.log(this); //anObject
};
anObject.sayName();

//for constructor functions : same behavior
function helloConstruct(value) {
  this.welcomeMessage = value;
  console.log(this);
}
welcomeMessage = new helloConstruct("ello");
//it creates a new {} and attach it to "this"
console.log(welcomeMessage);

/**
 * For functions inside a method (callbacks mostly)
 * Note that this is a stand-alone fcn just as fcn declaration
 * and thus, "this" references window object natively
 */
const anotherObject = {
  stacks: ["nodeJs"],
  listStack() {
    this.stacks.map(function (stack) {
      console.log(this, stack);
    });
  },
};

anotherObject.listStack();
/**
 * To fix this, some methods take thisArgs as one of their parameters like foreach
 * Other way is to bind it
 * or to attach "this" to a varible scoped outside
 *
 * CHANGING "this"
 */
const anotherOtherObject = {
  name: "Abdullah",
  stacks: ["nodeJs"],
  listStack() {
    // const self = this;
    this.stacks.map(
      function (stack) {
        // console.log(self.name, stack);
        console.log(this.name, stack);
      }.bind(this)
    );
  },
};

anotherOtherObject.listStack();

//for standalone functions, call/apply/bind can be used to bind this
//call
heyHi.call(
  anotherObject /**,arguments can be pass here seperated with COMMA */
);
//apply
heyHi.apply(anotherObject /**,[arguments can be pass here IN AN ARRAY] */);
//bind
//bind does not call the function itself but returns another function
//that has the proper referenced "this"
const fn = heyHi.bind(anotherObject);
fn();

/***
 *
 * Arrow functions
 * Arrow function easily handles "function inside a method" with no need 4 binding
 * Because Arrow fcn does not have its own "this",
 * rather it inherits "this" of its containing object
 */
const sayHiArrow = () => console.log(this);
sayHiArrow(); //global object

const newObjecttt = {
  tags: ["react"],
  arrow: () => console.log(this), //global object
  arrowarrow() {
    console.log(this); //newObjecttt = this here
    this.tags.map((tag) => console.log(this, tag));
    //for regular fcn, this should be global up here being a self-function
    //but since it is an => fcn, it has no this but rather inherits this of its container
    //so this= newObjecttt
  },
};
newObjecttt.arrow();
newObjecttt.arrowarrow();
