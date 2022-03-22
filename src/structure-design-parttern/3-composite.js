// It composes objects so that they can be manipulated as single objects.

class Employer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  print() {
    console.log('name: ', this.name, ' relexTime. ');
  }
}

// Creating group employer
class EmployerGroup {
  constructor(name, composite = []) {
    console.log(name);
    this.name = name;
    this.composites = composite;
  }
  print() {
    this.composites.forEach((emp) => {
      emp.print();
    });
  }
}

// Let's use these class
let ravi = new Employer('ravi', 'developer');
let bhavy = new Employer('bhavy', 'developer');
let groupDevelopers = new EmployerGroup('Developers', [ravi, bhavy]);
groupDevelopers.print();
