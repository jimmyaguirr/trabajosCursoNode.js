class Restaurante {
    constructor() {
        this.pedidos = [];
    }

    tomarPedido(plato) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Pedido recibido: ${plato}`);
                this.pedidos.push({ plato, estado: 'pendiente' });
                resolve(this.pedidos.length - 1);
            }, 1000); 
        });
    }

    prepararPedido(indicePedido) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.pedidos[indicePedido]) {
                    console.log(`Preparando pedido: ${this.pedidos[indicePedido].plato}`);
                    this.pedidos[indicePedido].estado = 'en preparación';
                    resolve(indicePedido);
                } else {
                    reject("Índice de pedido no válido");
                }
            }, 2000); 
        });
    }

    entregarPedido(indicePedido) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.pedidos[indicePedido]) {
                    console.log(`Entregando pedido: ${this.pedidos[indicePedido].plato}`);
                    this.pedidos[indicePedido].estado = 'entregado';
                    resolve(`Pedido de ${this.pedidos[indicePedido].plato} entregado.`);
                } else {
                    reject("Índice de pedido no válido");
                }
            }, 1500); 
        });
    }
}

module.exports = Restaurante;
