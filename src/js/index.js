import "../_scss/main.scss";
import "./webfonts.js"


if (module.hot) {
  import("./dev.js");
  console.log(module);
  module.hot.accept();
}

