class Coffe extends Beverage {
  constructor(size, temperature, hasCaffeine, howYouTakeIt) {
    super(size, temperature);
    this.hasCaffeine = hasCaffeine;
    this.howYouTakeIt = howYouTakeIt;
  }
  drink() {
    if (this.temperatue != "scalding") {
      console.log("Now drinking coffee");
    }
  }
}
