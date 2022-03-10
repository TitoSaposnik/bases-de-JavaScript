//Array Methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

const carrito = [
    {nombre: "Televisor", precio:400},
    {nombre: "Monitor", precio:450},
    {nombre: "Celular", precio:500},
    {nombre: "Tablet", precio:450},
    {nombre: "Notebook", precio:1400},
    {nombre: "Pc Gamer", precio:4400},
]

//forEach
meses.forEach(function(mes){
    if (mes == "Enero"){
        console.log("Ese mes si esta en el array")
    }
});

//Includes: Comprueba si un elemento existe en el array
const resultado = meses.includes("Junio")
console.log(resultado)

//Some: ideal para arrays de objets
const resultado2 = carrito.some(function(producto){
    return producto.nombre === "Pc Gamer"
})
console.log(resultado2)

//Reduce, suma elementos a un solo elemento
let sumaPrecio = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);
console.log(sumaPrecio)

//Filter: filtra los elementos para mostrar lo que deseamos
let resultado3 = carrito.filter(function(producto){
    return producto.precio > 1000
})

let resultado4 = carrito.filter(function(producto){
    return producto.precio !== 450
})
console.log(resultado4)