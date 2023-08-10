const d = document;

const lista_c = d.querySelector("#comentarios");
const ul = d.createElement("ul");

let lista_comentarios = [];

function CrearUsuario(num_usuario) {
  const url = `https://jsonplaceholder.typicode.com/comments/${num_usuario}`;
  fetch(url)
    .then((info) => info.json())
    .then((response) => {
      const comentario = d.createElement("li");

      const usuario_nombre = d.createElement("h2");
      const usuario_comentario = d.createElement("p");

      usuario_nombre.textContent = response.name;
      usuario_comentario.textContent = response.body;

      comentario.append(usuario_nombre, usuario_comentario);

      ul.append(comentario);
    })
    .catch((error) => console.log("se cagó"));
}

async function CrearListaEntera() {
  for (let index = 0; index <= 3; index++) {
    await CrearUsuario(index);
  }
  lista_c.append(ul);
}

CrearListaEntera();
