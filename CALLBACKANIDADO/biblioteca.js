class Biblioteca {
    constructor() {
        this.catalogo = [
            { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", disponible: true },
            { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", disponible: true },
            { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", disponible: false },
            { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", disponible: true }
        ];
    }

    buscarLibroPorTitulo(titulo, callback) {
        setTimeout(() => {
            const libroEncontrado = this.catalogo.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
            if (libroEncontrado) {
                callback(null, libroEncontrado);
            } else {
                callback("Libro no encontrado", null);
            }
        }, 1000); 
    }

    obtenerInformacionLibro(titulo, callback) {
        this.buscarLibroPorTitulo(titulo, (error, libro) => {
            if (error) {
                callback(error, null);
            } else {
                
                setTimeout(() => {
                    callback(null, `${libro.titulo} - ${libro.autor}`);
                }, 1000);
            }
        });
    }

    reservarLibro(titulo, callback) {
        this.buscarLibroPorTitulo(titulo, (error, libro) => {
            if (error) {
                callback(error);
            } else {
                if (libro.disponible) {
                    
                    setTimeout(() => {
                        libro.disponible = false;
                        callback(null, `¡"${titulo}" ha sido reservado con éxito!`);
                    }, 2000);
                } else {
                    callback(`"${titulo}" no está disponible para reservar en este momento.`);
                }
            }
        });
    }
}

module.exports = Biblioteca;
