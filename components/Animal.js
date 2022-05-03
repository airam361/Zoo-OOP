import Helpers from "./Helpers.js";

class Animal {
  constructor(type, gender) {
    this.type = type;
    this.gender = gender;
    this.id = Helpers.idGenerator();
  }

  render(renderHook) {
    const animal = document.createElement("div");
    animal.className = "card__img-wrapper";
    if (this.gender === "f") {
      animal.style.backgroundColor = "#FFAFCC";
    } else {
      animal.style.backgroundColor = "#BDE0FE";
    }
    const img = document.createElement("img");
    img.src = this.imgSrc;
    animal.append(img);
    renderHook.append(animal);
  }
}

export default Animal;
