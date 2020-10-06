/*
Speed limit is 70
At interval of 5 above it, you get 1 point. i.e 75speed - 1pt, 80 speed - 2 pts, 85 speed - 3pts etc
Max allowed pts should be less than 12, if you reach 12 or above, suspend license
*/

function checkSpeed(speed) {
  const speedLimit = 70; //Avoid using magic no in code, use constant so someone else can understand
  const kmPerPoint = 5;
  const speedValue = Math.floor(speed.toFixed(4));
  if (speedValue < speedLimit) return "Ok";
  const points = Math.floor((speedValue - speedLimit) / kmPerPoint);
  return points > 0 ? (points >= 12 ? "Licence Suspended" : points) : "Ok";
}

console.log(checkSpeed(71));
