export default class Cl_mBodega{
    constructor({ini10, ini20, ini50}){
        this.ini10 = ini10;
        this.ini20 = ini20;
        this.ini50 = ini50;
        this.acum10 = 0;
        this.acum20 = 0;
        this.acum50 = 0;
    }

    set ini10(i1){
        this._ini10 = +i1;
    }
    get ini10(){
        return this._ini10;
    }

    set ini20(i2){
        this._ini20 = +i2;
    }
    get ini20(){
        return this._ini20;
    }

    set ini50(i3){
        this._ini50 = +i3;
    }
    get ini50(){
        return this._ini50;
    }
    procesarCliente(cliente){
        if(cliente.tipo == 10){
            this.acum10 += cliente.cantidad;
        }else if(cliente.tipo == 20){
            this.acum20 += cliente.cantidad;
        }else if(cliente.tipo == 50){
            this.acum50 += cliente.cantidad;
        }
    }

    montoJornada(){
        return (Number(this.acum10*10) + Number(this.acum20*20) + Number(this.acum50*50)).toFixed(2);
    }

    montoFinal10(){
        return ((this.ini10*10) + (this.acum10 * 10)).toFixed(2);}
    montoFinal20(){
        return ((this.ini20*20) + (this.acum20 * 20)).toFixed(2);}
    montoFinal50(){
        return ((this.ini50*50) + (this.acum50 * 50)).toFixed(2);}
    montoFinalTotal(){
      return (Number(this.montoFinal10()) + Number(this.montoFinal20()) + Number(this.montoFinal50())).toFixed(2);}

    porcentaje50(){
        return (((Number(this.acum50) - Number(this.ini50)) / Number(this.ini50)) * 100);
    }

    porcentaje20(){
        return (((Number(this.acum20) - Number(this.ini20)) / Number(this.ini20)) * 100);
    }
}