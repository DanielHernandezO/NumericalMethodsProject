const mathjs = require('mathjs')

module.exports = (f, xi, xs, tolerance, nMax) => {
    const iterations = []
    fxi = mathjs.evaluate(f, { x: xi });
    fxs = mathjs.evaluate(f, { x: xs });

    if (fxi === 0) {
        console.log('Solution')
        console.log('xi is a root')
    } else if (fxs === 0) {
        console.log('Solution')
        console.log('xs is a root')
    } else if (fxi < fxs) {
        xm = (xi) - ((fxi * (xi - xs)) / (fxi - fxs));
        fxm = mathjs.evaluate(f,{ x: xm });
        error = tolerance + 1
        counter = 0;
        iterations.push({ counter, xi, xs, xm, fxm, error });

        while (fxm !== 0 && error > tolerance && counter < nMax) {
            if (fxi * fxm < 0) {
                xs = xm;
                fxs = fxm;
            } else {
                xi = xm
                fxi = fxm
            }

            xAux = xm;
            xm = (xi) - ((fxi * (xi - xs)) / (fxi - fxs));
            fxm = mathjs.evaluate(f,{ x: xm });
            error = Math.abs(xm - xAux) / xm;
            counter++;
            iterations.push({ counter, xi, xs, xm, fxm, error });
        }

        console.table(iterations);

        if (fxm === 0) {
            console.log('Solution')
            console.log(`${xm} is a root`)
        } else if (error <= tolerance) {
            console.log('Solution')
            console.log(`${xm} is an approximation to a root with a tolerance ${tolerance}`)
        } else {
            console.log(`Failure in ${nMax} iterations`);
        }
    }
}