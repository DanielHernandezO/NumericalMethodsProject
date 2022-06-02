const convertToInmutable = require('../../convertToInmutable')
console.log(convertToInmutable)
const mathjs = require('mathjs')
let stages = [];
const logs = [];
const fact_lu = (A) => {
    const n = A.length;
    let U = mathjs.zeros(n, n).toArray();
    const L = mathjs.identity(n).toArray();

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (A[i][i] === 0) {
                logs.push({
                    type: 'Error',
                    text: 'Error when executing the method: division by 0'
                })
                return { error: true }
            }
            L[j][i] = A[j][i] / A[i][i];
            A[j] = mathjs.subtract(mathjs.row(A, j), mathjs.multiply(L[j][i], mathjs.row(A, i)))[0];
        }
        if (i === 0) {
            U[i] = A[i]
        }
        U[i + 1] = A[i + 1]

        stages.push({
            title: `Stage ${i + 1}`,
            matrix: convertToInmutable(A)
        })

        stages.push({
            title: `L - stage ${i + 1}`,
            matrix: convertToInmutable(L)
        })
        stages.push({
            title: `U - stage ${i + 1}`,
            matrix: convertToInmutable(U)
        })

    }

    return { U, L, error: false };
}


const progressive_replacement = (L, b) => {
    const n = b.length;
    const x = mathjs.zeros(n, 1).toArray();
    if (L[0][0] === 0) {
        logs.push({
            type: 'Error',
            text: 'Error when executing the method: division by 0'
        })
        return { error: true }
    }
    x[0][0] = b[0][0] / L[0][0];
    for (let i = 1; i < n; i++) {
        let temp = 0;
        for (let j = 0; j < i; j++) {
            temp = temp + mathjs.multiply(L[i][j], x[j][0]);
        }
        if (L[i][i] === 0) {
            logs.push({
                type: 'Error',
                text: 'Error when executing the method: division by 0'
            })
            return { error: true }
        }
        x[i][0] = (b[i][0] - temp) / L[i][i];
    }
    return { x, error: false }
}

const backward_substitution = (A, b) => {
    const m = mathjs.concat(A, b);
    const n = A.length;
    const x = mathjs.zeros(n).toArray();
    if (m[n - 1][n - 1] === 0) {
        logs.push({
            type: 'Error',
            text: 'Error when executing the method: division by 0'
        })
        return { error: true }
    }
    x[n - 1] = m[n - 1][n] / m[n - 1][n - 1];
    for (let i = n - 2; i > -1; i--) {
        let summation = 0;
        for (let j = i + 1; j < n; j++) {
            summation += m[i][j] * x[j]
        }
        if (m[i][i] === 0) {
            logs.push({
                type: 'Error',
                text: 'Error when executing the method: division by 0'
            })
            return { error: true }
        }
        x[i] = (m[i][n] - summation) / m[i][i]
    }
    return { x, error: false };
}


export default  (A, b) => {
    stages = [];
    stages.push({
        title: 'Stage 0',
        matrix: convertToInmutable(A)
    })
    const resultFactLu = fact_lu(A);
    if (resultFactLu.error) return { logs, stages: [] };

    const resultProgressiveReplacement = progressive_replacement(resultFactLu.L, b);
    if (resultProgressiveReplacement.error) return { logs, stages: [] };

    const resultBackwardSubstitution = backward_substitution(resultFactLu.U, resultProgressiveReplacement.x);
    if (resultBackwardSubstitution.error) return { logs, stages: [] };
    return { x: resultBackwardSubstitution.x, stages, logs };
}