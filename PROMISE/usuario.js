class Usuario {
    constructor() {
        this.usuariosRegistrados = [];
    }

    registrarUsuario(nombre, correo, contraseña) {
        return new Promise((resolve, reject) => {
        
            setTimeout(() => {
                const nuevoUsuario = { nombre, correo, contraseña };
                this.usuariosRegistrados.push(nuevoUsuario);
                resolve(nuevoUsuario);
            }, 1000); 
        });
    }

    iniciarSesion(correo, contraseña) {
        return new Promise((resolve, reject) => {
          
            setTimeout(() => {
                const usuarioEncontrado = this.usuariosRegistrados.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña);
                if (usuarioEncontrado) {
                    resolve(usuarioEncontrado);
                } else {
                    reject(new Error("Correo o contraseña incorrectos. Por favor, inténtelo de nuevo."));
                }
            }, 1000); 
        });
    }

    eliminarCuenta(correo, contraseña) {
        return new Promise((resolve, reject) => {
        
            setTimeout(() => {
                const indiceUsuario = this.usuariosRegistrados.findIndex(usuario => usuario.correo === correo && usuario.contraseña === contraseña);
                if (indiceUsuario !== -1) {
                    this.usuariosRegistrados.splice(indiceUsuario, 1);
                    resolve("La cuenta ha sido eliminada correctamente.");
                } else {
                    reject(new Error("No se pudo encontrar la cuenta. Verifique el correo y la contraseña e inténtelo de nuevo."));
                }
            }, 1000); 
        });
    }
}

module.exports = Usuario;
