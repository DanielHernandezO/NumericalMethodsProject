import sustProgComplex from "./sustProgComplex";
import susRegreComplex from "./susRegreComplex";
const mathjs = require("mathjs")
const convertToInmutable = require('../../convertToInmutable')
function Cholesky(matrix,B)
{
    
    const stages = [];
    var n= matrix.length;
    var lower = Array(n).fill(mathjs.complex(0)).map(x => Array(n).fill(mathjs.complex(0)));
    let message = {};
    let logs = [];
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            matrix[i][j] = mathjs.complex(parseFloat(matrix[i][j]));
        }
    }
    stages.push({
        title: `Stage ${0}`,
        matrix: convertToInmutable(matrix)
    })
    for (var j = 0; j <n; j++) {
        for(var i=0;i<j-1;i++){
            var sum = mathjs.complex(0);
            for(var k=0;k<i-1;k++){
                sum= mathjs.add(sum,mathjs.multiply(lower[k][i],lower[k][j]));
            }
            lower[i][j] = mathjs.divide(mathjs.subtract(matrix[i][j],sum),lower[i][i]);
        }
        var sum = mathjs.complex(0);
        for(var k=0;k<j-1;k++){
            sum = mathjs.add(sum,mathjs.pow(lower[k][j],2));
        }
        lower[j][j] = mathjs.pow(mathjs.subtract(matrix[j][j],sum),(1/2));
        console.table(lower)
        stages.push({
            title: `L - stage ${i+1}`,
            matrix: convertToInmutable(lower)
        })
        var upper = mathjs.transpose(lower)
        stages.push({
            title: `U - stage ${i+1}`,
            matrix: convertToInmutable(upper)
        })
    }
    for(var i=0;i<n;++i){
        lower[i].push(mathjs.complex(parseFloat(B[i][0])));
    }
    const {z,flag}=sustProgComplex(lower);
    if(flag==true){
        message = { type: 'Error', text: "division by 0 during progressive substitution"}
        logs = [message];
        return {stages,logs};
    }
    for(var i=0;i<n;++i){
        upper[i].push(mathjs.complex(parseFloat(z[i][0])));
    }
    var {x,flag1}= susRegreComplex(upper);
    if(flag1==true){
        message = { type: 'Error', text: "division by 0 during regressive substitution"}
        logs = [message];
        return {stages,logs};
    }
    message = { type: 'Success', text: "Successful proccess"}
    console.log("return");
    return {x,stages,logs}
}

export default Cholesky;