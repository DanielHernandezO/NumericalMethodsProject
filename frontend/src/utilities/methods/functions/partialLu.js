const mathjs = require('mathjs')
const stages  = [];
const logs = [];

const partialPivot = (A, k, P, L) => {
    const list = mathjs.column(A, k);
    let major = -1;
    let pos = -1;
    const n = A.length;
    for (let i = k; i < n; i++) {
        if (Math.abs(list[i]) > major) {
            major = Math.abs(list[i]);
            pos = i;
        }
    }
    let temp = A[k];
    A[k] = A[pos];
    A[pos] = temp;
    let tempPer = P[k];
    P[k] = P[pos];
    P[pos] = tempPer;
    let tempL = L[k];
    L[k] = L[pos];
    L[pos] = tempL;
}


const fact_lu = (A) => {
    const n = A.length;
    let U = mathjs.zeros(n,n).toArray();
    let L = mathjs.zeros(n, n).toArray();
    let P = mathjs.identity(n).toArray();
    for (let i = 0; i < n - 1; i++) {
        partialPivot(A, i, P, L);
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
            matrix: [...A]
        })

        stages.push({
            title: `L - stage ${i + 1}`,
            matrix: [...mathjs.add(L, mathjs.identity(n).toArray())]
        })
        stages.push({
            title: `U - stage ${i + 1}`,
            matrix: [...U]
        })
        stages.push({
            title: `P - stage ${i + 1}`,
            matrix: [...P]
        })
    }
    L = mathjs.add(L, mathjs.identity(n).toArray());
    return { U, L, P, error: false };
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

module.exports = (A, b) => {
    stages.push({
        title: 'Stage 0',
        matrix: [...A]
    })
    const resultFactLu = fact_lu(A);

    if (resultFactLu.error) return { logs, stages: [] };

    const Bn = mathjs.multiply(resultFactLu.P, b);
    
    const resultProgressiveReplacement = progressive_replacement(resultFactLu.L, Bn);

    if (resultProgressiveReplacement.error) return { logs, stages: [] };

    const resultBackwardSubstitution = backward_substitution(resultFactLu.U, resultProgressiveReplacement.x);

    if (resultBackwardSubstitution.error) return { logs, stages: [] };
    
    return { x: resultBackwardSubstitution.x, stages, logs };
}