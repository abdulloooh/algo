/**
 *
 * Here, we use webpack-cli which is a global package
 *
 * webpack-cli does all the work of webpack and also installed
 * necessary babel tools
 *
 * Thus, it does transpilng, combining, minifying and uglifying
 *
 * It downloads all necessary packages to get its work done
 *
 * npm i --save-dev webpack webpack-cli
 *
 * Important to know that it compiles the code to ES5 (understood by all browsers)
 * if you chose to use ES6 (ES2015) code during configuration
 *
 * It does this with Babel
 *
 *
 * npx webpack -w (w=>watch, it is optional)
 *
 * OR
 *
 * set build to webpack in package.json
 * Add flag -w to watch
 *
 * More info on getting started: https://webpack.js.org/guides/getting-started/
 */

import { Circle } from "./circle";

const circle = new Circle(10);
circle.draw();

console.log(new Circle(11).draw());

// console.log("asde");
