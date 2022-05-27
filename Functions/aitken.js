const mathjs = require('mathjs')

module.exports = (an, x0, tolerance, nMax) => {
    const iterations = [];

    x1 = mathjs.evaluate(an, { x: x0 });
    x2 = mathjs.evaluate(an, { x: x1 });
    xi = x0 - (Math.pow(x1 - x0, 2)) / (x2 - 2 * x1 + x0);
    error = tolerance + 1;
    counter = 0;
    iterations.push({ counter, xi })

    while (error > tolerance && counter < nMax) {
        x0 = xi
        x1 = mathjs.evaluate(an, { x: x0 });
        x2 = mathjs.evaluate(an, { x: x1 });
        xi = x0 - (Math.pow(x1 - x0, 2)) / (x2 - 2 * x1 + x0);
        error = Math.abs(xi-x2);
        counter++;
        iterations.push({ counter, xi, error }) 
    }

    if (error <= tolerance) return { state: 'Success', iterations, approximation: xi }
    return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given' }
}