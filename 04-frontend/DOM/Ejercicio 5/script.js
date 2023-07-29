let imc, estado , color;

const espacio = document.querySelector("#resultados");

const pesoInput = document.querySelector("#int_peso");
const alturaInput = document.querySelector("#int_altura");

const botonInput = document.querySelector("#btn");

const resultado = document.createElement("p");
const resultado_estado = document.createElement("h2");
espacio.append(resultado, resultado_estado);

function rango(rango1, rango2) {
  return imc >= rango1 && imc <= rango2;
}

botonInput.addEventListener("click", () => {
  const resultado_accion = document.getElementById("resultados");
  let peso = pesoInput.value;
  let altura = alturaInput.value;
  imc = peso / altura ** 2;

  if (peso === "" || altura === "") {
    return false;
  }

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
    estado = "Obesidad 1";
    color = "E9DC51";
  } else if (rango(35, 39.9)) {
    estado = "Obesidad 2";
    color = "E99E51";
  } else if (imc >= 40) {
    estado = "Obesidad 3";
    color = "DC4545";
  } else {
    estado = "tas bien supongo ";
  }

  resultado.textContent = `tu IMC es de : ${imc.toFixed(2)}`;
  resultado_estado.textContent = `${estado}`;
  resultado_estado.style.color = `#${color}`;
  resultado_accion.classList.toggle("oculto",resultado.textContent.length < 0);
  pesoInput.value = "";
  alturaInput.value = "";
});
