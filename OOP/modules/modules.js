/***
 * Benefits of using modules: MAINTAINABILITY, REUSABILITY AND ABSTRACTION
 * Particularly hiding high level details like Symbols or WeakMaps in Abstraction
 *
 * ES5 Approach
 * = AMD (Asynchronous module definition)   [Browser]
 * = CommonJs                               [Node.js]
 * = UMD (Universal Module Def)             [Both]
 * ES6 Approach
 * = ES6 Modules
 *
 * So, focus is now on CommonJs and ES6 modules definition
 * AMD and UMD is now only necessary for devs maintaining LEGACE APPS
 *
 * In MODULARITY, COHESION is important which is grouping related things together
 * Content of a module is explicitly private until it's exported
 *
 * CommonJs
 * Syntax here is "module.exports" from modules and "require" in the main file
 *
 * ES6 Modules
 * Syntax here is "export" to preceded fcn/class being exported and
 * "import" in the main file.
 *
 * In Browser, If Webpack is not being used,it will throw error
 * for destructuring e.g `import {Circle} from ./circle`
 *
 * It has to be speicified in the html file that `type="module"`
 * and relative link yo module has to change to "./circle.js"
 *
 * In Node.js, It has some issues too tho 😠
 */
