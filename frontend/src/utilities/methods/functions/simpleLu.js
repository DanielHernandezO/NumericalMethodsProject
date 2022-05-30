const mathjs = require('mathjs')
const stages = [];
const logs = [];
const fact_lu = (A) => {
    
    const n = A.length;
    let U = mathjs.zeros(n,n).toArray();
    const L = mathjs.identity(n).toArray();
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            L[j][i] = A[j][i] / A[i][i];
            A[j] = mathjs.subtract(mathjs.row(A, j), mathjs.multiply(L[j][i], mathjs.row(A, i)))[0];
        }
        if(i === 0){
            U[i] = A[i]
        }
        U[i+1] = A[i+1]
        
        stages.push({
            title: `Stage ${i+1}`,
            matrix: [...A]
        })

        stages.push({
            title: `L - stage ${i+1}`,
            matrix: [...L]
        })
        stages.push({
            title: `U - stage ${i+1}`,
            matrix: [...U]
        })

    }
    
    return { U, L };
}


const progressive_replacement = (L, b) => {
    const n = b.length;
    const x = mathjs.zeros(n,1).toArray();
    x[0][0] = b[0][0] / L[0][0];
    for (let i = 1; i < n; i++) {
        let temp = 0;
        for (let j = 0; j < i; j++) {
            temp = temp + mathjs.multiply(L[i][j], x[j][0]);
        }
        x[i][0] = (b[i][0] - temp) / L[i][i];
    }
    return x
}

const backward_substitution = (A, b) => {
    const m = mathjs.concat(A, b);
    const n = A.length;
    const x = mathjs.zeros(n).toArray();
    x[n - 1] = m[n - 1][n] / m[n - 1][n - 1];
    for (let i = n - 2; i > -1; i--) {
        let summation = 0;
        for (let j = i + 1; j < n; j++) {
            summation += m[i][j] * x[j]
        }
        x[i] = (m[i][n] - summation) / m[i][i]
    }
    return x;
}


module.exports = (A, b) => {
    stages.push({
        title: 'Stage 0',
        matrix: [...A]
    })
    const { L, U } = fact_lu(A);
    const z = progressive_replacement(L,b);
    const x = backward_substitution(U,z);
    return {x, stages};
}