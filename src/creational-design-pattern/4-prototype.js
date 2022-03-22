// It creates new objects from the existing objects.

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  setName(name) {
    console.log(`${name}`);
    this.name = name;
  }

  get getname() {
    return this.name;
  }
  clone() {
    return new Car(this.name, this.model);
  }
}

// And this is how to we will use it
let car = new Car();
car.setName('Audi');

let car2 = car.clone();
car2.setName('BMW');

console.log(car.getname, car2.getname);
