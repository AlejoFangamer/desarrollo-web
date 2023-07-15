// const substitulo = document.createElement("h3");

// const texto = document.createTextNode("esto es un subtitulo");

const listaEstudiantes = document.querySelector("ul");
const eleis = document.createElement("h1");
eleis.textContent = "Seso ";

const al = document.querySelector("#a");

eleis.style.color = "rgb(180,80,70)";

listaEstudiantes.insertAdjacentElement("beforebegin",eleis);