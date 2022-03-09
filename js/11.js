//Extraer  valor de las propiedades
const producto = {
    nombreProducto : "Monitor Gamer 22\"",
    precio : 360,
    stock : true
}

//Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto)
console.log(nombreProducto)

//Destructuring
const {precio, stock} = producto; //creamos la variable y extraemos su valor en un solo paso

console.log(precio)
console.log(stock)