const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class datosBasicos {
    constructor() {
        this.mascotas = []; 
    }

    agregarMascota(mascota) {
        this.mascotas.push(mascota);
    }

    mostrarMascotas() {
        console.log("Mascotas registradas:");
        this.mascotas.forEach(mascota => {
            console.log(`- ${mascota.raza} se llama ${mascota.nombre}, de color ${mascota.color} y género ${mascota.genero}`);
        });
    }

    preguntas() {
        let agregarOtraMascota = true;

        readline.question("¿Desea agregar una mascota? (si/no) ", (respuesta) => {
            if (respuesta.toLowerCase() === 'si') {
                readline.question("¿Su animal es un perro o un gato? ", (tipoAnimal) => {
                    readline.question(`¿Cuál es la raza de su ${tipoAnimal}? `, (raza) => {
                        readline.question(`¿Cuál es el nombre de su ${tipoAnimal}? `, (nombre) => {
                            readline.question(`¿De qué color es su ${tipoAnimal}? `, (color) => {
                                readline.question(`¿Cuál es el género de su ${tipoAnimal}? `, (genero) => {
                                    const nuevaMascota = {
                                        raza: raza,
                                        nombre: nombre,
                                        color: color,
                                        genero: genero
                                    };
                                    this.agregarMascota(nuevaMascota);
                                    console.log("¡Gracias por proporcionar la información!");
                                    readline.question("¿Desea agregar otra mascota? (si/no) ", (respuesta) => {
                                        if (respuesta.toLowerCase() === 'si') {
                                            this.preguntas();
                                        } else {
                                            this.mostrarMascotas();
                                            readline.close();
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            } else {
                this.mostrarMascotas(); 
                readline.close();
            }
        });
    }
}

module.exports = datosBasicos;
