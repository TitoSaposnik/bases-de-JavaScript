//This: hace referencia a las propiedades del objeto del cual se esta mandando a llamar esta funcion.
const reservation = {
    nombre: "Tito",
    total: 5000,
    pagado: false,
    informacion: function(){//Si usas arrow function estaria haciendo referencia a la ventana glogal y tendrias que hacer una variable por fuera del objeto. por ejemplo windows.nombre = "Tito"
        console.log(`El cliente ${this.nombre} reservo una mesa y el total a paga es $${this.total}`)
    }
}

const reservation2 = {
    nombre: "Mari",
    total: 9000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo una mesa y el total a paga es $${this.total}`)
    }
}
reservation.informacion()
reservation2.informacion()

const reservation3 = {
    nombre: "Martin",
    informacion: ()=>{
        console.log(`${this.nombre}`)
    }
}
reservation3.informacion() //Este caso da undefined