const assert = require('assert');
const VectorCalculator = require('../VectorCalculator');


describe('VectorCalc', ()=>{
    
    describe('#sum',()=>{
        let v1={x:4, y:3};
        let v2={x:1, y:3};

        it('Suma los vectores a y b',()=>{
            assert.deepEqual({x:5, y:6},VectorCalculator.sum(v1,v2));
        })
    })



    describe('#sub',()=>{
        let v1={x:4, y:3};
        let v2={x:1, y:3};

        it('Resta los vectores a y b',()=>{
            assert.deepEqual({x:3, y:0},VectorCalculator.sub(v1,v2));
        })
    })

    describe('#dot',()=>{
        let v1={x:-6, y:8};
        let v2={x:5, y:12};

        it('Calcula el producto punto de los vectores a y b',()=>{
            assert.deepEqual( 66  ,VectorCalculator.dot(v1,v2));
        })
    })


    describe('#escalar',()=>{
        let v1={x:1, y:2};
        let k=2.5;

        it('Escala el vector a',()=>{
            assert.deepEqual( {x:2.5,y:5}  ,VectorCalculator.escalar(v1,k));
        })
    })

})