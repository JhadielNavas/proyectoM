export default class Cl_mCliente {
    constructor({cedula, tipo, cantidad, sexo}){
        this.cedula = cedula;
        this.tipo = tipo;
        this.cantidad = cantidad
        this.sexo = sexo;
    }

set cedula(c){
    this._cedula = +c;
}    
get cedula(){
    return this._cedula;
}

set tipo(t){
    this._tipo = +t;
}
get tipo(){
    return this._tipo;
}
set cantidad(c){
    this._cantidad = +c;
}
get cantidad(){
    return this._cantidad;
}

set sexo(sexo){
    this._sexo = +sexo;
}

get sexo(){
    return this._sexo;
}

genero(){
    switch(this.sexo){
        case 1:
            return "Masculino";
            break
        case 2:
            return "Femenino";
            break
        default:
            return "Indefinido";
    }
}
calcMontoCuenta(){
    return (this.cantidad * this.tipo).toFixed(2);
}
}