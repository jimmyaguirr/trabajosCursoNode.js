const datosBasicos = require('./datosBasico');
class perro extends datosBasicos {
    constructor(raza, nombre, color, genero) {
        super(raza, nombre, color, genero)
    }
}
module.exports = perro;