const mathjs = require('mathjs')
module.exports = (a, b, f, n) => {
    const deltaX = (b - a) / n;
    let A = 0;
    const iterations = [];

    for (let i = 0; i <= n; i++) {
        const xi = a + i * deltaX;
        const fxi = i > 0 && i < n ? i % 2 == 0 ? mathjs.evaluate(f, { x: xi }) * 2 : mathjs.evaluate(f, { x: xi }) * 4 : mathjs.evaluate(f, { x: xi });
        A = A + fxi;
        iterations.push([xi,fxi,A]);
    }
    A = A * (deltaX / 3);

    return {A, iterations};

}
