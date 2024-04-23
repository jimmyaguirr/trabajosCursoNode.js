const datosBasicos = require('./datosBasico');
class gato extends datosBasicos {
    constructor(raza, nombre, color, genero) {
        super(raza, nombre, color, genero)
    }
}
module.exports =gato;