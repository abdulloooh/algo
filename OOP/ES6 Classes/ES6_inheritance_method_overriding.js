class Shape {
  constructor(thickness) {
    this.thickness = thickness;
  }
  draw() {
    console.log("drawn");
  }
}

class Circle extends Shape {
  //no need for constructor here if no new value has to be initialized
  //else, there is need which will then require invoking super()

  constructor(thickness, radius) {
    super(thickness);
    this.radius = radius;
  }

  move() {
    console.log("moved");
  }

  //method overriding : Just redefine the method
  draw() {
    //To still use the previous draw method
    super.draw();

    console.log("draw circle");
  }
}

const circle = new Circle(12, 10);
console.log(circle);
circle.draw();
