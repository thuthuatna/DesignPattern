// It dynamically adds or overrides the behavior of an object.

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }
  resize(factor) {
    this.radius *= factor;
  }
  toString() {
    return `A circle ${this.radius}`;
  }
}

// Let's create ColordShape Class
class ColoredShape extends Shape {
  constructor(circle, color) {
    super();
    this.circle = circle;
    this.color = color;
  }
  toString() {
    return `${this.circle.toString()}` + ` has the color ${this.color}`;
  }
}

// That's how we can use it
let circle = new Circle(2);
console.log(circle);

let redCircle = new ColoredShape(circle, 'red');
console.log(redCircle.toString());
