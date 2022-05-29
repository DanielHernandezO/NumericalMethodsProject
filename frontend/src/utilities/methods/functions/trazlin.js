
const mathjs = require('mathjs')

const trazlin = (x,y) => {
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
    let m = 2*(n-1);
    A = zeros([m,m]);
    B = zeros([m,1]);
    let Coef = zeros([n-1,2]);
    let z = 0;
    for (let i = 1; i < x.length; i++) {
        A[i][z] = x[i];
        A[i][z+1] = 1;
        z = z+2;
        B[i][0]=y[i];

    }
    let logs = [];
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
    if (mathjs.det(A) == 0  ){
        logs.push({type: 'Error', text:'Determinant can not be 0'})
        return {A,logs};
    }
    let inverse= mathjs.inv(A);
    let result = mathjs.multiply(inverse,B);
    let newarray = zeros([3,2]);
    let toit=0;
    
    for (let i = 1; i < newarray.length+1  ; i++) {

        newarray[i-1][0] = result[toit][0];
        newarray[i-1][1] = result[toit+1][0];
        toit = toit+2;
    }
    for(var i = 0; i < newarray.length; i++) {
        z = newarray.length-1;
        for(var j = 0; j < newarray.length-1; j++) {

            if(j==1){
                newarray[i][j] = newarray[i][j]}
            else{newarray[i][j] = newarray[i][j] + "x"}
            z--;
        }    
    }
    logs.push({ type: 'Success', text: "Correct Input"})
    return {newarray,logs};
}

export default trazlin;
