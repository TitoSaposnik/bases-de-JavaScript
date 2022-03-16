//Programacion Orientada a Objetos.

//Object Literal
const producto = {
    nombre:"Monitor",
    precio:300
}

//Object Constructor
function Producto (nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock
}

const item = new Producto("Laptop",1020, true)
const item2 = new Producto("Monitor",550, true)
const item3 = new Producto("Teclado",310, true)
const item4 = new Producto("Parlantes",220, false)
const item5 = new Producto("Mouse",160, true)
console.log(item)
console.log(item2)
console.log(item3)
console.log(item4)
console.log(item5)

//Prototype: crear funciones que se utilizan en un objeto en especifico.
function Cliente (nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}`
}
const cliente1 = new Cliente ("Tito","Saposnik")
console.log(cliente1.formatearCliente())

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de $${this.precio}. Stock disponible: ${this.stock}`
}
console.log(item4.formatearProducto())
console.log(item5.formatearProducto())