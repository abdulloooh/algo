ES5 majorly
ECMAscript spec

Scope: Where we look for things

- What are we looking for? Variables, Lexical Identifiers
- Who is looking for those things:

JS is a complied language (non interpreted): It knows what is on line "last" even
before running line "first". It is a bit diff from likes of C++ or Java cos they send binray form out (.exe) eg Java engine to JVM but JS sends the original source code out.
JS passes through the code like two times before sending out. 1 to identify where there is varibales declarations and functions declarations and rearranging them aptly. Second is to execute

Compiling Approaches:

- Top-down copiling approach
- Just-in-time (JIT)

How Js compiler work:

- First traversing to find all variable and function declarations and attach them to their scope (Global or function) checking line by line and entering functions along the way also - uses THE SCOPE MANAGER (Global/function)

i.e var x = 6 is treated as two seperate execustions.

1. Variable declaration (1st traversing, does not care about RHS value)
2. Assignment operation (2nd traversing, declaration done, only left with var ass) This is the EXECUTION PHASE

- LHS : target
- RHS : source

During execution phase: Local scope is asked for LHS reference first before the next scope and next and next until globals scope

If global scope is asked for an LHS reference in "non strict" mode and it can't find it, it simply creates one in its scope(global) and return it to whereever it was asked e.g From a function (As at ES6, const & let is exempted from that)
i.e function sth(){x=2} will copy value 2 to x in global scope & not the function scope

Undeclared is not same as undefined.

- Undeclared means the declacaration of such var/fcn wasn't found at all
- Undefined is an actual value type which means it has an LHS ref but with "empty value" which we mistakenly called "undefined", so this is akin to Uninitialized

If a var that is passed an argument is redeclared again within the function scope, it takes its arg value before the re-declaration and override it 4 d rem lines after.
During DECLARATION PHASE, the redeclared var is simply ignore by the scope manager and it simply respond that "Hey, I already have that LHS reference"
i.e function sth(foo){
console.log(foo) // the arg passed is logged
var foo = anotherValue
//Declaration phase simply ignores it, but reassign its value during execution
console.log(foo) //anotherValue
}

Caveat of Anonymous function declaration

- You can invoke it inside of itself like for recursion et stuff
- Debugging becomes hard as no function name but just error at line so and so
- Code discoverability, you most likely won't know what anonymous is doing untill you see where it is being used

Lexical scope vs Dynamic scope (not present in JS & mosr other high level lang, present in Bash scripting)

Lexical basically means compile time scope (based on author time decision)

Cheating Lexical scope: eval and with
Avoid using both except in very exceptional case like "eval" in templating engine

When eval is used, it slows down Js engine because it really doesn't have a scope but when used in strict mode, it creates a scope of its own and it is just fine like that.
Same goes for setTimeout string syntax, not apt, a function ref is more apt

with keywork creates a new autoglobal if not properly used; when a non-refence property is assigned a value e.g

```
const obj = {a:1,b:2}
//instead of obj.a = obj.b +1 , obj.b = 3 _ obj.a etc
with (obj) {
a = b +1, b = 3_ a , d = a+b
//problem, d ref cant be found in obj scope, so it is assigned to global
}

    obj.d; // undefined
    d;    //  3

```

IIFE is dope for automaticall making your entire code private & not inside window obj. So, if you've got a whole bunch of spaghetti code somewhere, simply wrap it in IIFE and cool. IF YOU NEED some ppts or funcns to be global, simply precede the, with "window." or freestyle e.g

```
(function(){
var x = 4 //private
function write(){console.log("writeSomething etc)} //private

window.anotherVar = 6 //public
}())

//Alternative syntax (function(){})()

```

Caveat for "let" => It doesn not hoist ( I do not see it as real issue yet tho, IMO it makes you write cleaner code )

- Transpilers for "let block" which is rejected by ES6:"let-er by Kyle" or "Tracer"
  LET-ER uses try-catch block scoping for manipulation

```let(a=5){console.log(a)}
//is translated to
try{throw void 0} catch(a=5){console.log(a)} //cos "catch" is block scoped
```

### Dynamic scoping

```
function foo(){
    console.log(bar)
    //bar is not in "foo scope", it then check where foo was invoked and get bar
}

function baz(){let bar = "boose"; foo()}
baz()
```

Basically, LEXICAL scoping is author-time desicion, dynamic is RUntime decision

Js has lexical scoping: Exception is "eval" and "with" keyword

Undefined basicall implies there is a declare variable with val "undefined"
Undeclared means no declare variable at all

##Hoisting example

```
b =5
c= 4
var a =c
let x=b
var c =5
function ade(){}
bayo = funtion(){}
//conceptually at compile time like below

function ade(){}
var a;
var c;
b = 5
c = 4
a = c
let x;
x=b
c = 5
bayo = funtion(){}

//function is hosted before variable declaration, technically proved
foo() //lade
var foo = 2
function foo(){console.log("aco")}
function foo(){console.log("lade")}
//crazy that fcn get overriden but not var, it is just the specification

All the LHS stuff happens at compile time, RSH stuff at runtime
```

Official term for "no hoisting" is "temporal dead zone"

One of the benefit of HOISTING is MUTUAL RECURSION (only hoisted lang can do that)

### "this" keyword

<u>Four rules</u>

1. Default binding: "this" in fcn default to undefined or global obj in strict & non-strict mode resp
2. Implicit binding: defaults to caller object if called by an object ex

```
var obj1 = {
    bar: "bar1",
    foo(){
        console.log(this.bar)
    }
}
var obj2 = {bar: "bar2", foo:obj1.foo}

obj1.foo() //bar1
obj2.foo
//bar2:obj1.foo is just a ref and set obj2.foo straight to the function foo & this now belongs to obj2
```

To creata a crossover between lexical scope and "this" is impossible, Imagine

```
function foo(){
    let bar = "barLocal"
    baz()
}

function baz(){
    console.log(this.bar)
}

var bar = "barGlobal"

foo()    //barGlobal cos baz is called with no ref to any object, so it uses default binding

//any attempt to make this.bar local to foo will fail, eg

function foo(){
    let bar = "barLocal"

    this.baz = baz //2. where was the enclosing fcn called? global scope
    //essentially this means here this = Global object & not foo... SO Global baz = baz

    this.baz()  // 3. baz here is called with ref to object "this" => Implicit binding & not default
    //but this = Global, so "this" ref inside of baz fcn will be ref Global object too
}

function baz(){
    console.log(this.bar) // 4. so barGlobal is printed
}

var bar = "barGlobal"

foo()    //1. foo is called from global scope, default binding rule applies for "this"
```

Essentially, what actually matters is the "call site" for the function and not "this site"

```
//Something to think about
function foo(){
    this.bar = "barLocal"
    this.baz()
}

function baz(){
    console.log(1,this.bar)
}
console.log(2,this.bar)

var bar = "barGlobal" //Engine be like, I already av a bar decl in glob scope, skip
console.log(3,this.bar)

foo()
/*
Output in order:
2 "barLocal"
3 "barGlobal"
1 "barLocal"
*/

//I think Js values(RHS) is assigned at runtime but definitions LHS at compile time
//and it executes top-down except in async
```

3. Explicit binding
   This is when call/ apply is used, it directly specifies thisArg
   e.g fn.call(obj) OR fcn.apply(obj)

This is actually a useful tool in "hard binding" where you can have full control
of any reference of "this". LONG STORY SHORT, the implementation already built
in Js as from ES5 anyways.
So

```
function foo(){console.log(this.bar)}
var obj1 = {bar:"bar1"}
var obj2 = {bar:"bar2"}

foo.call(obj1) //bar 1
foo.call(obj2) //bar 2
foo() //undefined

foo= foo.bind(obj2)
//after this, any form of call to foo will ref obj2 unless rebinded

foo.call(obj1) //bar 2
foo() // bar 2
foo.apply(obj1) //bar 2

//cos these guys are not the call sites anymore after binding, new call site is
// now in bind
```

The bind implementation is something like

```
function bind(fn,o){
    return function(){
        fn.apply(o,arguments)
}}
//so the binding would have been like
foo = bind(foo ,obj2)

//this can then be implemented directly in Function prototype as

if(!Function.prototype.bind){
    Function.prototype.bind = function(o){
        let fn = this
        return function(){
            fn.apply(o,arguments)
        }
    }
}
//so we can call it simple as
foo = foo.bind(obj2)
foo()
foo(args)
```

LAST IMPLEMENTATION(with prototype) is more like a POLYFILL for pre-ES5 browsers
though a better & more robust implementation is in MDN, DON'T USE THIS !!!

4. "new" keyword
   Whenever new keyword is used on a fcn, the fcn call instantly becomes a constructor call

FOUR extra things are done when this happens `let c = new foo()`

1. A new object is created out of no where
2. This object is linked to another object that reference "this"
3. It then adds or overrides the return in the fcn to `return this`
4. It assigns the return to the LHS

In summary for "this" keyword, the order of precedence goes thus

1. Check for new keyword in the fcn call (new)
2. Is it called with "call"/"apply" or has it been binded (Explicit binding)
3. Is it called via a containing/owning object (context) (Implicit binding)
4. Default to global object (or `undefined` in strict mode) (Default rule)

SO, "this" mechanism is dynamic, it sorts itself out at "runtime" & depends on call site
