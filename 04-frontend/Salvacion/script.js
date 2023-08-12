const d = document;

const color = ["#D5ECC2", "#FFAAA7", "#F1F0E8"];


window.addEventListener("DOMContentLoaded", () => {
  function fetchPersonajes(personaje) {
    fetch(`https://rickandmortyapi.com/api/character/${personaje}`)
      .then((data) => data.json())
      .then((resp) => {
        resp.forEach((char) => {
          const lista = d.querySelector("#lista");

          const personaje_lista = d.createElement("li");

          const personaje_lista_contenedor = d.createElement("div");
          personaje_lista_contenedor.className = "personaje";

          const personaje_img = d.createElement("img");

          const personaje_contenedor_info = d.createElement("div");
          personaje_contenedor_info.className = "info";

          const personaje_nombre = d.createElement("h2");

          const personaje_estado_contenedor = d.createElement("div");
          personaje_estado_contenedor.className = "estado";
          const personaje_estado = d.createElement("p");

          personaje_img.src = char.image;
          personaje_nombre.textContent = char.name;
          personaje_estado.textContent = char.status;

          switch (char.status) {
            case "Alive":
              personaje_estado_contenedor.style.color = color[0];
              break;

            case "Dead":
              personaje_estado_contenedor.style.color = color[1];
              break;

            default:
              personaje_estado_contenedor.style.color = color[2];
              break;
          }

          personaje_estado_contenedor.append(personaje_estado);

          personaje_contenedor_info.append(
            personaje_nombre,
            personaje_estado_contenedor
          );

          personaje_lista_contenedor.append(
            personaje_img,
            personaje_contenedor_info
          );

          personaje_lista.append(personaje_lista_contenedor);

          lista.append(personaje_lista);
        });
      });
  }

  const generarNumeroDePersonajes = async function (num) {
    let lista = [];
    for (let i = 1; i <= num; i++) {
      await lista.push(i);
    }
    fetchPersonajes(lista);
  };

  generarNumeroDePersonajes(300);
});
