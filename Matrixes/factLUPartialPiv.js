const mathjs = require('mathjs')
const print = require('../utilities/printMatrix')
const partialPivot = (U, k, P, L) => {
    list = mathjs.column(U, k);
    major = -1;
    pos = -1;
    n = U.length;
    for (let i = k; i < n; i++) {
        if (Math.abs(list[i]) > major) {
            major = Math.abs(list[i]);
            pos = i;
        }
    }
    temp = U[k];
    U[k] = U[pos];
    U[pos] = temp;
    tempPer = P[k];
    P[k] = P[pos];
    P[pos] = tempPer;
    tempL = L[k];
    L[k] = L[pos];
    L[pos] = tempL;
}


const fact_lu = (A) => {
    U = A;
    n = A.length;
    L = mathjs.zeros(n, n).toArray();
    P = mathjs.identity(n).toArray();
    for (i = 0; i < n - 1; i++) {
        partialPivot(U, i, P, L);
        for (j = i + 1; j < n; j++) {
            L[j][i] = U[j][i] / U[i][i];
            U[j] = mathjs.subtract(mathjs.row(U, j), mathjs.multiply(L[j][i], mathjs.row(U, i)))[0];
        }
    }
    L = mathjs.add(L, mathjs.identity(n).toArray());
    return { L, U, P };
}

const progressive_replacement = (L, b) => {
    n = b.length;
    x = mathjs.zeros(n, 1).toArray();
    x[0][0] = b[0][0] / L[0][0];
    for (i = 1; i < n; i++) {
        temp = 0;
        for (j = 0; j < i; j++) {
            temp = temp + mathjs.multiply(L[i][j], x[j][0]);
        }
        x[i][0] = (b[i][0] - temp) / L[i][i];
    }
    return x
}

const backward_substitution = (A, b) => {
    m = mathjs.concat(A, b);
    n = A.length;
    x = mathjs.zeros(n).toArray();
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
    const { L, U, P } = fact_lu(A);
    Bn = mathjs.multiply(P, b);
    z = progressive_replacement(L, Bn);
    console.log('L = \n');
    print(L)
    console.log('\nU = \n');
    print(U)
    console.log('\nP = \n');
    print(P)
    console.log('\nBn = \n');
    print(Bn)
    console.log('\nz = \n');
    print(z)
    x = backward_substitution(U, z);
    console.log('\nx = ',x)
}