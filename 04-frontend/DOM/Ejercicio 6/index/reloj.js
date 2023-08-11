const d = document;
let relojTiempo , relojHora;


function reloj(reloj,btnActivar,btnDesactivar) {
  d.addEventListener("click",(e) => {
    
    if (e.target.matches(btnActivar)){
      e.target.disabled = true;
      relojTiempo = setInterval(() => {
        relojHora = new Date().toLocaleTimeString();
        d.querySelector(reloj).textContent = relojHora;
      }, 1 * 1000);
    }

    if (e.target.matches(btnDesactivar)) {
      //console.log("D:");
      d.querySelector(btnActivar).disabled = false;
      d.querySelector(reloj).textContent = "";
      clearInterval(relojTiempo);
      console.clear();
      relojTiempo = null;
    }
  })
}
reloj("#reloj","#btn-activar","#btn-detener")