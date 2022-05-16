const mathjs = require('mathjs')
module.exports = (a, b, f, n) => {
    deltaX = (b - a) / n;
    let A = 0;

    //Test if n is par

    for (let i = 0; i <= n; i++) {
        xi = a + i * deltaX;
        fxi = i > 0 && i < n ? i % 3 == 0 ? mathjs.evaluate(f, { x: xi }) * 2 : mathjs.evaluate(f, { x: xi }) * 3 : mathjs.evaluate(f, { x: xi });
        A = A + fxi;
    }
    A = A * (3*deltaX / 8);
    return A
}

