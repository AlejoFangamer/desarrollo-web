export function menuHamburguesa(boton,menu) {
  const botonE = document.querySelector(boton);
  const menuE = document.querySelector(menu);
  document.addEventListener("click", (e) => {
    if (e.target.matches(`${boton}`) || e.target.matches(`${boton} *`)) {
      document.querySelector(`${boton}`).classList.toggle("is-active");
      document.querySelector(`${menu}`).classList.toggle("is-active");
    }

    if (e.target.matches("a")) {
      document.querySelector(`${boton}`).classList.remove("is-active");
      document.querySelector(`${menu}`).classList.remove("is-active");
    }
  });
}

// const hamburger = document.querySelector(".hamburger");
// const menu = document.querySelector(".menu-lateral");
// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("is-active");
//   menu.classList.toggle("is-active");
// });
