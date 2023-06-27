var persona = {
  nombre: "Cca",
  edad: "50",
  saludar: function () {
    return "Orale putos, ya es martees , AAAAAAAAAAAAAAAA";
  },
  despedirse() {
    return "pa ya , pa ca , y mueve la lupa lora";
  },
};

var computadora = {
  usuario: "Alejandrito Bonito",
  win: "Windows 10 Enterprise",
  cpu: "AMD RYZEN 5",
  ram: "32gb DDR4",
  precio() {
    return "el precio total de la compu fueron $1000 " + this.win;
  },
  fps() {
    return "tienes 60 fps";
  },
};
