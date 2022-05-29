const mathjs = require('mathjs')

module.exports = (x,y) => {
    function zeros(dimensions) {
        var array = [];
        for (var i = 0; i < dimensions[0]; ++i) {
            array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
        }
        return array;
    }
    
    A = []
    B = []
    n = x.length;
    m = 2*(n-1);
    A = zeros([m,m]);
    B = zeros([m,1]);
    Coef = zeros([n-1,2]);
    z = 0;
    for (let i = 1; i < x.length; i++) {
        A[i][z] = x[i];
        A[i][z+1] = 1;
        z = z+2;
        B[i][0]=y[i];

    }
    
    A[0][0] = x[0];
    A[0][1] = 1;
    B[0][0] = y[0];
    
    z=0;
    for (let i = 1; i < x.length-1; i++) {
        A[x.length-1+i][z] = x[i];
        A[x.length-1+i][z+2] = -x[i];
        A[x.length-1+i][z+1] = 1;
        A[x.length-1+i][z+3] = -1;
        z=z+2; 
        B[x.length-1+i][0]=0;
    }
    
    inverse= mathjs.inv(A);
    result = mathjs.multiply(inverse,B);
    newarray = zeros([3,2]);
    toit=0;
    
    for (let i = 1; i < newarray.length+1  ; i++) {

        newarray[i-1][0] = result[toit];
        newarray[i-1][1] = result[toit+1];
        toit = toit+2;
        console.log(newarray);
    }
    return newarray;
}
