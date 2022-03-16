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
// While Loop: evalua la condicion, y si es verdadera, ejecuta el codigo
let i = 1; // indice o valor inicial
while( i <= 100 ){//condicion
    if(i%2===0){
        console.log(`El numero ${i} es par. (Usando while)`)
    }else{
        console.log(`El numero ${i} es impar. (Usando while)`)
    }
    i++;//incremmento
}

// Do while Loop: ejecuta el codigo al menos una vez aunque la condicion no se cumpla y luego evalua.
let index = 1;
do{
    if(index % 2 === 0){
        console.log(`El numero ${index} es par. (Usando Do while)`);
    }else{
        console.log(`El numero ${index} es impar. (Usando Do while)`);
    }
    index ++;
}while(index < 10)