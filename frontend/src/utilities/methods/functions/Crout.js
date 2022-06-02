import susRegre from "./SusRegre";
import sustProg from "./SusProgre";
import convertToInmutable from '../../convertToInmutable'
const mathjs = require("mathjs")
function crout(A,B) {
    const stages = [];
    var n= A.length;
    var lower = Array(n).fill(0).map(
           x => Array(n).fill(0));
    var upper = Array(n).fill(0).map(
           x => Array(n).fill(0));
    // diagonalize U
    for (var i = 0; i < n; i++) {
        upper[i][i]=1;
    }
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            A[i][j] = parseFloat(A[i][j]).toPrecision(10);
        }
    }
    stages.push({
        title: `Stage ${0}`,
        matrix: convertToInmutable(A)
    })
    let message = {};
    let logs = [];
    for(var j=0;j<n;j++){
        for(var i=j;i<n;i++){
            var sum =0;
            for(var k=0;k<j;k++){
                sum= sum+lower[i][k]*upper[k][j];
            }
            lower[i][j] = parseFloat(A[i][j]-sum).toPrecision(10);
        }
        for(var i=j+1;i<n;i++){
            var sum =0;
            for(var k=0;k<j;k++){
                sum= sum+lower[j][k]*upper[k][i];
            }
            if(lower[j][j]==0){
                message = { type: 'Error', text: "division by 0"}
                logs = [message];
                return {stages,logs};
            }
            upper[j][i]=parseFloat((A[j][i]-sum)/lower[j][j]).toPrecision(10);
        }
        stages.push({
            title: `L - stage ${j+1}`,
            matrix: convertToInmutable(lower)
        })
        stages.push({
            title: `U - stage ${j+1}`,
            matrix: convertToInmutable(upper)
        })
    }
    
    for(var i=0;i<n;++i){
        lower[i].push(parseFloat(B[i][0]).toPrecision(10));
    }
    const {z,flag}=sustProg(lower);
    if(flag==true){
        message = { type: 'Error', text: "division by 0 during progressive substitution"}
        logs = [message];
        return {stages,logs};
    }
    for(var i=0;i<n;++i){
        upper[i].push(parseFloat(z[i][0]).toPrecision(10));
    }
    var {x,flag1}= susRegre(upper);
    if(flag1==true){
        message = { type: 'Error', text: "division by 0 during regressive substitution"}
        logs = [message];
        return {stages,logs};
    }
    message = { type: 'Success', text: "Successful proccess"}
    logs = [message];
    return {x,stages,logs};
};

export default crout;
   
