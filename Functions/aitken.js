const mathjs = require('mathjs')

module.exports = (f, x0, tolerance, nMax) => {
    const iterations = []
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
        
        denominator = (x2 - x1) - (x1 - x0);

        if (Math.abs(denominator) < 10e-16) {
            console.log('Problem with denominatpr')
            break;
        }

        xi = x2 - (Math.pow(x2 - x1, 2)) / denominator;

        iterations.push(i === 1 ? [i, xi] : [i, xi, Math.abs(xi - x2)]);

        if (Math.abs(xi - x2) < tolerance) {
            console.log('Problem with tolerance')
            break;
        }
    }

    console.log('iterations:\n')
    console.table(iterations)
    console.log('x:\n')
    console.log(xi)
}