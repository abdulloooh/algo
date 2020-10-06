/*
Input is a number
Then show all prime numbers before the number
*/

showPrimes(20);

function showPrimes(limit) {
  //prime number starts from 2
  for (let number = 2; number < limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  //exclude 1 and itself
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

//my hint: check if it is prime, should not be divisible by any number except of 1 and itself
//0 and 1 and not prime numbers

//lesson: name your variables well, do not just throw i and j around
