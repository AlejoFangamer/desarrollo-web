let peso = 91;
let altura = 1.70;

let imc = peso/altura**2;
console.log(imc);

if (imc < 18.5) {
  console.log("Por debajo");
}else if (rango(18.5,24.9)) {
  console.log("Peso normal")
}else if (rango(25,29.9)) {
  console.log("Sobrepeso")
}else if (rango(30,34.9)) {
  console.log("Obesidad 1")
}else if (rango(35,39.9)) {
  console.log("Obesidad 2");
}else if (imc >= 40) {
  console.log("Obesidad 3");
}else{
  console.log("tas bien supongo ")
}

function rango(rango1,rango2){
  return imc >= rango1 && imc <= rango2 == true;
}