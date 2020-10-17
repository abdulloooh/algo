/**
 *
 * Two things necessary to compile Js code in BROWSER. Server-side uses Node.js
 *
 * 1. TRANSPILER   [Translator + Compiler]  e.g BABEL
 * 2. BUNDLER      [Combine + Minnify + Uglify] e.g WEBPACK
 *
 * Transpiler translates Js code to what all browser can understand,
 *      then compiles it
 *
 * Bundler combines all files together, minnify it by removing all the whitespaces
 *      & comments then uglify it by shortening keywords like class, functions etc
 *
 */

//babel

//npm i babel-cli babel-core babel-preset-env --save-dev

const a = 7;

class Ade {
  constructor() {
    this[_a] = 5;
    _b.set(this, 4);
  }
  draw() {
    console.log("draw");
  }
}
