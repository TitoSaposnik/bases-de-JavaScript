const producto = {
    nombreProducto : "Monitor Gamer 22\"",
    precio : 360,
    stock : true
}
const detalle = {
    peso : "2kg",
    color: "gris",
    lote: 2019
}

const nuevoProducto = {...producto, ...detalle}//unimos dos objetos pero sin modificar ninguno

console.log(producto)
console.log(nuevoProducto)