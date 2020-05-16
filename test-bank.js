const assert = require('assert');
const Cuenta = require('../BankAccount');


describe('Bank', ()=>{

    describe('#Saldo',()=>{
        let saldo = 1000.50;
        let historia = [];
        //let historia = [{cantidad: 0, tipo: "Abono"}];
        //let historia = [{cantidad: 0, tipo: "Retiro"}];
        let cuenta = new Cuenta(saldo,historia); //instanciar la clase de cuenta

        it('Regresa el saldo actual en la cuenta',()=>{
            assert.deepEqual(
                cuenta.current(),
                  1000.50, 
             );
        })
    })


    describe('#Abono',()=>{
      
        let saldo = 1000.50;
        let historia = [];
        let cuenta = new Cuenta(saldo,historia);

        let abono = 100.15;
        let abono2 = -103.21;

        it('Agrega el monto a la cuenta y regresa el saldo final.\n Si recibe un monto negativo no modifica el saldo',()=>{
            assert.deepEqual(
                cuenta.append(abono),
                  1100.65, 
             );
        })


        it('Prueba con abono negativo',()=>{
            assert.deepEqual(
                cuenta.append(abono2),
                  1000.50, 
             );
        })
    })


    describe('#Retiro',()=>{
      
        let saldo = 1000.50;
        let historia = [];
        let cuenta = new Cuenta(saldo,historia);

        let retiro = 100.15;
        let retiro2 = -103.21;

        it('Retira el monto de la cuenta y regresa el saldo final.\n Si recibe un monto negativo no modifica el saldo',()=>{
            assert.deepEqual(
                cuenta.substract(retiro),
                  900.35, 
             );
        })


        it('Prueba con retiro negativo',()=>{
            assert.deepEqual(
                cuenta.substract(retiro2),
                  1000.50, 
             );
        })
    })


    describe('#Merge',()=>{
        let saldo1 = 500.0;
        let historia1 = [{cantidad: 10.0, tipo: "Abono"},{cantidad: 70.5, tipo: "Retiro"}];
        let cuenta1 = new Cuenta(saldo1,historia1); 

        let saldo2 = 500.33;
        let historia2 = [{cantidad: 11.1, tipo: "Retiro"}];
        let cuenta2 = new Cuenta(saldo2,historia2); 


        let saldo3 = -100.50;
        let historia3 = [{cantidad: 87.7, tipo: "Abono"}];
        let cuenta3 = new Cuenta(saldo3,historia3); 

        //******* */
        let saldo4 = 500.0;
        let historia4 = [{cantidad: 10.0, tipo: "Abono"},{cantidad: 70.5, tipo: "Retiro"}];
        let cuenta4 = new Cuenta(saldo4,historia4); 

     


        //SUBPRUEBA 1
        console.log("Une la cuenta ‘account’ con la cuenta (original). \nAl unir se copian sus historiales y si el saldo de ‘account’ \nes positivo entonces se agrega a ‘original’ si el saldo es negativo entonces se resta a ‘origina");
       //original y mergarle => otro
       it("",()=>{
        cuenta1.merge(cuenta2)
       }) 

        it('merge con saldos normales',()=>{
            assert.deepEqual( cuenta1.current(), 1000.33);
         })
         it('historial',()=>{
            assert.deepEqual( cuenta1.history(), 
           [ {cantidad: 10.0, tipo: "Abono"},{cantidad: 70.5, tipo: "Retiro"},{cantidad: 11.1, tipo: "Retiro"}]
            );
         })

         //SUBPRUEBA2
        console.log("Numeros negativos");
       it("", ()=>{
        cuenta4.merge(cuenta3)
       })
        it('merge con saldo negativo', ()=>{
            cuenta4.current(),  500.0
         })
         it('historial',()=>{
            assert.deepEqual( cuenta4.history(),
            [{cantidad: 10.0, tipo: "Abono"},{cantidad: 70.5, tipo: "Retiro"},{cantidad: 87.7, tipo: "Abono"}]
            );
         })

    })

//Todo menos las FUNCIONES de bankAccount
    describe('#Historial',()=>{
        let saldo = 1000.50;
<<<<<<< HEAD
        let movimiento1 = {cantidad: 80, tipo: "Abono"};
        let movimiento2 = {cantidad: 150, tipo: "Retiro"};
        let movimiento3 = {cantidad: 700, tipo: "Retiro"};
        let movimiento4 = {cantidad: 80, tipo: "Retiro"};
=======
        let movimiento1 = [{cantidad: 80, tipo: "Abono"}];
        let movimiento2 = [{cantidad: 150, tipo: "Retiro"}];
        let movimiento3 = [{cantidad: 700, tipo: "Retiro"}];
        let movimiento4 = [{cantidad: 80, tipo: "Retiro"}];
>>>>>>> 382a04ed4af205a13e402051a99aca0187aec3b0

        let historia = [movimiento1,movimiento2,movimiento3,movimiento4];
        let cuenta = new Cuenta(saldo,historia); 

        it('Regresa un arreglo de objetos con el historial de movimientos de la cuenta',()=>{
            assert.deepEqual(
                cuenta.history(),
                 
                [{cantidad: 80, tipo: "Abono"}, 
                {cantidad: 150, tipo: "Retiro"}, 
                {cantidad: 700, tipo: "Retiro"},
                {cantidad: 80, tipo: "Retiro"}]


             );
        })
    })


})
