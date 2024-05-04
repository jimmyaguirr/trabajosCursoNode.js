const readline = require('readline');
const GestorEmpleados = require('./gestionEmpleado');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gestorEmpleados = new GestorEmpleados();

function mostrarMenu() {
    console.log("\n=== Gestión de Empleados ===");
    console.log("1. Agregar nuevo empleado");
    console.log("2. Ver lista de empleados");
    console.log("3. Actualizar información de empleado");
    console.log("4. Eliminar empleado");
    console.log("5. Salir");
}

async function iniciarGestionEmpleados() {
    mostrarMenu();

    rl.question("\nIngrese el número de opción: ", async (opcion) => {
        switch (opcion) {
            case '1':
                rl.question("Nombre del nuevo empleado: ", async (nombre) => {
                    rl.question("Edad del nuevo empleado: ", async (edad) => {
                        rl.question("Puesto del nuevo empleado: ", async (puesto) => {
                            await gestorEmpleados.agregarNuevoEmpleado(nombre, edad, puesto);
                            iniciarGestionEmpleados();
                        });
                    });
                });
                break;
            case '2':
                await gestorEmpleados.verListaEmpleados();
                iniciarGestionEmpleados();
                break;
            case '3':
                rl.question("Índice del empleado a actualizar: ", async (indice) => {
                    rl.question("Nuevo nombre: ", async (nombre) => {
                        rl.question("Nueva edad: ", async (edad) => {
                            rl.question("Nuevo puesto: ", async (puesto) => {
                                await gestorEmpleados.actualizarInformacionEmpleado(parseInt(indice) - 1, nombre, edad, puesto);
                                iniciarGestionEmpleados();
                            });
                        });
                    });
                });
                break;
            case '4':
                rl.question("Índice del empleado a eliminar: ", async (indice) => {
                    await gestorEmpleados.eliminarEmpleado(parseInt(indice) - 1);
                    iniciarGestionEmpleados();
                });
                break;
            case '5':
                console.log("Gracias por usar nuestro sistema de gestión de empleados.");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Por favor, ingrese un número de opción válido.");
                iniciarGestionEmpleados();
        }
    });
}

iniciarGestionEmpleados();
