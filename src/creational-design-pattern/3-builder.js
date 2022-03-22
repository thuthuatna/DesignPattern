class Person {
  constructor() {
    this.streetAddress = this.postcode = this.city = '';
    this.companyName = this.position = '';
    this.annualIncome = 0;
  }
  toString() {
    return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode} and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`;
  }
}

const user = new Person();
user.streetAddress = 'duong lang';
user.postcode = 1000;
user.city = 'ha noi';
console.log(user.toString());

//It constructs complex objects from simple objects.
class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }
  get lives() {
    return new PersonAddressBuilder(this.person);
  }
  get works() {
    return new PersonJobBuilder(this.person);
  }
  get build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }
  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }
  asA(position) {
    this.person.position = position;
    return this;
  }
  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }
  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }
  withPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }
  inn(city) {
    this.person.city = city;
    return this;
  }
}

let personBuilder = new PersonBuilder();
let person = personBuilder.lives
  .at('cau giay')
  .inn('ha noi')
  .withPostcode(1000)
  .works.at('BBfast')
  .asA('nhan vien quen')
  .earning(1001).build;

console.log(person.toString());
