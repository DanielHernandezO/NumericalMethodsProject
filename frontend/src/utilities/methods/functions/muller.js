const { complex, isComplex } = require('mathjs')
const mathjs = require('mathjs')
module.exports = (f, x0, x1, tolerance, nMax) => {
    let iterations = []
    //Utilizamos método de regla falsa para hallar x2
    let fx0 = mathjs.evaluate(f, { x: x0 })
    let fx1 = mathjs.evaluate(f, { x: x1 })
    let x2 = (x0+x1)/2;
    let fx2 = mathjs.evaluate(f, { x: x2 })
    //Hallamos aproximaciones que nos da el método de muller    
    let h0 = x1 - x0
    let h1 = x2 - x1
    let delta0 = (fx1 - fx0) / h0;
    let delta1 = (fx2 - fx1) / h1;

    //Coeficientes parábola
    let a = (delta1 - delta0) / (h1 - h0)
    let b = a * (h1) + delta1
    let c = fx2
    //Tercera aproximacion
    let xi = x2 + (-2 * c) / (b + (b / mathjs.abs(b)) * mathjs.sqrt(mathjs.pow(b, 2) - 4 * a * c))

    let fxi = mathjs.evaluate(f, { x: xi })
    let error = tolerance + 1;
    let counter = 0;
    iterations.push([counter, x0, x1, x2, xi, fxi]);
    let logs = [];
    let x2aux = 0;
    let x1aux = 0;
    while(fxi !== 0 && error > tolerance && counter < nMax){
        x2aux = x2;
        x1aux = x1;
        x2 = xi;
        x1 = x2aux;
        x0 = x1aux;
        fx0 = mathjs.evaluate(f, { x: x0 });
        fx1 = mathjs.evaluate(f, { x: x1 });
        fx2 = mathjs.evaluate(f, { x: x2 });
        h0 = x1 - x0
        h1 = x2 - x1
        delta0 = (fx1 - fx0) / h0;
        delta1 = (fx2 - fx1) / h1;
        a = (delta1 - delta0) / (h1 - h0)
        b = a * (h1) + delta1
        c = fx2
        
        xi = x2 + (-2 * c) / (b + (b / Math.abs(b)) * Math.sqrt(Math.pow(b, 2) - 4 * a * c))
        fxi = mathjs.evaluate(f, { x: xi })
        error = Math.abs(xi-x2);
        counter++;
        iterations.push([counter, x0, x1, x2, xi, fxi, error]);
        
    }
    for (let y = 0; y < iterations.length; y++) {
        for (let k = 0; k < iterations[y].length; k++) {
            if (isComplex(iterations[y][k])) {
                logs.push({ type: 'Error', text: "Error found executing method, complex number found"})
                return{iterations,logs};
            }
            
        }
    }for (let y = 0; y < iterations.length; y++) {
        for (let k = 0; k < iterations[y].length; k++) {
            if(isNaN(iterations[y][k])){
                logs.push({ type: 'Error', text: "Error found executing method, try a different input"})
                return{iterations,logs};
            }
            
        }
    }
    
    logs= [{ type: 'Success', text:"Correct Input"}];
    return {iterations, xi,logs};
    }
