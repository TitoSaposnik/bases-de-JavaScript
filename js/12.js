"use strict"; //Corre js de manera estricta

const producto = {
    nombreProducto : "Monitor Gamer 22\"",
    precio : 360,
    stock : true
}

Object.freeze(producto); //bloquea el objeto para que no se pueda agregar mas propiedades.
console.log(Object.isFrozen(producto)); //Muestra si un objeto esta sellado

Object.seal(producto); // tambien sella el objeto, pero a diferencia del freeze, Seal si deja modificar el valor de las propiedades ya existentes.

console.log(producto)