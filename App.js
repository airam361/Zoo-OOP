import database from "./database.js";
import Header from "./components/Header.js";
import Zoo from "./components/Zoo.js";
import Container from "./components/Container.js";

class App {
  static init(htmlRoot) {
    new Header(htmlRoot, { appName: "My Zoo" });

    new Container(htmlRoot, "zoo");

    new Zoo("zoo", database);
  }
}

window.addEventListener("load", App.init.bind(null, "root"));
