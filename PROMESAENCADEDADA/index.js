const readline = require('readline');
const GestorRestaurante = require('./gestionRestaurante');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gestorRestaurante = new GestorRestaurante();

function mostrarMenu() {
    console.log("\n=== Gestión de Restaurante ===");
    console.log("1. Tomar pedido");
    console.log("2. Preparar pedido");
    console.log("3. Entregar pedido");
    console.log("4. Salir");
}

async function iniciarGestionRestaurante() {
    mostrarMenu();

    rl.question("\nIngrese el número de opción: ", async (opcion) => {
        switch (opcion) {
            case '1':
                rl.question("Ingrese el plato del pedido: ", async (plato) => {
                    const indicePedido = await gestorRestaurante.tomarPedido(plato);
                    iniciarGestionRestaurante();
                });
                break;
            case '2':
                rl.question("Ingrese el número de pedido a preparar: ", async (indice) => {
                    await gestorRestaurante.prepararPedido(parseInt(indice));
                    iniciarGestionRestaurante();
                });
                break;
            case '3':
                rl.question("Ingrese el número de pedido a entregar: ", async (indice) => {
                    await gestorRestaurante.entregarPedido(parseInt(indice));
                    iniciarGestionRestaurante();
                });
                break;
            case '4':
                console.log("Gracias por usar nuestro sistema de gestión de restaurante.");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Por favor, ingrese un número de opción válido.");
                iniciarGestionRestaurante();
        }
    });
}

iniciarGestionRestaurante();
