class Empleado {
    constructor() {
        this.listaEmpleados = [];
    }

    async agregarEmpleado(nombre, edad, puesto) {
        
        await new Promise(resolve => setTimeout(resolve, 1000));

        const nuevoEmpleado = { nombre, edad, puesto };
        this.listaEmpleados.push(nuevoEmpleado);
        console.log(`Empleado ${nombre} agregado correctamente.`);
    }

    async verListaEmpleados() {
     
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Lista de empleados:");
        this.listaEmpleados.forEach((empleado, index) => {
            console.log(`${index + 1}. ${empleado.nombre} - ${empleado.edad} años - ${empleado.puesto}`);
        });
    }

    async actualizarEmpleado(indice, nombre, edad, puesto) {
      
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (indice >= 0 && indice < this.listaEmpleados.length) {
            this.listaEmpleados[indice] = { nombre, edad, puesto };
            console.log(`Información del empleado actualizada correctamente.`);
        } else {
            console.log("Índice de empleado no válido.");
        }
    }

    async eliminarEmpleado(indice) {
  
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (indice >= 0 && indice < this.listaEmpleados.length) {
            const empleadoEliminado = this.listaEmpleados.splice(indice, 1);
            console.log(`Empleado ${empleadoEliminado[0].nombre} eliminado correctamente.`);
        } else {
            console.log("Índice de empleado no válido.");
        }
    }
}

module.exports = Empleado;
