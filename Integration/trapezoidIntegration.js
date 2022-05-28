const mathjs = require('mathjs')
module.exports = (a, b, f, n) => {
    deltaX = (b - a) / n;
    let A = 0;
    const iterations = [];
    for (let i = 0; i <= n; i++) {
        xi = a + i*deltaX;
        fxi = i > 0 && i<n? 2 * mathjs.evaluate(f,{x:xi}):  mathjs.evaluate(f,{x:xi});
        A = A + fxi;
        iterations.push({xi,fxi,A});
    }
    A = A * (deltaX/2);
    console.table(iterations);
    console.log('A = '+ A);
    return A;
}