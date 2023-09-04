// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.pi = Math.PI;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return 2 * this.radius * this.pi;
  }
  get area() {
    return this.pi * this.radius * this.radius;
  }

  set diameter(newDiameter) {
    return (this.radius = newDiameter / 2);
  }
  set circumference(newCircumference) {
    return (this.radius = newCircumference / (2 * this.pi));
  }
  set area(newArea) {
    return (this.radius = Math.sqrt(newArea / this.pi));
  }
}
