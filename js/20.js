//Metodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo Canción con el id: ${id}`)
    },
    pausar: function(){
        console.log("*pause*")
    },
    crearPlayList: function(nombre){
        console.log(`Creando Play List: ${nombre}`)
    },
    reproduciendoPlayList: function(nombre){
        console.log(`Reproduciendo Play List: ${nombre}`)
    }
}
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)
}//Tambien se puede hacer por fuera por son objetos

reproductor.reproducir(2022);
reproductor.pausar();
reproductor.borrarCancion(2021);
reproductor.crearPlayList("Cachenguito");
reproductor.reproduciendoPlayList("Cachenguito");