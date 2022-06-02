const mathjs = require('mathjs')
export default (a, b, f, n) => {
    const deltaX = (b - a) / n;
    let A = 0;
    const iterations = [];
    for (let i = 0; i <= n; i++) {
        const xi = a + i*deltaX;
        const fxi = i > 0 && i<n? 2 * mathjs.evaluate(f,{x:xi}):  mathjs.evaluate(f,{x:xi});
        A = A + fxi;
        iterations.push([i+1,xi,fxi,A]);
    }
    A = A * (deltaX/2);
    return {A, iterations};
}