function obtenerEmpleados(){

    const archivo = 'empleados.json';
    fetch(archivo)
        .then(resultado =>{
            return resultado.json();
        })
        .then(datos =>{
            console.log(datos.empleados)

            const {empleados} = datos;//es mejor de esta manera
            console.log(empleados)

            empleados.forEach(empleados=>{
                //console.log(empleados)
                console.log(empleados.id)
                console.log(empleados.nombre)
                console.log(empleados.puesto)
            })
        })
}

obtenerEmpleados()

async function obtenerEmpleados2(){
    const archivo = 'empleados.json';

    const resultado = await fetch (archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados2()