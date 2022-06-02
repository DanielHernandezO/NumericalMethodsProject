const mathjs = require('mathjs')

export default  (f, x0, x1, tolerance, nMax) => {
    const iterations = [];
    const logs = [];
    let fx0 = mathjs.evaluate(f, { x: x0 });

    if (fx0 === 0) {
        logs.push({
            type: 'Success',
            text: `${x0} is a root`
        })
        // console.log('Solution')
        // console.log('xi is a root')
    } else {
        let fx1 = mathjs.evaluate(f, { x: x1 });
        let d = (fx1 - fx0);
        let error = tolerance + 1;
        let counter = 0;
        iterations.push([counter, x0, fx0])
        iterations.push([++counter, x1, fx1])

        while (fx1 !== 0 && error > tolerance && counter < nMax) {
            let x2 = x1 - ((fx1 * (x1 - x0)) / (d));
            error = Math.abs(x2 - x1);
            x0 = x1;
            fx0 = fx1;
            fx1 = mathjs.evaluate(f, { x: x2 })
            x1 = x2;
            d = (fx1 - fx0);
            counter++;
            iterations.push([counter, x1, fx1, error])
        }

        // console.table(iterations);

        if (fx1 === 0) {
            // console.log('Solution')
            // console.log(`${x1} is a root`)
            logs.push({
                type: 'Success',
                text: `${x0} is a root`
            })
        } else if (error <= tolerance) {
            // console.log('Solution')
            // console.log(`${x1} is an approximation to a root with a tolerance ${tolerance}`)
            logs.push({
                type: 'Success',
                text: `${x1} is an approximation to a root with a tolerance ${tolerance}`
            })
        } else if (d == 0) {
            logs.push({
                type: 'Error',
                text: `${x1} is a possible multiple root`
            })
            // console.log(`${x1} is a possible multiple root`)
        } else {
            logs.push({
                type: 'Error',
                text: `Failure in ${nMax} iterations`
            })
            //console.log(`Failure in ${nMax} iterations`);
        }
    }

    return { iterations, logs }
}