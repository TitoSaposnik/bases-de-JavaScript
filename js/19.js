function sumar(n1, n2){
    return n1 + n2
}
const resultado = sumar(9,3)
console.log(resultado)

//
let total = 0;

function agregarCarrito (precio){
    return total += precio; //Acumulativo
}

total = agregarCarrito(200)
total = agregarCarrito(700)
total = agregarCarrito(896)
console.log(`El total a pagar es: ${total}`)

function calcularImpuesto(total){
    return 1.21 * total
}
let totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar mas el impuesto es: ${totalAPagar}`)