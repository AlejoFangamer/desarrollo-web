class Vehiculo {
  constructor(Marca, Modelo, Año, Estado) {
    this.marca = Marca;
    this.modelo = Modelo;
    this.año = Año;
    this.estado = Estado;
  }
  obtenerDetalles() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Año: ${this.año}`);
    console.log(`Estado: ${this.estado}`);
  }
  descontinuar() {
    console.log("Este producto se ha descontinuado!");
    this.estado = "Descontinuado";
  }
  enVenta() {
    console.log("Este producto se ha puesto en venta!");
    this.estado = "En venta";
  }
}

class Automovil extends Vehiculo {
  constructor(Marca, Modelo, Año, Estado, Puertas) {
    super(Marca, Modelo, Año, Estado);
    this.puertas = Puertas;
  }
  obtenerDetalles() {
    super.obtenerDetalles();
    console.log(`Puertas: ${this.puertas}`);
  }
}

class Motocicleta extends Vehiculo {
  constructor(Marca, Modelo, Año, Estado, Puertas) {
    super(Marca, Modelo, Año, Estado);
    this.cilindrada = Puertas;
  }
  obtenerDetalles() {
    super.obtenerDetalles();
    console.log(`Cilindrada: ${this.cilindrada} cm3`);
  }
}

let raccon = new Automovil("Renault", "Raccoon", 1992, "Descontinuado", 1);
let biz = new Motocicleta("Honda", "Biz", 1998, "En Venta", 125);

raccon.obtenerDetalles();
biz.obtenerDetalles();

biz.descontinuar();
