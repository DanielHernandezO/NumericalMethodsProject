import susRegre from "./SusRegre";
import sustProg from "./SusProgre";

function Doolittle(mat,B)
{
    const stages = [];
    var n= mat.length;
    var lower = Array(n).fill(0).map(
           x => Array(n).fill(0));
    var upper = Array(n).fill(0).map(
           x => Array(n).fill(0));
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            mat[i][j] = parseFloat(mat[i][j]).toPrecision(10);
        }
    }
    stages.push({
        title: `Stage ${0}`,
        matrix: [...mat]
    })
    let message = {};
    let logs = []
    for(var i = 0; i < n; i++){
        for(var k = i; k < n; k++){
            var sum = 0;
            for(var j = 0; j < i; j++)
                sum += (lower[i][j] * upper[j][k]);
            upper[i][k] = parseFloat(mat[i][k] - sum).toPrecision(10);
        }
        for(var k = i; k < n; k++){
            if (i == k)
                lower[i][i] = 1;
            else{
                var sum = 0;
                for(var j = 0; j < i; j++)
                    sum += (lower[k][j] * upper[j][i]);
                if(upper[i][i]==0){
                    message = { type: 'Error', text: "division by 0"}
                    logs = [message];
                    return {stages,logs};
                }
                lower[k][i] = parseFloat((mat[k][i] - sum) /upper[i][i]).toPrecision(10);
            }
        }
        stages.push({
            title: `L - stage ${i+1}`,
            matrix: [...lower]
        })
        stages.push({
            title: `U - stage ${i+1}`,
            matrix: [...upper]
        })
    }
    for(var i=0;i<n;++i){
        lower[i].push(parseFloat(B[i][0]).toPrecision(10));
    }
    const {z,flag}=sustProg(lower);
    if(flag==true){
        message = { type: 'Error', text: "division by 0 during progressive substitution"}
    }
    for(var i=0;i<n;++i){
        upper[i].push(parseFloat(z[i][0]).toPrecision(10));
    }
    var {x,flag1}= susRegre(upper);
    if(flag1==true){
        message = { type: 'Error', text: "division by 0 during regressive substitution"}
    }
    if(flag1==false && flag==false){
        message = { type: 'Success', text: "Successful proccess"}
    }
    logs = [message];
    return {x,stages,logs};
}

export default Doolittle;