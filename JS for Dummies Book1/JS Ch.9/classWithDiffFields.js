class Cat {
  static species = "Felis Catus";
  #isSleeping;
  paws = 4;
  sound = "Meow";

  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
  }
  static herd() {
    throw new Error(`You can't do that!`);
  }
  play() {
    console.log(`Playing with ${this.favoriteToy}.`);
    this.#takeNap();
  }
  #takeNap() {
    this.#isSleeping = true;
  }
}

const cat1 = new Cat("Mr.Furly", "tinfoil");
const cat2 = new Cat("Sparky", "box");

class shortHair extends Cat {
  fur = "short";

  constructor(name, favoriteToy) {
    super(name, favoriteToy);
  }
}
