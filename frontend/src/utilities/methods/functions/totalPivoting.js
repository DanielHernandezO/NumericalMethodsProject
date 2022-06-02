const mathjs = require('mathjs')
let stages = [];
const logs = [];
const totalPivot = (m, n, k) => {
    let major = -1;
    let posRow = -1;
    let posColumn = -1;
    for (let i = k; i < n; i++) {
        for (let j = k; j < n; j++) {
            if (Math.abs(m[i][j]) > major) {
                major = Math.abs(m[i][j]);
                posRow = i;
                posColumn = j;
            }
        }
    }
    if (posRow !== k) {
        const temp = m[k];
        m[k] = m[posRow];
        m[posRow] = temp;
    }
    if (posColumn !== k) {
        m = mathjs.transpose(m);
        const temp2 = m[k];
        m[k] = m[posColumn];
        m[posColumn] = temp2;
        m = mathjs.transpose(m);
    }

    return { posColumn, matriz: m };
}


const generateMark = (n) => {
    const markResult = new Array(n)
    for (let i = 0; i < n; i++) {
        markResult[i] = i;
    }
    return markResult;
}

const upperTriangular = (A, b, n) => {
    const marks = generateMark(n);
    let m = mathjs.concat(A, b);
    for (let i = 0; i < n - 1; i++) {
        const { posColumn, matriz } = totalPivot(m, n, i);

        let markAux = marks[i]
        marks[i] = marks[posColumn]
        marks[posColumn] = markAux;

        m = [...matriz];
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
    return { m, marks };
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


const orderResult = (x, marks) => {
    const result = new Array(x.length)
    marks.map((element, index) => {
        result[element] = x[index]
    })
    return result;
}

module.exports = (A, b, n) => {
    stages = [];
    stages.push({
        title: 'Stage 0',
        matrix: [...mathjs.concat(A, b)]
    })
    const resultUpperTriangular = upperTriangular(A, b, n);
    if (resultUpperTriangular.error) return { logs, stages: [] };
    const resultSubstitution = sustitution(resultUpperTriangular.m, n);
    if (resultSubstitution.error) return { logs, stages: [] };
    let x = orderResult(resultSubstitution.x, resultUpperTriangular.marks);

    return { logs, stages, x }
}
