const mathjs = require('mathjs')
let stages = [];
const logs = [];
const upperTriangular = (A, b, n) => {
    let m = mathjs.concat(A, b);
    for (let i = 0; i < n - 1; i++) {
        if (m[i][i] === 0) {
            logs.push({
                type: 'Error',
                text: 'Error when executing the method: division by 0'
            })
            return { error: true }
        }
        for (let j = i + 1; j < n; j++) {
            if (m[j][i] !== 0) {
                m[j] = mathjs.subtract(mathjs.row(m, j), mathjs.multiply(mathjs.row(m, i), m[j][i] / m[i][i]))[0];
            }
        }

        stages.push({
            title: `Stage ${i + 1}`,
            matrix: [...m]
        })
    }
    return { m, error: false };
}

const sustitution = (m, n) => {
    const results = new Array(n);
    results[n - 1] = m[n - 1][n] / m[n - 1][n - 1]

    for (let i = n - 2; i > -1; i--) {
        let summation = 0;
        for (let j = i + 1; j < n; j++) {
            summation += m[i][j] * results[j]
        }
        if (m[i][i] === 0) {
            logs.push({
                type: 'Error',
                text: 'Error when executing the method: division by 0'
            })
            return { error: true }
        }
        results[i] = (m[i][n] - summation) / m[i][i]
    }
    return { x: results, error: false };
}

module.exports = (A, b, n) => {
    stages = [];
    stages.push({
        title: 'Stage 0',
        matrix: [...mathjs.concat(A, b)]
    })
    const resultUpperTriangular = upperTriangular(A, b, n)
    if (resultUpperTriangular.error) return { logs, stages: [] };

    const resultSubstitution = sustitution(resultUpperTriangular.m, n);
    if (resultSubstitution.error) return { logs, stages: [] };

    return { x:resultSubstitution.x, stages, logs }
}

