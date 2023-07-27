const app = document.getElementById("app");

const h1 = document.createElement("h1");
h1.textContent = "Los Gatos";
h1.className = "titulo";

const p = document.createElement("p");
p.textContent =
  "Los gatos son animales domésticos que se caracterizan por su elegancia,agilidad y carácter independiente. Son mascotas muy populares en todo el mundo.";
p.className = "descripcion";

const img = document.createElement("img");
img.alt = "Gato";
img.src = "https://http.cat/images/200.jpg";
img.className = "imagen-gato";

const h2 = document.createElement("h2");
h2.textContent = "Razas de Gatos";
h2.className = "titulo";

const ul = document.createElement("ul");
ul.className = "razas-gatos";

let razas = ["Persa", "Siames", "Maine Coon", "Bengalí"];
let lista = [];

for (let i = 0; i < razas.length; i++) {
  const li = document.createElement("li");
  li.textContent = razas[i];
  li.className = "descripcion";
  lista.push(li);
}

ul.append(...lista);
app.append(h1, p, img, h2, ul);

img.style.border = "80px solid red";
img.classList.add("nueva-clase");
img.style.borderRadius = "50px";

console.log("si");