const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class datosBasicos {

    constructor(raza, nombre, color, genero) {
        this.raza = raza;
        this.nombre = nombre;
        this.color = color;
        this.genero = genero;
    }

    preguntas() {
        let agregarOtraMascota = true;

        readline.question("¿Desea agregar una mascota? (si/no) ", (respuesta) => {
            if (respuesta.toLowerCase() === 'si') {
                readline.question("¿Su animal es un perro o un gato? ", (tipoAnimal) => {
                    readline.question(`¿Cuál es la raza de su ${tipoAnimal}? `, (raza) => {
                        this.raza = raza;
                        readline.question(`¿Cuál es el nombre de su ${tipoAnimal}? `, (nombre) => {
                            this.nombre = nombre;
                            readline.question(`¿De qué color es su ${tipoAnimal}? `, (color) => {
                                this.color = color;
                                readline.question(`¿Cuál es el género de su ${tipoAnimal}? `, (genero) => {
                                    this.genero = genero;
                                    console.log("¡Gracias por proporcionar la información!");
                                    readline.question("¿Desea agregar otra mascota? (si/no) ", (respuesta) => {
                                        if (respuesta.toLowerCase() === 'si') {
                                            this.preguntas();
                                        } else {
                                            console.log("No se agregarán más mascotas.");
                                            readline.close();
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            } else {
                console.log("No se agregarán más mascotas.");
                readline.close();
            }
        });
    }
}

module.exports = datosBasicos;
