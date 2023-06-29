let numero = null;

function resultado() {
  if (numero % 2 == 0) {
    console.log(numero + " es un numero PAR");
  } else {
    console.log(numero + " es un numero IMPAR");
  }

  if (numero % 3 == 0 && numero % 5 == 0) {
    console.log("FizzBuzz");
  } else if (numero % 3 == 0) {
    console.log("Fizz");
  } else if (numero % 5 == 0) {
    console.log("Buzz");
  }
}

function nuevo_numero(num) {
  numero = num;
  resultado();
}
