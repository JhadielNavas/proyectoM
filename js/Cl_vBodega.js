export default class Cl_vBodega {
    constructor(controlador) {
        this.vista = document.getElementById("bodegaForm");
        this.vistaInicial = document.getElementById("bodegaForm_inicial");
        this.inInicial10 = document.getElementById("bodegaForm_inInicial10");
        this.inInicial20 = document.getElementById("bodegaForm_inInicial20");
        this.inInicial50 = document.getElementById("bodegaForm_inInicial50");
        this.tabla = document.getElementById("bodegaForm_tabla");
        this.lblMontoFinal10 = document.getElementById("bodegaForm_lblMontoFinal10");
        this.lblMontoFinal20 = document.getElementById("bodegaForm_lblMontoFinal20");
        this.lblMontoFinal50 = document.getElementById("bodegaForm_lblMontoFinal50");
        this.lblMontoJornada = document.getElementById("bodegaForm_lblMontoJornada");
        this.lblMontoFinalTotal = document.getElementById("bodegaForm_lblMontoFinalTotal");
        this.lblPorcentaje50 = document.getElementById("bodegaForm_lblPorcentaje50");
        this.lblPorcentaje20 = document.getElementById("bodegaForm_lblPorcentaje20");
        this.btAceptar = document.getElementById("bodegaForm_btAceptar");
        this.btAceptar.onclick = () => controlador.billetesInicial({
                ini10: this.inInicial10.value,
                ini20: this.inInicial20.value,
                ini50: this.inInicial50.value,
            });
            this.ocultar();
        this.btAgregar = document.getElementById("bodegaForm_btAgregar");
        this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
    }

    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    mostrarInicial(){
        this.vistaInicial.hidden = false;
    }
    ocultarInicial(){
        this.vistaInicial.hidden = true;
    }
    reportarCliente({
        cedula,
        tipo,
        cantidad,
        genero,
        montoCuenta,
        montoFinal10,
        montoFinal20,
        montoFinal50,
        montoJornada,
        porcetanje50,
        porcentaje20,
        montoFinalTotal
    }) {
        this.tabla.innerHTML += `
            <tr>
                <td>${cedula}</td>
                <td>$${tipo}</td>
                <td>${cantidad}</td>
                <td>$${montoCuenta}</td>
                <td>${genero}</td>
            </tr>`;
        this.lblMontoFinal10.innerHTML = montoFinal10;
        this.lblMontoFinal20.innerHTML = montoFinal20;
        this.lblMontoFinal50.innerHTML = montoFinal50;
        this.lblMontoJornada.innerHTML = montoJornada;
        this.lblPorcentaje50.innerHTML = porcetanje50;
        this.lblPorcentaje20.innerHTML = porcentaje20;
        this.lblMontoFinalTotal.innerHTML = montoFinalTotal;
    }
}