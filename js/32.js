//Async / Await

function descargarNuevosClientes(){
    return new Promise (resolve => {
        console.log ('Descargando Clientes... Espere...');

        setTimeout(()=> { //Simula tiempo de descarga
            resolve ('Los clientes fueron descargados con exito.');
        }, 5000);
    });
}

function descargarUltimosPedidos(){
    return new Promise (resolve => {
        console.log ('Descargando Pedidos...');

        setTimeout(()=> { //Simula tiempo de descarga
            resolve ('Los pedidos fueron descargados.');
        }, 3000);
    });
}
async function app(){
    try{
        //De esta manera no esta optimizado porque son dos entidades diferentes, no depende una de la otra
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes)
        // console.log(pedidos)
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado) //Esto muestra arrays
        console.log(resultado[0])
        console.log(resultado[1])
    } catch(error){
        console.log(error)
    }
}

app()