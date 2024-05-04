const Producto = require('./producto');
const Carrito = require('./carrito');

class TiendaOnline {
    constructor() {
        this.inventario = [
            new Producto("Camiseta", 20),
            new Producto("Pantalones", 30),
            new Producto("Zapatos", 50)
        ];
        this.carrito = new Carrito();
    }

    mostrarProductosDisponibles() {
        console.log("Productos disponibles:");
        this.inventario.forEach(producto => {
            console.log(`- ${producto.nombre}: $${producto.precio}`);
        });
    }

    agregarAlCarrito(nombreProducto) {
        const productoEncontrado = this.inventario.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
        if (productoEncontrado) {
            this.carrito.agregarProducto(productoEncontrado);
        } else {
            console.log(`El producto "${nombreProducto}" no está disponible en la tienda.`);
        }
    }

    mostrarCarrito() {
        this.carrito.mostrarCarrito();
    }
}

module.exports = TiendaOnline;
