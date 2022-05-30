const mathjs = require('mathjs')

module.exports = (f, x0, tolerance, nMax) => {
    const iterations = []
    const logs = []
    let x1 = 0; 
    let x2 = 0;
    let xi = 0;
    for (let i = 1; i < nMax; i++) {
        if(i == 1){
            x1 = mathjs.evaluate(f, { x: x0 });
            x2 = mathjs.evaluate(f, { x: x1 });
        }else{
            x0 = x1;
            x1 = x2;
            x2 = mathjs.evaluate(f, { x: x1 });
        }
        let denominator = (x2 - x1) - (x1 - x0);

        if (Math.abs(denominator) < 10e-16) {
            logs.push({ type: 'Error', text: 'Error during method execution: division by 0' })
            break;
        }

        xi = x2 - (Math.pow(x2 - x1, 2)) / denominator;

        iterations.push(i === 1 ? [i, xi] : [i, xi, Math.abs(xi - x2)]);

        if (Math.abs(xi - x2) < tolerance) {
            logs.push({ type: 'Success', text: xi + ' is an approximation' })
            break;
        }
    }

    return { logs, iterations, xi };
}