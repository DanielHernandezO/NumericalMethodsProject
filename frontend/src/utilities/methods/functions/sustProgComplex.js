const mathjs = require("mathjs")
function sustProgComplex(M){
    var n=M.length;
    var z=[];
    for(var i=0;i<n;++i){
        z.push(new Array());
        z[i].push(mathjs.complex(0));
    }
    var flag=false
    if(M[0][0]==0){
        flag=true
    }else{
        z[0][0]=mathjs.divide(M[0][n],M[0][0]);
    }
    var aux,aux1
    for(var i=1;i<n;++i){
        if(flag==true){
            break
        }
        aux=[mathjs.complex(1)];
        for(var j=0;j<i;++j){
            aux.push(mathjs.complex(z[j][0]));
        }
        aux1= [mathjs.complex(M[i][n])]
        for(var j=0;j<i;++j){
          aux1.push(mathjs.multiply(M[i][j],-1));
        }
        var sum=mathjs.complex(0);
        for(var j=0;j<aux1.length;++j){
            sum=mathjs.add(sum,mathjs.multiply(aux1[j],aux[j]));
        }
        if(M[i][i]==0){
            flag=true
        }else{
            z[i][0]= mathjs.divide(sum,M[i][i]);
        }
    }
    return {z,flag};
}
export default sustProgComplex;