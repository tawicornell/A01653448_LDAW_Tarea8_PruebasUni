class Cuenta{
    constructor(saldo, historia){
        this.saldo=saldo;
        this.historia=historia;
    }


    current(){
        return this.saldo;
    }

    append(abono){
        if(Math.sign(abono)==-1){ //validacion de negtaivo
            return this.saldo;
        }else{
          
            return this.saldo+abono;
        }
    }


    substract(retiro){
        if(Math.sign(retiro)==-1){
            return this.saldo;
        }else{
          
            return this.saldo-retiro;
        }
    }

    //recibe cuenta a mergear
    merge(cuentaB){
       // console.log(cuentaB.historia[0]);
        this.historia = this.historia.concat(cuentaB.historia);
       // console.log(this.historia);

        if(Math.sign(cuentaB)==-1){//validar signo
          this.saldo = this.saldo-cuentaB.saldo;
          this.saldo =  this.saldo.toFixed(2);
        }else{
            this.saldo = this.saldo+cuentaB.saldo;
            this.saldo =   this.saldo.toFixed(2);
        }
        let cuentaR = new Cuenta(this.saldo, this.historia);

        return  cuentaR;
    }


    history(){
        return this.historia;
    }



}

module.exports=Cuenta;