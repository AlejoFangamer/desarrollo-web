let imc, estado;

const calculadora = document.querySelector("#calculadora");

const pesoInput = document.querySelector("#int_peso");
const alturaInput = document.querySelector("#int_altura");

const botonInput = document.querySelector("#btn");

const resultado = document.createElement("p");
calculadora.appendChild(resultado);

function rango(rango1, rango2) {
  return imc >= rango1 && imc <= rango2;
}

botonInput.addEventListener("click", () => {
  let peso = pesoInput.value;
  let altura = alturaInput.value;
  imc = peso / altura ** 2;

  if (peso === "" || altura === "") {
    return false;
  }

  if (imc < 18.5) {
    estado = "Por debajo";
  } else if (rango(18.5, 24.9)) {
    estado = "Peso normal";
  } else if (rango(25, 29.9)) {
    estado = "Sobrepeso";
  } else if (rango(30, 34.9)) {
    estado = "Obesidad 1";
  } else if (rango(35, 39.9)) {
    estado = "Obesidad 2";
  } else if (imc >= 40) {
    estado = "Obesidad 3";
  } else {
    estado = "tas bien supongo ";
  }

  resultado.textContent = `tu IMC es de : ${imc.toFixed(2)} , ${estado}`;
  pesoInput.value = "";
  alturaInput.value = "";
});
