let peso = 90;
let altura = 1.7;
let imc = peso / altura ** 2;
let estado = null;

function rango(rango1, rango2) {
  return (imc >= rango1 && imc <= rango2);
}

function calcular_imc() {
  imc = peso / altura ** 2;

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
  console.log(`tu IMC es de : ${imc.toFixed(2)} , ${estado}`);
}

function nuevo_calculo() {
  peso = prompt("Cual es tu peso ?");
  altura = prompt("Cual es tu altura ?");
  calcular_imc();
}