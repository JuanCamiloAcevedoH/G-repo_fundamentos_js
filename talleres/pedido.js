// utilizo let para las variables por que van a cambiar
let cliente1 = "Juan";
let ciudad1 = "Medellin";
let rappiPrime = false;

let cliente2 = "Ana";
let ciudad2 = "Bogota";
let rappiPrime2 = true;

let cliente3 = "Margarita";
let ciudad3 = "Cali";
let rappiPrime3 = true;

//vario la concatenacion con la , y el signo + dependiendo de la necesidad
console.log ("Hola", cliente1 + ",", "tu pedido a domicilio en", ciudad1);
console.log ("Hola", cliente2 + ",", "tu pedido a domicilio en", ciudad2);
console.log ("Hola", cliente3 + ",", "tu pedido a domicilio en", ciudad3);

// en esta seccion utilizo la estructura Array ya que tengo una lista ordenada de cosas del mismo tipo
let productos = ["Hamburguesa", "Papas", "Gaseosa"];
console.log (productos);
console.log (productos [0]);

productos.push ("Postre");
console.log (productos);

productos.pop ();
console.log (productos);

console.log(productos.length);

//utilizo la estructura objeto con el fin de integrar varios tipos de datos
let pedido = {
    cliente1: "Juan",
    ciudad1: "Medellin",
    productos: ["Hamburguesa", "Papas", "Gaseosa"],
    estado: "En preparacion"
}

console.log(pedido);

console.log(pedido.cliente1);

pedido.estado = "En camino";
console.log(pedido);

console.log("tu producto principal es:", pedido.productos[0]);


let valorProducto1 = 15000;
let valorProducto2 = 5000;
let valorProducto3 = 3000;
let domicilio = 10000;
const propina = 0.10;

let subtotal = valorProducto1 + valorProducto2 + valorProducto3 + domicilio;
console.log(subtotal);

let total = subtotal + propina;

console.log(total);

console.log("Total a pagar por el pedido de", cliente1 + ": $", total);
















