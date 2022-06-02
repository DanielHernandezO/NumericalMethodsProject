const mathjs = require('mathjs')
export default  (f, f1, f2, x0, tolerance, nMax) => {
    try {
        const iterations = [];
        const logs = [];
        let xi = x0
        let fxi = mathjs.evaluate(f, { x: xi });
        if (fxi === 0) {
            logs.push({ type: 'Success', text: xi + 'is a root' });
            return { iterations, logs, xi }
        } else {
            let counter = 0;
            let f1xi = mathjs.evaluate(f1, { x: xi });
            let f2xi = mathjs.evaluate(f2, { x: xi });
            let error = tolerance + 1;
            let det = (Math.pow(f1xi, 2)) - (fxi * f2xi);
            iterations.push([counter, xi, fxi, ''])
            while (fxi !== 0 && error > tolerance && counter < nMax && det !== 0) {
                let xiaux = xi;
                xi = xi - ((fxi * f1xi) / ((Math.pow(f1xi, 2)) - (fxi * f2xi)));
                fxi = mathjs.evaluate(f, { x: xi });
                f1xi = mathjs.evaluate(f1, { x: xi });
                f2xi = mathjs.evaluate(f2, { x: xi });
                error = Math.abs(xi - xiaux);
                det = (Math.pow(f1xi, 2)) - (fxi * f2xi);
                counter++;
                iterations.push([counter, xi, fxi, error]);
            }

            if (fxi === 0) logs.push({ type: 'Success', text: xi + ' is a root' })
            else if (error <= tolerance) logs.push({ type: 'Success', text: xi + ' is an approximation of the root' })
            else if (det === 0) logs.push({ type: 'Error', text: `Error during method execution` })
            else logs.push({ type: 'Error', text: 'The method fails with the maximum number of iterations given' })
            return { iterations, logs, xi }
        }
    } catch (err) {

    }

}