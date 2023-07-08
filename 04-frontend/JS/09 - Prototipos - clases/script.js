function Persona(nombre,edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function () {
  return "Hola soy " + this.nombre;
};

Persona.prototype.cumplir = function () {
  this.edad++;
  return this.edad;
};

const Lorena = new Persona("Lorena",16);

console.log(Lorena);
