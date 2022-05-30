const mathjs = require('mathjs')

module.exports = (f, xi, xs, tolerance, nMax) => {
    const iterations = []
    const logs = []
    let fxi = mathjs.evaluate(f, { x: xi });
    let fxs = mathjs.evaluate(f, { x: xs });
    if (fxi === 0) {
        logs.push({
            type : 'Sucess',
            text : `${xi} is a root`
        })
        //console.log('Solution')
        //console.log('xi is a root')
    } else if (fxs === 0) {
        logs.push({
            type : 'Sucess',
            text : `${xs} is a root`
        })
        //console.log('Solution')
        //console.log('xs is a root')
    } else if (fxi < fxs) {
        let xm = (xi) - ((fxi * (xi - xs)) / (fxi - fxs));
        let fxm = mathjs.evaluate(f,{ x: xm });
        let error = tolerance + 1
        let counter = 1;
        iterations.push([counter, xi, xs, xm, fxm]);

        while (fxm !== 0 && error > tolerance && counter <= nMax) {
            if (fxi * fxm < 0) {
                xs = xm;
                fxs = fxm;
            } else {
                xi = xm
                fxi = fxm
            }

            let xAux = xm;
            xm = (xi) - ((fxi * (xi - xs)) / (fxi - fxs));
            fxm = mathjs.evaluate(f,{ x: xm });
            error = Math.abs(xm - xAux) / xm;
            counter++;
            iterations.push([ counter, xi, xs, xm, fxm, error ]);
        }

        //console.table(fxm !== 0,error > tolerance,counter <= nMax);

        if (fxm === 0) {
            logs.push({
                type : 'Sucess',
                text : `${xm} is a root`
            })
            //console.log('Solution')
            //console.log(`${xm} is a root`)
        } else if (error <= tolerance) {
            logs.push({
                type : 'Sucess',
                text : `${xm} is am approximation to a root with a tolerance ${tolerance}`
            })
            //console.log('Solution')
            //console.log(`${xm} is an approximation to a root with a tolerance ${tolerance}`)
        } else {
            logs.push({
                type : 'Error',
                text : `Failure in ${nMax} iterations`
            })
            //console.log(`Failure in ${nMax} iterations`);
        }
    }
    return {iterations,logs}
}