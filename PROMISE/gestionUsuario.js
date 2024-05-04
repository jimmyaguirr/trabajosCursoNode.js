const Usuario = require('./usuario');

class GestorUsuarios {
    constructor() {
        this.usuario = new Usuario();
    }

    registrarNuevoUsuario(nombre, correo, contraseña) {
        return this.usuario.registrarUsuario(nombre, correo, contraseña)
            .then(usuarioRegistrado => {
                console.log(`Usuario ${usuarioRegistrado.nombre} registrado correctamente.`);
                return usuarioRegistrado;
            })
            .catch(error => {
                console.error("Error al registrar usuario:", error.message);
                throw error;
            });
    }

    iniciarSesion(correo, contraseña) {
        return this.usuario.iniciarSesion(correo, contraseña)
            .then(usuario => {
                console.log(`Inicio de sesión exitoso para ${usuario.nombre}.`);
                return usuario;
            })
            .catch(error => {
                console.error("Error al iniciar sesión:", error.message);
                throw error;
            });
    }

    eliminarCuenta(correo, contraseña) {
        return this.usuario.eliminarCuenta(correo, contraseña)
            .then(mensaje => {
                console.log(mensaje);
            })
            .catch(error => {
                console.error("Error al eliminar cuenta:", error.message);
                throw error;
            });
    }
}

module.exports = GestorUsuarios;
