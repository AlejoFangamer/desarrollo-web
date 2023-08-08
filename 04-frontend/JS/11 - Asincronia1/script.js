function llegar() {
  console.log("llegar")
}

function esperar(callback) {
  console.log("esperar");
  setTimeout(() => {
    callback();
  },2000)
}

function irse() {
  console.log("irse")
}

llegar();
esperar(irse);