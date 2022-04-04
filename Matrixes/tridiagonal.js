module.exports = (a, b, c, d) => {
    N = d.length
    c[0] = c[0] / b[0];
    d[0] = d[0] / b[0];

    for (i = 1; i < N; i++) {
        temp = b[i] - a[i] * c[i - 1];
        if(i < (N-1)) c[i] = c[i] / temp;
        d[i] = (d[i] - a[i] * d[i - 1]) / temp;
        console.log('d: '+d)
    }

    x = d
    for (i = N - 2; i >= 0; i--){
        x[i] = d[i] - c[i] * x[i + 1];
        console.log('d: '+x)
    }
        
    return x;
}