//Arrays

const numero = [
    10, 20, 30,
    40, 50, 60
]

console.log(numero)
console.table(numero) // formatea el array para mostrarlo en una tabla

const meses = new Array("Enero", "Febrero", "Marzo","Abril")
console.table(meses)

const ensaladaCosmica = ["Hola", 100, true, null, {nombre: "Martin", trabajo: "Programador", verdad: false}, ["Enero", "Diciembre"]];
console.log(ensaladaCosmica)

//Acceder a los valores de un arreglo.
console.log(numero[1])

//Conocer la extencion de un arreglo.
console.log(meses.length)

numero.forEach (function (num){
    console.log(num)
})

//Agregar un elemento al array.
numero[6] = 70; //de esta forma agregamos un elemento pero necesitamos saber la extension de antemano.
console.table(numero)

numero.push(80) //de esta manera siempre agregara el elemento al final del array
console.table(numero)

numero.unshift(00) // agrega un elemento al inicio del array
console.table(numero)

//Eliminar un elemento de un array
numero.pop() //elimina el ultimo elemento
numero.shift() // elimina el primer elemento

meses.slice(2,1); //eliminamos un elemento a eleccion, el primer numero posiciona a que elemento y el segundo es cuantos elementos deseamos eliminar
console.log(meses)

//Rest operator o Spread operator
const nuevoMeses = [...meses, "Mayo"] //buena practica para trabajar con arreglos sin modificar el original
console.log(nuevoMeses)