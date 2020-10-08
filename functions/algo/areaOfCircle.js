/**
 * Create:
 * An object that has a property radius, and area that is read-only
 */

const circle = {
  radius: 5,
  get area() {
    return Number(Math.PI * Math.pow(this.radius, 2));
  },
  //with no setter, circle will be readOnly and attempt to set it may not fail
  //but will not change anything
  //   set area(area) {
  //     this.radius = Math.sqrt(Number(area) / Math.PI);
  //   },
};

console.log(circle.radius, circle.area);

circle.area = 50.26548245743669; //should give new radius = 4
console.log(circle.radius, circle.area);
