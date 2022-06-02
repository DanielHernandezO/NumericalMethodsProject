const mathjs = require('mathjs')
let stages = [];
const logs = [];
const partialPivot = (m,n,k) => {
    const list = mathjs.column(m,k);
    let major = -1;
    let pos = -1;
    for(let i = k;i<n;i++){
        if (Math.abs(list[i])> major){
            major = Math.abs(list[i]);
            pos = i;
        }
    }
    const temp = m[k];
    m[k] = m[pos];
    m[pos] = temp;
}

const upperTriangular = (A, b, n) => {
    let m = mathjs.concat(A, b);
    for (let i = 0; i < n - 1; i++) {
        partialPivot(m,n,i)
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

export default  (A, b, n) => {
    stages = [];
    console.log(A,b,n);
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
