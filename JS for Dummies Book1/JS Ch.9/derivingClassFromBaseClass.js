class Beverage {
  constructor(size, temperature) {
    this.size = size;
    this.temperatue = temperature;
  }
}

class Coffee extends Beverage {
  constructor(size, temperature, hasCaffeine, howYouTakeIt) {
    super(size, temperature);
    this.hasCaffeine = hasCaffeine;
    this.howYouTakeIt = howYouTakeIt;
  }
}

const morningCoffee = new Coffee("64oz", "hot", true, "black");
console.log(morningCoffee);
