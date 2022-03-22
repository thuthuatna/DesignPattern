// This pattern allows classes with incompatible interfaces
// to work together by wrapping their own interface around existing class

class Calculator1 {
  constructor() {
    this.operations = function (value1, value2, operation) {
      switch (operation) {
        case 'add':
          return value1 + value2;
        case 'sub':
          return value1 - value2;
      }
    };
  }
}

class Calculator2 {
  constructor() {
    this.add = function (value1, value2) {
      return value1 + value2;
    };
    this.sub = function (value1, value2) {
      return value1 - value2;
    };
  }
}

// Let's create adapter class
class CalcAdapter {
  constructor() {
    let cal2 = new Calculator2();
    this.operations = function (value1, value2, operation) {
      switch (operation) {
        case 'add':
          return cal2.add(value1, value2);
        case 'sub':
          return cal2.sub(value1, value2);
      }
    };
  }
}

// Let's use all these combined

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 55, 'sub'));
