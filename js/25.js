const carrito = [
    {nombre: "Televisor", precio:400},
    {nombre: "Monitor", precio:450},
    {nombre: "Celular", precio:500},
    {nombre: "Tablet", precio:450},
    {nombre: "Notebook", precio:1400},
    {nombre: "Pc Gamer", precio:4400},
    {nombre: "Teclado", precio:200},
    {nombre: "Parlantes", precio:250},
]

//forEach: cuando quiera mostrar algo por consola o imprimir en el html usar el forEach
carrito.forEach(function(producto){
    console.log(producto.nombre)
})
//forEach + Arrow function
carrito.forEach(producto => console.log(producto.precio))

//map: cuando quiera crear un nuevo arrego, sin tocar el original uso map
carrito.map(function(producto){
    console.log(`Usando .map "${producto.nombre}"`)
})
//map + arrow function
carrito.map(producto => console.log(producto.precio))