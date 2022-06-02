const mathjs = require('mathjs')


export default (x,y) => {
    function zeros(dimensions) {
        var array = [];
        for (var i = 0; i < dimensions[0]; ++i) {
            array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
        }
        return array;
    }
    
    let A = []
    let B = []
    let n = x.length;
    let m = 3*(n-1);
    A = zeros([m,m]);
    B = zeros([m,1]);
    let Coef = zeros([n-1,3]);
    let z = 0;
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
    let logs = [];
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
    if (mathjs.det(A) == 0  ){
        logs.push({type: 'Error', text:'Determinant can not be 0'})
        return {A,logs};
    }
    let inverse= mathjs.inv(A);
    let result = mathjs.multiply(inverse,B);
    let newarray = zeros([result.length/3,3]);
    let toit=0;
   
    for (let i = 1; i < (result.length/3)+1  ; i++) {

        newarray[i-1][0] = result[toit];
        newarray[i-1][1] = result[toit+1];
        newarray[i-1][2] = result[toit+2];
        toit = toit+3;
    }
    for(var i = 0; i < newarray.length; i++) {
        z = 2;
        for(var j = 0; j < 3; j++) {
            if(j<2){
                newarray[i][j] = newarray[i][j] + "x^" +z;
            }
            else{
                newarray[i][j] = newarray[i][j];
            }
            
            z--;
        }    
    }
    logs.push({ type: 'Success', text: "Correct Input"})
    return {newarray,logs};
}
