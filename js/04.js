//String o cadenas de textos

const producto = "Monitor de 20 pulgadas";
const producto2 = String("Monitor de 19 pulgadas")
const producto3 = new String("Monitor de 22 pulgadas")
const producto4 = "Monitor de 27\""; //caso para poder poner commilas al final de un string

console.log(producto);
console.log(producto2);
console.log(producto3); //con typeof vemos el tipo de elemento, en este caso seria un "object"
console.log(producto4);

//Metodos para strings
console.log(producto.length) //muestra la cantidad de caracteres

//Indexof (Retorna una posición)
console.log(producto2.indexOf("pulgadas")) //encuentra un elemento en un string (su pocision)
console.log(producto.indexOf("Tomate")) //cuando no existe el elemento mostrara un -1
console.log(producto.indexOf("Monitor")) // la primer posicion es 0

//Includes (Retorna true o false)
console.log(producto2.includes("pulgadas"))
console.log(producto.includes("Tomate")) 