const d = document;

d.addEventListener("DOMContentLoaded", () => {
  function ajustarTamañoNumeros() {
    const cuadros = d.querySelectorAll(".num");
    cuadros.forEach((cuadro) => {
      const numero = cuadro.querySelector(".num_id");
      const cuadroWidth =
        cuadro.clientWidth -
        (parseFloat(getComputedStyle(cuadro).paddingLeft) +
          parseFloat(getComputedStyle(cuadro).paddingRight));
      const numeroWidth = numero.scrollWidth;

      if (numero.scrollWidth > cuadroWidth) {
        const nuevaEscala = cuadroWidth / numeroWidth;
        numero.style.transform = `scaleX(${nuevaEscala})`;
      } else {
        numero.style.transform = "scaleX(1)";
      }
    });
  }

  function leerFetch() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((data) => data.json())
      .then((resp) => {
        for (const a of resp) {
          const lista = d.querySelector("#lista");

          const contenedor = d.createElement("li");
          const nombre = d.createElement("h1");
          const comentario = d.createElement("p");
          const contenedor_numero = d.createElement("div");
          const contenedor_numero_id = d.createElement("div");
          const numero_id = d.createElement("p");

          contenedor_numero_id.className = "num_id";
          contenedor_numero.className = "num";

          numero_id.textContent = a.id*2;
          comentario.textContent = a.body;
          nombre.textContent = a.name;

          contenedor_numero_id.append(numero_id);
          contenedor_numero.append(contenedor_numero_id);
          contenedor.append(contenedor_numero, nombre, comentario);
          lista.append(contenedor);
        }
        ajustarTamañoNumeros();
      })
      .catch((erno) => {
        const main = d.querySelector("#comentarios");
        const mensaje = d.createElement("h2");
        mensaje.textContent = `Lo sentimos, no hemos encontramos la información ${erno}`;
        main.append(mensaje);
      });
  }

  const generarLista = function () {
    leerFetch();
  };
  generarLista();
});
