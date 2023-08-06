export function calculadoraIMC() {
  let imc, estado, color, peso, altura;

  const espacio = document.querySelector("#resultados");

  const pesoInput = document.querySelector("#int_peso");
  const alturaInput = document.querySelector("#int_altura");

  const botonInput = document.querySelector("#btn");

  const resultadoIMC = document.querySelector("#IMC_num");
  const resultadoEstado = document.querySelector("#IMC_estado");

  const resultado_accion = document.querySelector("#resultados");

  function rango(rango1, rango2) {
    return imc >= rango1 && imc <= rango2;
  }

  botonInput.addEventListener("click", () => {
    // Logica del calculo del IMC
    peso = pesoInput.value;
    altura = alturaInput.value;

    imc = peso / altura ** 2;

    if (imc < 18.5) {
      estado = "Por debajo";
      color = "51BBE9";
    } else if (rango(18.5, 24.9)) {
      estado = "Peso normal";
      color = "51E984";
    } else if (rango(25, 29.9)) {
      estado = "Sobrepeso";
      color = "B0E951";
    } else if (rango(30, 34.9)) {
      estado = "Obesidad #1";
      color = "E9DC51";
    } else if (rango(35, 39.9)) {
      estado = "Obesidad #2";
      color = "E99E51";
    } else if (imc >= 40) {
      estado = "Obesidad #3";
      color = "DC4545";
    } else {
      estado = "tas bien supongo ";
    }

    //Imprimir los resultados
    resultadoIMC.textContent = `tu IMC es de : ${imc.toFixed(2)}`;
    resultadoEstado.textContent = `${estado}`;
    resultadoEstado.style.color = `#${color}`;

    //Aparecer y desaparecer los resultados en caso de haber o no haber algo
    resultado_accion.style.display =
      resultadoIMC.textContent.length < 0 ? "none" : "flex";

    //Resetear valores y Desactivar el boton
    pesoInput.value = "";
    alturaInput.value = "";
    checkInputs();
  });

  // Funcion de checar si algo en los inputs (Trim ayuda a eliminar los caracteres sin contenido (espacio , tabulacion , puntuacion))
  function checkInputs() {
    if (pesoInput.value.trim() !== "" && alturaInput.value.trim() !== "") {
      botonInput.removeAttribute("disabled");
      botonInput.style.opacity = "1";
    } else {
      botonInput.setAttribute("disabled", true);
      botonInput.style.opacity = "0.5";
    }
  }

  // Inicializar la funcion cada que el usuario cambie algo en el input
  pesoInput.addEventListener("input", checkInputs);
  alturaInput.addEventListener("input", checkInputs);

  // Inicializar la funcion cada que inicie la pagina
  checkInputs();
}
