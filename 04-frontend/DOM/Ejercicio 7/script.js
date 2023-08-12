const d = document;

d.addEventListener("DOMContentLoaded", () => {
  function leerFetch() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((resp) => {
        for (const a of resp) {
          const lista = d.querySelector("#lista");
          const contenedor = d.createElement("li");

          const contenedor_post = d.createElement("div");

          const [titulo, comentario] = [
            d.createElement("h2"),
            d.createElement("p"),
          ];

          contenedor_post.className = "post";

          comentario.textContent = a.body;
          titulo.textContent = a.title;

          const [
            imagen_id,
            contenedor_numero_id,
            contenedor_numero,
            numero_id,
          ] = [
            d.createElement("img"),
            d.createElement("div"),
            d.createElement("div"),
            d.createElement("p"),
          ];

          imagen_id.className = "imagen-usuario";
          contenedor_numero_id.className = "num_id";
          contenedor_numero.className = "num";

          numero_id.textContent = a.id;
          imagen_id.src = "Icono.png";

          contenedor_numero_id.append(numero_id);
          contenedor_numero.append(imagen_id, contenedor_numero_id);

          contenedor_post.append(titulo, comentario);

          contenedor.append(contenedor_numero, contenedor_post);
          lista.append(contenedor);
        }
      })
      .catch((erno) => {
        const main = d.querySelectorAll(".error");
        const mensaje = d.querySelector("#error-mensaje");

        main.forEach((error) => {
          error.style.display = "flex";
        });

        mensaje.textContent = `${erno}`;
      });
  }

  const generarLista = async function () {
    await leerFetch();
  };
  generarLista();
});
