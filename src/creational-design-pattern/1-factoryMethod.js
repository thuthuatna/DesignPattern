CoordinateSystem = {
  CARTESIAN: 0,
  POLAR: 1,
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.truxy = y;
  }

  // khong can thiet
  static get factory() {
    return new PointFactory();
  }
}

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }
  static newPolarPoint(rho, theta) {
    return new Point(rho * rho, theta * theta);
  }
}

let point = PointFactory.newCartesianPoint(2, 3);
let point2 = PointFactory.newPolarPoint(2, 3);
console.log('point: ', point);
console.log('point2: ', point2);
