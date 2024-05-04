const readline = require('readline');
const TiendaOnline = require('./tiendaOnline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tienda = new TiendaOnline();

function mostrarMenu() {
    console.log("\nBienvenido a la Tienda Online");
    console.log("1. Mostrar productos disponibles");
    console.log("2. Agregar producto al carrito");
    console.log("3. Mostrar carrito");
    console.log("4. Salir");
}

function iniciarTienda() {
    mostrarMenu();

    rl.question("\nIngrese el número de opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                tienda.mostrarProductosDisponibles();
                break;
            case '2':
                rl.question("Ingrese el nombre del producto que desea agregar al carrito: ", (nombreProducto) => {
                    tienda.agregarAlCarrito(nombreProducto);
                    iniciarTienda();
                });
                return;
            case '3':
                tienda.mostrarCarrito();
                break;
            case '4':
                console.log("Gracias por visitar la Tienda Online. ¡Hasta luego!");
                rl.close();
                return;
            default:
                console.log("Opción no válida. Por favor, ingrese un número de opción válido.");
        }

        iniciarTienda();
    });
}

iniciarTienda();
