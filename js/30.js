//Promises
const autenticacionUsuario = new Promise(function(resolve,reject){
    const auth = true;

    if(auth){
        resolve("Usuario Autentificado"); //El promise se CUMPLE
    }else{
        reject("Usuario Invalido")//El promise NO se cumple
    }
});

autenticacionUsuario
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

/*
En las promises existen tres valores
    pending: no se ha cumplido pero tampoco se ha rechazado
    fulfilled: ya se cumplio
    reject: se ha rechazado o no se puede cumplir
*/