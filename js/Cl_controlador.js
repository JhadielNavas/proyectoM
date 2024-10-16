/*En una bodega sólo se trabaja con billetes de $10, $20 y $50, y el bodeguero registra la
cantidad que tiene de cada denominación al principio de la jornada. Se desea procesar todos los
clientes que vienen a pagar su compra, pero asumiendo que sólo para con 1 denominación a la
vez. Se conoce de cada cliente: cédula, el tipo de denominación del billete y la cantidad de
billetes que entrega. Se desea calcular el monto de la cuenta del cliente, el monto de cada
denominación que quedan al final en la bodega y el monto total que le queda al bodeguero. */
import Cl_vBodega from "./Cl_vBodega.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_mBodega from "./Cl_mBodega.js";
import Cl_mCliente from "./Cl_mCliente.js";
export default class Cl_controlador {
    constructor() {
        this.vCliente = new Cl_vCliente(this);
        this.vBodega = new Cl_vBodega(this);
        this.mBodega = new Cl_mBodega(this);
    }
    mostrarVistaCliente() {
        this.vBodega.ocultar();
        this.vCliente.mostrar();
        this.vBodega.ocultarInicial();
    }
    mostrarVistaBodega() {
        this.vCliente.ocultar();
        this.vBodega.ocultarInicial();
        this.vBodega.mostrar();
    }
    mostrarVistaInicial() {
        this.vBodega.ocultar();
        this.vCliente.ocultar();
        this.vBodega.mostrarInicial();
    }
    billetesInicial({ini10, ini20, ini50}) {
        this.mBodega.ini10 = ini10;
        this.mBodega.ini20 = ini20;
        this.mBodega.ini50 = ini50;
        this.mostrarVistaBodega();
        
        
        }
    agregarCliente({cedula, tipo, cantidad, sexo}) {
        let cliente = new Cl_mCliente({cedula, tipo, cantidad, sexo});
        this.mBodega.procesarCliente(cliente);
        this.vBodega.reportarCliente({
            cedula: cliente.cedula,
            tipo: cliente.tipo,
            cantidad: cliente.cantidad,
            sexo: cliente.sexo,
            genero: cliente.genero(),
            montoCuenta: cliente.calcMontoCuenta(),
            montoFinal10: this.mBodega.montoFinal10(),
            montoFinal20: this.mBodega.montoFinal20(),
            montoFinal50: this.mBodega.montoFinal50(),
            montoJornada: this.mBodega.montoJornada(),
            porcetanje50: this.mBodega.porcentaje50(),
            porcentaje20: this.mBodega.porcentaje20(),
            montoFinalTotal: this.mBodega.montoFinalTotal(),
        });
        this.mostrarVistaBodega();
    }
}