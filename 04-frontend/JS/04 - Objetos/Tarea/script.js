// Definir el objeto de la mascota
const mascota = {
  nombre: "nulo",
  energia: 100,
  hambre: 50,
  color: "naranja",
  estadoEmocional: "Feliz",
  habilidades: ["Dar la pata", "Dar una vuelta", "Perseguir la pelota"],
  vivo: true,
  jugar() {
    if (this.energia <= 0) {
      return "¡No tengo suficiente energía para jugar!";
    } else {
      this.energia -= 20;
      this.hambre++;
      return "Estoy jugando" + "|| Nivel de energía: " + this.energia;
    }
  },
  comer() {
    if (this.hambre <= 0) {
      return "No tengo hambre en este momento";
    } else {
      this.hambre -= 20;
      this.energia += 10;
      return "Estoy comiendo" + "|| Nivel de hambre: " + this.hambre;
    }
  },
  descansar() {
    if (this.energia >= 100) {
      return "Tengo suficiente energia, no quiero descansar";
    } else {
      this.energia += 10;
      return "Estoy descansando" + "|| Nivel de energía: " + this.energia;
    }
  },
  estado() {
    return (
      "Nivel de energía: " +
      this.energia +
      "\nNivel de hambre: " +
      this.hambre +
      "\nColor: " +
      this.color +
      "\nEstado Emocional: " +
      this.estadoEmocional +
      "\nHabilidades: " +
      this.habilidades +
      "\nMascota viva: " +
      this.vivo
    );
  },
  nombreInicial() {
    var mascota_nomb = prompt("Cual es el nombre de tu mascota ?");
    this.nombre = mascota_nomb;
    console.log("Mi mascota se llama " + mascota_nomb);
    document.write(this.nombre);
  }
};

// Probar el simulador
console.log("Bienvenido al simulador de mascota");
mascota.nombreInicial();
console.log(mascota.estado());

console.log("comandos funciones: jugar,comer,descansar,estado")
console.log("comandos estadisticas: color,estadoEmocional,habilidades,hambre,energia,nombre,vivo");

mascota.habilidades.push("Hanatarash")