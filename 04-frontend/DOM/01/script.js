const doc = document.getElementsByTagName('li')

console.log(doc[0]);

// const substitulo = document.createElement("h3");

// const texto = document.createTextNode("esto es un subtitulo");

const listaEstudiantes = document.querySelector("ul");

const andres = document.createElement("li");

const andres_text = document.createTextNode("Andres");

andres.appendChild(andres_text);

listaEstudiantes.appendChild(andres);

document.querySelector("ul").innerHTML += "<li>Andres</li>";