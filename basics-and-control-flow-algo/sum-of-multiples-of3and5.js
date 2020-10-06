/*
Input: number
returns sum of multiples of 3 and 5
*/

function sumOfMultiple(limit) {
  const pointer1 = 3,
    pointer2 = 5;

  let sum = 0;
  for (let i = 0; i <= limit; i++)
    if (i % pointer1 === 0 || i % pointer2 === 0) sum += i;

  return sum;
}

sumOfMultiple(10);
