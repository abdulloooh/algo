//this will not work in browser

const Circle = require("./circle");

const circle = new Circle(10);
circle.draw();

//It is still possible to access private details with no modularity //10
// console.log(_radius.get(circle));
//Error when it is modularised, not accessible anymore
