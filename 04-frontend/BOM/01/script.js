const abrirVentana = document.querySelector("#btn_abrir");
let ventana;

abrirVentana.addEventListener("click", () => {
  console.log("Abriste una ventana :0");
  ventana = open("https://github.com/AlejoFangamer/desarrollo-web");
});

const cerrarVentana = document.querySelector("#btn_cerrar");
cerrarVentana.addEventListener("click", () => {
  if (ventana) {
    console.log("Cerraste una ventana :0");
    ventana.close();
    ventana = "";
  }
});

const imprimir = document.querySelector("#btn_imprimir");
imprimir.addEventListener("click", () => {
  console.log("Imprimiste Una Ventana :0");
  print();
});


console.log(navigator)
// console.log(abrirVentana);
// console.log(cerrarVentana);
// console.log(imprimir);
