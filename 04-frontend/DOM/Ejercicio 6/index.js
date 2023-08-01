import { menuHamburguesa } from "./index/menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  console.log("Holi el DOM se ha cargado");
  menuHamburguesa(".menu-btn", ".menu-lateral");
});

window.addEventListener("load",
  function () {
    document.getElementsByTagName("html")[0].replaceChild(
        extern.getElementsByTagName("body")[0],
        document.getElementsByTagName("body")[0]
      );
  },
  false
);
