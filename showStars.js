/**
 * Example input: 4
 * Output
 *    *
 *    **
 *    ***
 *    ****
 */

function showStars(n) {
  let pattern = "";
  for (let row = 1; row <= n; row++) {
    pattern += "*";
    console.log(pattern);
  }
}
showStars(5);
