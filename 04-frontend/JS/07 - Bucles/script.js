let contador = 0;

// //ciclo while
// while (contador < 50) {
//   if (contador%2== 0){
//     console.log(contador);
//   }
//   contador++
// }

// //ciclo do-while
// do {
//   if (contador % 2 == 0) {
//     console.log(contador);
//   }
//   contador++;
// } while (contador < 10)

//ciclo for
// for (let papa = 2; papa <= 50; papa++){
//   if (papa % 2==0){
//     console.log(papa)
//   }
// }

///RETOS

//1
console.log("RETO 1");

for (let papa = 2; papa <= 20; papa+=2) {
  console.log(papa)
}

//2

console.log("RETO 2");

for (let papa = 1; papa <= 15; papa += 2) {
  console.log(papa);
}

//3

console.log("RETO 3");

for (let papa = 1; papa <= 20; papa++) {
  if (papa % 2 == 0) {
    console.log(`${papa} es par`);
  } else {
    console.log(`${papa} es impar`);
  }
}

//4

console.log("RETO 4");

let cont = 0;

for (let papa = 1; papa <= 100; papa++) {
  cont += papa;
  console.log(cont)
}

// for (let papa = 1; papa <= 100; papa++) {
//   console.log(papa+papa);
// }
