//! if básico  → Condicionales 

let totalPedido = 20000;
if (totalPedido > 50000){
    console.log("Domi gratis ");  
}

//! if con else 

let totalPedido2 = 30000;
if (totalPedido2 > 50000) {
  console.log("Domicilio GRATIS ");
} else {
  console.log("Domicilio: $5.000");
}


//if y else if

let totalPedido = 90000;


if (totalPedido > 80000) {
  console.log("Domicilio GRATIS + bono ");
} else if (totalPedido > 50000) {
  console.log("Domicilio GRATIS ");
} else {
  console.log("Domicilio: $5.000");
}


// ciclo while

let repartidoresLibres = 1;

while (repartidoresLibres <= 3) {
  console.log("Repartidor #" + repartidoresLibres + " disponible");
  repartidoresLibres = repartidoresLibres + 1;
}


// array con condicion for

let carrito = ["Arroz", "Pollo", "Gaseosa"];

for (let i = 0; i < carrito.length; i++) {
  console.log("Producto: " + carrito[i]);
}


// array - ciclo for - condicional if
let carrito = [
  { nombre: "Arroz", precio: 8000 },
  { nombre: "Pollo", precio: 25000 },
  { nombre: "Gaseosa", precio: 6000 }
];

 
for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].precio > 20000) {
    console.log(carrito[i].nombre + " es un producto caro ");
  } else {
    console.log(carrito[i].nombre + " tiene buen precio ");
  }
}