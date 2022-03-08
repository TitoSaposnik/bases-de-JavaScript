//Orden de las operaciones

let resultado;
let resultado2;
let resultado3;

resultado = 20 + 30 * 2; // la multiplicacion tiene mas peso por eso se revuelve primero
resultado2 = (20 + 30) * 2;// en este caso los parentesis tienen mas peso.
resultado3 = (100 + 200 + 300) * .2; //de esta forma vemos el 20% del resultado de esa suma

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

//Incrementos y decrementos.

let puntaje = 10;
puntaje++; //incrementa en 1
++puntaje; //en este caso, primero incrementa el valor y luego lo muestra
puntaje += 15; // de esta forma le incrementamos el valor que queremos.

puntaje--; //decremento en 1

console.log("El puntaje es: " + puntaje)