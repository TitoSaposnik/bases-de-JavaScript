class Producto {
    constructor(nombre,precio,stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}. Stock disponible: ${this.stock}`
    }
    formatearPrecio(){
        return `El precio es: ${this.precio}`; 
    }
}

const item = new Producto("Laptop",1020, true)
const item2 = new Producto("Monitor",550, true)
const item3 = new Producto("Teclado",310, true)
const item4 = new Producto("Parlantes",220, false)
const item5 = new Producto("Mouse",160, true)

console.log(item.formatearProducto())
console.log(item.formatearPrecio())

//Herencia
class Libro extends Producto{ //con extends heredamos la clase
    constructor(nombre,precio,stock,isbn){
        super(nombre,precio,stock);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`//añade atributo que no esta en el constructor padre
    }
}
const libro1 = new Libro ("The Hobbit",500,true,"AT13K1I192")
console.log(libro1.formatearProducto())