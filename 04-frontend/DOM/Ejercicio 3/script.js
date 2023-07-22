const boton = document.querySelector("#btn");
const todo = document.querySelector("#todo");

function ponerGatoRandom() {
  const ponerGato = document.createElement("img");
  ponerGato.src = "https://http.cat/images/200.jpg";
  ponerGato.style.width = "150px";
  todo.insertAdjacentElement("beforebegin", ponerGato);
}

boton.addEventListener("click", ponerGatoRandom);
