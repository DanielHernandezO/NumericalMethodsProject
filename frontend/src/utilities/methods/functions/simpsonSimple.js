const mathjs = require('mathjs')
module.exports = (a, b, f, n) => {
    const deltaX = (b - a) / n;
    let A = 0;
    const iterations = [];

    for (let i = 0; i <= n; i++) {
        const xi = a + i * deltaX;
        const fxi = i > 0 && i < n ? i % 3 == 0 ? mathjs.evaluate(f, { x: xi }) * 2 : mathjs.evaluate(f, { x: xi }) * 3 : mathjs.evaluate(f, { x: xi });
        A = A + fxi;
        iterations.push([xi,fxi,A]);
    }
    A = A * (3*deltaX / 8);
    return {A, iterations};
}
