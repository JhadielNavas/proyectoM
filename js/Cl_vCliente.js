export default class Cl_vCliente {
    constructor(controlador){
        this.vista = document.getElementById("clienteForm");
        this.inCedula = document.getElementById("clienteForm_inCedula");
        this.inTipo = document.getElementById("clienteForm_inTipo");
        this.inCantidad = document.getElementById("clienteForm_inCantidad");
        this.inSexo = document.getElementById("clienteForm_inSexo");
        this.btAceptar = document.getElementById("clienteForm_btAceptar")
        this.btAceptar.onclick = () =>
            controlador.agregarCliente({
                cedula: this.inCedula.value,
                tipo: this.inTipo.value,
                cantidad: this.inCantidad.value,
                sexo: this.inSexo.value,
            });
            this.ocultar();
    }
    mostrar(){
        this.vista.hidden = false;
    }
    ocultar(){
        this.vista.hidden = true;
    }
}