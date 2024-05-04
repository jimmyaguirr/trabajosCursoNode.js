const Restaurante = require('./restaurante');
class GestorRestaurante {
    constructor() {
        this.restaurante = new Restaurante();
    }

    async tomarPedido(plato) {
        try {
            const indicePedido = await this.restaurante.tomarPedido(plato);
            console.log(`Pedido de ${plato} recibido con éxito.`);
            return indicePedido;
        } catch (error) {
            console.error("Error al tomar el pedido:", error);
        }
    }

    async prepararPedido(indicePedido) {
        try {
            await this.restaurante.prepararPedido(indicePedido);
            console.log("Pedido en preparación.");
        } catch (error) {
            console.error("Error al preparar el pedido:", error);
        }
    }

    async entregarPedido(indicePedido) {
        try {
            const mensaje = await this.restaurante.entregarPedido(indicePedido);
            console.log(mensaje);
        } catch (error) {
            console.error("Error al entregar el pedido:", error);
        }
    }
}

module.exports = GestorRestaurante;
