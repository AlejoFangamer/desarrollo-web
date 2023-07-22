const btn = document.querySelector("#btnEstudiante"),
  input = document.querySelector("#estudiante");

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function agregarEstudiante() {
  const lista = document.querySelector("ul");
  const list_content = Array.from(lista.children);

  const estudianteExiste = list_content.some(
    (estudiante) =>
      estudiante.textContent.toLowerCase() === input.value.toLowerCase()
  );

  if (input.value != "" && !estudianteExiste) {
    const lista_elemento = document.createElement("li");
    lista_elemento.textContent = capitalizeFirstLetter(input.value);
    lista.appendChild(lista_elemento);
    input.value = "";
  }
}

btn.addEventListener("click", agregarEstudiante);
