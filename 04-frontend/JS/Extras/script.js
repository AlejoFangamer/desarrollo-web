let numeros = [5, 2, 1, 9, 8, 4, 7];

function Numero_Mayor(Lista) {
  let mayor_actual = Lista[0];
  if (Array.isArray(Lista) && Lista.length > 1) {
    for (let i = 0; i < Lista.length; i++) {
      if (Lista[i] >= mayor_actual) {
        mayor_actual = Lista[i];
      }
    }
    return mayor_actual;
  } else {
    return `Puto ${Lista} no es un Array XDXDXDXDDXDDXDXD`;
  }
}

console.log(Numero_Mayor(numeros));
console.log(numeros)
