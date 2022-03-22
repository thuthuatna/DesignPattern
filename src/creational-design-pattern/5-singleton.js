//It ensures that there’s only one object created for a particular class.

class Singleton {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
  say() {
    console.log('saying...');
  }
}

// let's use the singleton we created
let s1 = new Singleton();
let s2 = new Singleton();

console.log('are the same ? ' + (s1 === s2));
s1.say();
