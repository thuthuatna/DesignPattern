class Drink {
  cosume() {
    console.log('This is drink class');
  }
}

class Tea extends Drink {
  cosume() {
    console.log('This is Tea');
  }
}

class Coffee extends Drink {
  cosume() {
    console.log('This is Coffee');
  }
}

//Make Drink Factory
class DrinkFactory {
  prepare() {
    console.log('a');
  }
}

class TeaFactory extends DrinkFactory {
  makeTea() {
    console.log('Tea created');
    return new Tea();
  }
}

class CoffeeFactory extends DrinkFactory {
  makeTea() {
    console.log('Coffee created');
    return new Coffee();
  }
}

// Add this is how we can use it
let teaDrinkFactory = new TeaFactory();
let tea = teaDrinkFactory.makeTea();
tea.cosume();
