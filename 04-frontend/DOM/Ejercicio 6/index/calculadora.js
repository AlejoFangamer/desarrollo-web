const d = document;

const pantalla = d.querySelector(".pantalla");
const botonNumero = d.querySelectorAll(".btn-calculadora");

botonNumero.forEach((boton) => {
  boton.addEventListener("click", () => {
    let numero = boton.textContent;

    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch (error) {
        pantalla.textContent = "Erno!";
      }

      return;
    }

    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") {      
      if (pantalla.textContent === "" || pantalla.textContent === "error") {
        pantalla.textContent = "0";
      }else{
          pantalla.textContent = pantalla.textContent.slice(0, -1);
      }

      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "error") {
      pantalla.textContent = numero;
    } else {
      pantalla.textContent += numero;
    }
  });
});
