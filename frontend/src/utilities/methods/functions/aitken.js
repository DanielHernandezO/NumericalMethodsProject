const mathjs = require('mathjs')

module.exports = (an, x0, tolerance, nMax) => {
    const iterations = [];
    const logs = [];
    let x1 = mathjs.evaluate(an, { x: x0 });
    let x2 = mathjs.evaluate(an, { x: x1 });
    let xi = x0 - (Math.pow(x1 - x0, 2)) / (x2 - 2 * x1 + x0);
    let error = tolerance + 1;
    let counter = 0;
    iterations.push([counter,xi])

    while (error > tolerance && counter < nMax) {
        x0 = xi
        x1 = mathjs.evaluate(an, { x: x0 });
        x2 = mathjs.evaluate(an, { x: x1 });
        xi = x0 - (Math.pow(x1 - x0, 2)) / (x2 - 2 * x1 + x0);
        error = Math.abs(xi-x2);
        counter++;
        iterations.push([counter, xi, error ]) 
    }

    if (error <= tolerance) logs.push({ type: 'Success', text: xi + ' is an approximation of the root' })
    else logs.push({ type: 'Error', text: 'The method fails with the maximum number of iterations given' })
    return { iterations, logs, xi }
}