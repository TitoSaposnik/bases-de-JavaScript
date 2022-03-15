// For Loop
for (let i = 0; i<=5; i++){
    console.log(`Numero ${i}`)
}

for (let i = 1; i<=10; i++){
    if(i%2===0){
        console.log(`El numero ${i} es par`)
    }else{
        console.log(`El numero ${i} es impar`)
    }
}

const carrito = [
    {nombre: "Televisor", precio:400},
    {nombre: "Monitor", precio:450},
    {nombre: "Celular", precio:500},
    {nombre: "Tablet", precio:450},
    {nombre: "Notebook", precio:1400},
    {nombre: "Pc Gamer", precio:4400},
]

for (let i = 0; i < carrito.length; i++){
    console.table(carrito[i].nombre, carrito[i].precio)
}
// While Loop

// Do while Loop
