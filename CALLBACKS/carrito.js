class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`"${producto.nombre}" ha sido agregado al carrito.`);
    }

    mostrarCarrito() {
        if (this.productos.length === 0) {
            console.log("El carrito está vacío.");
        } else {
            console.log("Productos en el carrito:");
            this.productos.forEach(producto => {
                console.log(`- ${producto.nombre}: $${producto.precio}`);
            });
        }
    }
}

module.exports = Carrito;
