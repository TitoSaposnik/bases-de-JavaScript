const puntaje = 100;

if(puntaje == 1000){
    console.log(`El puntaje es 1000!!`)
}else{
    console.log("El puntaje es diferente a 1000")
}


const efectivo = 8000;
const carrito = 8000;

if(efectivo >= carrito){
    console.log("El cliente puede pagarlo")
}else{
    console.log("Fondos insuficientes")
}

const rol = "INVI";

if(rol === "ADMINISTRADOR"){
    console.log("Acceso de administrador")
} else if (rol === "EDITOR"){
    console.log("Acceso de editor")
}else{
    console.log("No tienes acceso!")
}