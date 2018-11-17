import "../_scss/main.scss";
import "./webfonts.js";
import "./navbar.js";
import "./sidebar.js";


if (module.hot) {
  import("./dev.js");
  module.hot.accept();
}

