const readline = require('readline');
const GestorBiblioteca = require('./gestionBiblioteca');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gestorBiblioteca = new GestorBiblioteca();

function mostrarMenu() {
    console.log("\n=== Gestión de Biblioteca ===");
    console.log("1. Buscar libro por título");
    console.log("2. Obtener información detallada de un libro");
    console.log("3. Reservar libro");
    console.log("4. Salir");
}

function iniciarGestionBiblioteca() {
    mostrarMenu();

    rl.question("\nIngrese el número de opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                rl.question("Ingrese el título del libro: ", (titulo) => {
                    gestorBiblioteca.buscarLibro(titulo, (error, libro) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(libro);
                        }
                        iniciarGestionBiblioteca();
                    });
                });
                break;
            case '2':
                rl.question("Ingrese el título del libro: ", (titulo) => {
                    gestorBiblioteca.obtenerInformacionLibro(titulo, (error, infoLibro) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(infoLibro);
                        }
                        iniciarGestionBiblioteca();
                    });
                });
                break;
            case '3':
                rl.question("Ingrese el título del libro a reservar: ", (titulo) => {
                    gestorBiblioteca.reservarLibro(titulo, (error, mensaje) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(mensaje);
                        }
                        iniciarGestionBiblioteca();
                    });
                });
                break;
            case '4':
                console.log("Gracias por usar nuestro sistema de gestión de biblioteca.");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Por favor, ingrese un número de opción válido.");
                iniciarGestionBiblioteca();
        }
    });
}

iniciarGestionBiblioteca();
