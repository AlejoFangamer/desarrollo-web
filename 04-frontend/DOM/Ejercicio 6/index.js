
import { reloj } from "./index/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  console.log("Holi el DOM se ha cargado");
  menuHamburguesa()
  reloj();
});