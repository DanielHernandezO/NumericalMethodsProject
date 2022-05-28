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
    m = 3*(n-1);
    A = zeros([m,m]);
    B = zeros([m,1]);
    Coef = zeros([n-1,3]);
    z = 0;
    for (let i = 1; i < n; i++) {
        A[i][z] = (x[i])**2;

        A[i][z+1] = x[i];
        A[i][z+2] = 1;
        z = z+3;
        B[i][0]=y[i];

    }
    
    A[0][0] = x[0]**2;
    A[0][1] = x[0]**1;
    A[0][2] = 1;
    B[0][0] = y[0];
    z=0;
    
    for (let i = 1; i < x.length-1; i++) {

        A[x.length-1+i][z] = x[i]**2;
        A[x.length-1+i][z+1] = x[i];
        A[x.length-1+i][z+2] = 1;
        A[x.length-1+i][z+3] = -(x[i]**2);
        A[x.length-1+i][z+4] = -x[i];
        A[x.length-1+i][z+5] = -1;
        z=z+3; 
        B[n-1+i][0]=0;
    }
    z=0;
    for (let i = 2; i < x.length; i++) {
        A[2*x.length-4+i][z] = x[i-1]*2;
        A[2*x.length-4+i][z+1] = 1;
        A[2*x.length-4+i][z+2] = 0;
        A[2*x.length-4+i][z+3] = -(x[i-1]*2);
        A[2*x.length-4+i][z+4] = -1;
        A[2*x.length-4+i][z+5] = 0;
        z=z+3;
    }
    A[m-1][0]=2;
    B[m-1][0]=0;
    inverse= mathjs.inv(A);
    result = mathjs.multiply(inverse,B);
    newarray = zeros([3,3]);
    toit=0;
    
    for (let i = 1; i < Math.trunc(B.length/2)  ; i++) {

        newarray[i-1][0] = result[toit];
        newarray[i-1][1] = result[toit+1];
        newarray[i-1][2] = result[toit+2];
        toit = toit+3;
    }
    return newarray;
}

