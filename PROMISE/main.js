const readline = require('readline');
const GestorUsuarios = require('./gestionUsuario');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gestorUsuarios = new GestorUsuarios();

function mostrarMenu() {
    console.log("\n=== Gestión de Usuarios ===");
    console.log("1. Registrar nuevo usuario");
    console.log("2. Iniciar sesión");
    console.log("3. Eliminar cuenta");
    console.log("4. Salir");
}

function iniciarGestionUsuarios() {
    mostrarMenu();

    rl.question("\nIngrese el número de opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                rl.question("Ingrese su nombre: ", (nombre) => {
                    rl.question("Ingrese su correo: ", (correo) => {
                        rl.question("Ingrese su contraseña: ", (contraseña) => {
                            gestorUsuarios.registrarNuevoUsuario(nombre, correo, contraseña)
                                .then(() => iniciarGestionUsuarios())
                                .catch(() => iniciarGestionUsuarios());
                        });
                    });
                });
                break;
            case '2':
                rl.question("Ingrese su correo: ", (correo) => {
                    rl.question("Ingrese su contraseña: ", (contraseña) => {
                        gestorUsuarios.iniciarSesion(correo, contraseña)
                            .then(() => iniciarGestionUsuarios())
                            .catch(() => iniciarGestionUsuarios());
                    });
                });
                break;
            case '3':
                rl.question("Ingrese su correo: ", (correo) => {
                    rl.question("Ingrese su contraseña: ", (contraseña) => {
                        gestorUsuarios.eliminarCuenta(correo, contraseña)
                            .then(() => iniciarGestionUsuarios())
                            .catch(() => iniciarGestionUsuarios());
                    });
                });
                break;
            case '4':
                console.log("Gracias por usar nuestro sistema de gestión de usuarios.");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Por favor, ingrese un número de opción válido.");
                iniciarGestionUsuarios();
        }
    });
}

iniciarGestionUsuarios();
