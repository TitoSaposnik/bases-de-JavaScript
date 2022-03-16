//Notification API
const boton = document.querySelector('#boton');

boton.addEventListener('click',()=>{
    Notification.requestPermission()
    .then (resultado => console.log(`El resultado es ${resultado}`))
    
})
if(Notification.permission == 'granted'){
    new Notification ('Es una notificacion',{
        icon: 'img/icon-cat.png',
        body: 'Probando Notificaciones!'
    })
}