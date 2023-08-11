const d = document;

d.addEventListener("DOMContentLoaded", () => {
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
          const numero_id = d.createElement("p");

          numero_id.textContent = a.id;
          numero_id.className = "num_id";
          contenedor_numero.className = "num";
          comentario.textContent = a.body;
          nombre.textContent = a.name;
          contenedor_numero.appendChild(numero_id);
          contenedor.append(contenedor_numero, nombre, comentario);
          lista.append(contenedor);
        }
      });
  }

  const generarLista = async function () {
    await leerFetch();
  };

  generarLista();

  const cuadros = document.querySelectorAll(".num");

  const ajustarTamañoNumeros = () => {
    cuadros.forEach((cuadro) => {
      const numero = cuadro.querySelector(".num_id");
      const cuadroWidth = cuadro.clientWidth;
      const fontSize = parseFloat(window.getComputedStyle(numero).fontSize);

      if (numero.scrollWidth > cuadroWidth) {
        const nuevoFontSize = fontSize * (cuadroWidth / numero.scrollWidth);
        numero.style.fontSize = nuevoFontSize + "px";
      }
    });
  };

  ajustarTamañoNumeros();
  window.addEventListener("resize", ajustarTamañoNumeros);
});
