const Biblioteca = require('./biblioteca');

class GestorBiblioteca {
    constructor() {
        this.biblioteca = new Biblioteca();
    }

    buscarLibro(titulo, callback) {
        this.biblioteca.buscarLibroPorTitulo(titulo, (error, libro) => {
            if (error) {
                callback(error);
            } else {
                callback(null, libro);
            }
        });
    }

    obtenerInformacionLibro(titulo, callback) {
        this.biblioteca.obtenerInformacionLibro(titulo, (error, infoLibro) => {
            if (error) {
                callback(error);
            } else {
                callback(null, infoLibro);
            }
        });
    }

    reservarLibro(titulo, callback) {
        this.biblioteca.reservarLibro(titulo, (error, mensaje) => {
            if (error) {
                callback(error);
            } else {
                callback(null, mensaje);
            }
        });
    }
}

module.exports = GestorBiblioteca;
