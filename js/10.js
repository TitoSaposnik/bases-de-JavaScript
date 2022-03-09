//Objetos

const nombreProducto = "Monitor Gamer 22\"";
const precio = 360;
const stock = true;

const producto = {
    nombreProducto : "Monitor Gamer 22\"",
    precio : 360,
    stock : true
}

console.log(producto.precio) // de esta manera accedemos a la propiedad que queremos acceder
console.log(producto["stock"])// de esta menera tambien accedemos pero es menos utilizada.

//Agregar una propiedad al objeto
producto.descuentoOferta = "-20%";

//Eliminar una propiedad al objeto
delete producto.stock;

console.log(producto)