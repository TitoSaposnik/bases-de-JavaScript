// Exprecion de la funcion
const sumar = function(n1,n2){
    console.log(n1 + n2);
}
sumar(1,2)

// Arrow functions
const sumar2 = (n1,n2) =>{
    console.log(`El resultado de la suma es:${n1+n2}`)
}
sumar2(10,5)

const aprendiendo = (tecnologia)=>{
    console.log(`Aprendiendo ${tecnologia}!!`)
}
aprendiendo("JavaScript")

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

const carrito = [
    {nombre: "Televisor", precio:400},
    {nombre: "Monitor", precio:450},
    {nombre: "Celular", precio:500},
    {nombre: "Tablet", precio:450},
    {nombre: "Notebook", precio:1400},
    {nombre: "Pc Gamer", precio:4400},
]

//forEach con arraw function
meses.forEach( mes =>{
    if (mes == "Enero"){
        console.log("Ese mes si esta en el array")
    }
});

let resultado;
resultado = carrito.some(producto => producto.nombre === "Pc Gamer");
console.log(resultado)

let resultado2;
resultado2 = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado2)

let resultado3;
resultado3 = carrito.filter(producto => producto.precio > 400)
console.log(resultado3)

let resultado4;
resultado4 = carrito.filter (producto => producto.nombre !== "Celular")
console.log(resultado4)