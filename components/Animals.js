import Animal from "./Animal.js"

class Bear extends Animal {
  imgSrc = "./images/bear.png";
  constructor(gender) {
    super("bear", gender);
  }
}

class Elephant extends Animal {
  imgSrc = "./images/elephant.png";
  constructor(gender) {
    super("elephant", gender);
  }
}

class Fox extends Animal {
  imgSrc = "./images/fox.png";
  constructor(gender) {
    super("fox", gender);
  }
}

class Giraffe extends Animal {
  imgSrc = "./images/giraffe.png";
  constructor(gender) {
    super("giraffe", gender);
  }
}

class Koala extends Animal {
  imgSrc = "./images/koala.png";
  constructor(gender) {
    super("koala", gender);
  }
}

class Monkey extends Animal {
  imgSrc = "./images/monkey.png";
  constructor(gender) {
    super("monkey", gender);
  }
}

class Penguin extends Animal {
  imgSrc = "./images/penguin.png";
  constructor(gender) {
    super("penguin", gender);
  }
}

class Turtle extends Animal {
  imgSrc = "./images/turtle.png";
  constructor(gender) {
    super("turtle", gender);
  }
}


export {Bear, Elephant, Fox, Giraffe, Koala, Monkey, Penguin, Turtle}