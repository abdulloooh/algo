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
