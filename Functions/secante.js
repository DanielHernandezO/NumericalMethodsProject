const mathjs = require('mathjs')

module.exports = (f, x0, x1, tolerance, nMax) => {
    const iterations = [];
    fx0 = mathjs.evaluate(f, { x: x0 });

    if (fx0 === 0) {
        console.log('Solution')
        console.log('xi is a root')
    } else {
        fx1 = mathjs.evaluate(f, { x: x1 });
        d = (fx1 - fx0);
        error = tolerance + 1;
        counter = 0;
        iterations.push({ counter, xi: x0, fxi:fx0, error })
        iterations.push({ counter, xi: x1, fxi:fx1, error })

        while (fx1 !== 0 && error > tolerance && counter < nMax) {
            x2 = x1 - ((fx1 * (x1 - x0)) / (d));
            error = Math.abs(x2 - x1);
            x0 = x1;
            fx0 = fx1;
            fx1 = mathjs.evaluate(f,{x:x2})
            x1=x2;
            d=(fx1-fx0);
            counter++;
            iterations.push({counter,xi:x1,fxi:fx1,error})
        }

        console.table(iterations);

        if (fx1 === 0) {
            console.log('Solution')
            console.log(`${x1} is a root`)
        } else if (error <= tolerance) {
            console.log('Solution')
            console.log(`${x1} is an approximation to a root with a tolerance ${tolerance}`)
        } else if (d==0){
            console.log(`${x1} is a possible multiple root`)
        }else {
            console.log(`Failure in ${nMax} iterations`);
        }
    }
}