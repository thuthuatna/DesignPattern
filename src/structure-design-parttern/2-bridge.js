//It separates the abstraction from the implementation so that the two can vary independently.

/*
We will be creating Renderer classes for rendering multiple shapes,
*/

class VectorRenderer {
  renderCircle(radius) {
    console.log(`Drawing a circle of radius ${radius}`);
  }
}

class ResterRenderer {
  renderCircle(radius) {
    console.log(`Drawing pixels of circle of radius ${radius}`);
  }
}

class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Circle extends Shape {
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }
  draw() {
    this.renderer.renderCircle(this.radius);
  }
  resize(factor) {
    this.radius = factor;
  }
}

// That's how we will use this
let rester = new ResterRenderer();
let vector = new VectorRenderer();
let circle = new Circle(vector, 5);

circle.draw();
circle.resize(2);
circle.draw();
