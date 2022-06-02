function retornar(a){
    const arreglos = [];
    for (var i = 0; i < a.length; i++) {
        arreglos.push([a[i]]);
    }
    return arreglos;
}

module.exports = (a, b, c, d) => {
    const stages = [];
    const logs = [];
    var N = d.length

    if(b[0] === 0){
            logs.push({
                type: 'Error',
                text: 'Error when executing the method: division by 0'
            })
            return {logs, stages: []}
    }
    c[0] = c[0] / b[0];
    d[0] = d[0] / b[0];
 
    for (let i = 1; i < N; i++) {
        var temp = b[i] - a[i] * c[i - 1];
        if(temp === 0){
            logs.push({
                type: 'Error',
                text: 'Error when executing the method: division by 0'
            })
            return {logs, stages: []}
        }
        if(i < (N-1)) c[i] = c[i] / temp;
        d[i] = (d[i] - a[i] * d[i - 1]) / temp;
        stages.push({
            title: `c${i + 1}: `,
            matrix: retornar(c)
        })
        stages.push({
            title: `d${i + 1}: `,
            matrix: retornar(d)
        })
    }
 
    let x = d
    for (let  i = N - 2; i >= 0; i--){
        x[i] = d[i] - c[i] * x[i + 1];
    }
        
    return {x, stages, logs };
}