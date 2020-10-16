/***
 *
 * ES6 primitive Symbol type
 * ES6 computed property name
 * ES6 WeakMaps
 */

/**
 * 3 approaches
 * First is whack, just developer's convention but doesn't actually hide the members
 *      and this is by preceding the variable with underscore
 * Second is using Symbol
 * Third is using WeakMap
 */

//Symbol : a new ES6 primitive type

const _radius = Symbol("private WTH");
//Symbol returns a unique value on every call which can be used as property name
//Symbol() === Symbol() //false
//Symbol() !== Symbol() //true
const _draw = Symbol();

class Circlar {
  constructor(radius) {
    this.currentValue;
    //for property
    this[_radius] = radius;

    //for methods
    // this[_draw] = function () {
    //   console.log(this);
    // };
  }

  multiply(factor) {
    this.currentValue = factor * this[_radius];
  }

  //Use ES6 computed property names
  [_draw]() {
    console.log(this);
  }
}

const c = new Circlar(10);
console.log(c);
c[_draw]();
/**
 * Symbol approach is not entirely private as it can be accessed externally
 * 1:   by whoever knows the symbol rep e.g c[_radius] //c._radius won't work
 *      but it is still a good alternative as it doesn't expose the name
 *     FOR METHODS: c[_draw]()
 *
 * 2:   getting they key from Object property as:
 *      const key = Object.getOwnPropertySymbols(c)[0] //u can iterate the indexes
 *      then console.log(c[key])
 *    FOR METHODS: check one of the indexes for the key, c[key]()
 *   or key=Object.getOwnPropertySymbols(Object.getPrototypeOf(c)) for prototypes
 */

//WeakMap
//class WeakMap cos the keys are weak, garbage collected if not referenced
const _length = new WeakMap();
const _clear = new WeakMap();

class Rectangular {
  constructor(length) {
    this.writeOnlyValue;
    //ppt
    _length.set(this, length);

    //mtd
    _clear.set(this, () => {
      console.log(this);
    });
  }

  draw() {
    _clear.get(this)();

    console.log(_length.get(this));
  }

  //getters and setters
  get length() {
    return _length.get(this);
  } //so r.length can easily be run

  set writeValueOnly(val) {
    //   _length.set(this,val)
    if (val < 0) throw new Error("No negative Value Abeg");
    this.writeOnlyValue = val;
    console.log(this.writeOnlyValue);
  }
}

const r = new Rectangular(10);
console.log(r, r.length);
r.draw();

/**
 * Weakmaps are not absolutely hiding the concerned members also tho,
 * If the WeakMap rep is known/guessed right by anyone, it can easily
 * be read/modified e.g
 * _length.get  OR  _length.set
 */
