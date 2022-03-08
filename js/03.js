//Variables con const 
/*
Las variables const no se puede inicializar sin ningun valor, se recomienda
usar const cuando tengamos valores fijos que no se vayan a modificar, no
puedes reasignar el valor de una variable const
*/
const producto = "Audifonos Gamer"; // iniciar variable y asignarle valor.
const disponible = true;


const producto1 = "Mouse",
    producto2 = "Teclado",
    producto3 = "Parlantes";

// const 1producto =  3; error no permitido
// const -producto = true; error no permitido
const _producto = true;

//Estilos para las variables:
const producto_principal = "mouse"; // underscore
const productoPrincipal = "teclado"; // camelcase
const ProductoPrincipal = "parlante"; // pascal case (se usa para las clases de js)