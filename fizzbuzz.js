/*
if number is divisible by 3, return fizz
By 5: return Buzz
By both 3 and 5: return fizzbuzz
By none: return the number

==Only one answer is allowed
*/

function fizzbuzz(n) {
  if (isNaN(n)) return NaN; //for type check:  if (typeof n !== "number" )return NaN

  by3 = n % 3;
  by5 = n % 5;

  return by3 === 0 ? (by5 === 0 ? "fizzbuzz" : "fizz") : by5 === 0 ? "buzz" : n;
}

//more detailed but long

function fizzbuzz(n) {
  if (typeof n !== "number") return NaN;

  by3 = n % 3;
  by5 = n % 5;

  if (by3 === 0 && by5 === 0) return "fizzbuzz";
  if (by3 === 0) return "fizz";
  if (by5 === 0) return "buzz";
  return n;
}
