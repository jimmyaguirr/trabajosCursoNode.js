const Empleado = require('./empleado');

class GestorEmpleados {
    constructor() {
        this.empleado = new Empleado();
    }

    async agregarNuevoEmpleado(nombre, edad, puesto) {
        try {
            await this.empleado.agregarEmpleado(nombre, edad, puesto);
        } catch (error) {
            console.error("Error al agregar nuevo empleado:", error);
        }
    }

    async verListaEmpleados() {
        try {
            await this.empleado.verListaEmpleados();
        } catch (error) {
            console.error("Error al ver lista de empleados:", error);
        }
    }

    async actualizarInformacionEmpleado(indice, nombre, edad, puesto) {
        try {
            await this.empleado.actualizarEmpleado(indice, nombre, edad, puesto);
        } catch (error) {
            console.error("Error al actualizar información del empleado:", error);
        }
    }

    async eliminarEmpleado(indice) {
        try {
            await this.empleado.eliminarEmpleado(indice);
        } catch (error) {
            console.error("Error al eliminar empleado:", error);
        }
    }
}

module.exports = GestorEmpleados;
