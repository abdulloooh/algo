/*
Input n
display 0 to n with label of odd or even in front
*/

function isOddOrEven(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(`${i} : ${i % 2 === 0 ? "even" : "odd"}`);
  }
}

isOddOrEven(11);

/*
const message = i % 2 === 0 ? "even" : "odd"
console.log(1, message)
*/
