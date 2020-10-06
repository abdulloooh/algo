//JJC way
let circle1 = {
  radius: 10,
  thickness: 5,
  draw: function () {
    //draw the circle
    console.log(this.radius, this.thickness);
  },
};

let circle2 = {
  radius: 8,
  thickness: 6,
  draw: function () {
    //draw the circle
    console.log(this.radius, this.thickness);
  },
};
// circle1.draw();
// circle2.draw();

//However we can't keep repeating the methods in those circle draw, moreso if it is a long-line method

//Factory_function
function createCircle(radius, thickness) {
  return {
    radius,
    thickness,
    draw() {
      //draw the circle
      console.log(this.radius, this.thickness);
    },
  };
}

circle1 = createCircle(10, 5);
circle2 = createCircle(8, 6);

// circle1.draw();
// circle2.draw();

/**
 * Factory function uses camel notation eg oneTwoThreeFour
 * Constructor function uses pascal notation eg OneTwoThreeFour
 */

//Constructor function

function Circle(radius, thickness) {
  this.radius = radius;
  this.thickness = thickness;
  this.draw = function () {
    console.log(this.radius, this.thickness);
  };
  //   return this; //this is already done under the hood itself
}

circle1 = new Circle(10, 6);
circle2 = new Circle(8, 5);

circle1.draw();
circle2.draw();

//Constructor function is more known with devs with strictly OOP lang bg like C++ or Java
