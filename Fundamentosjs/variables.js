
var saldo = 100;
if (saldo > 50) {
  var saldo = 999;
}
console.log(saldo);


let saldo = 100;
saldo = 500;
if (saldo > 50) {  // todo lo que este dentro de estas llaves {} es privado
  let saldo = 999;  
  console.log(saldo);
}
console.log(saldo);
 
// declaro y asigno valor a la variable
let usuario = "Ana";
console.log(usuario);

// asigno valor a la variable
usuario = "pepito";
console.log(usuario);

// declaro la variable
let nombre;


const IVA = 0.19; // POR BUENAS PRACTICAS ESTA VARIABLE EN MAYUSCULA
console.log("El valor del IVA es:" + IVA);

IVA = 0.16;// ESTO GENERA ERROR, LA CONSTANTE NO SE LE PUEDE ASIGNAR OTRO VALOR
console.log(IVA);


