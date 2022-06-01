const mathjs = require("mathjs")
function susRegreComplex(M){
    var n=M.length;
    var x=[];
    for(var i=0;i<n;++i){
        x.push(new Array());
        x[i].push(mathjs.complex(0));
    }
    var flag1=false;
    if(M[n-1][n-1]==0){
        flag1=true
    }else{
        x[n-1][0]=mathjs.divide(M[n-1][n],M[n-1][n-1]);
    }
    var aux,aux1
    for(var i=n-2;i>=0;--i){
        if(flag1==true){
            break;
        }
        aux=[mathjs.complex(1)];
        for(var j=i+1;j<n;++j){
            aux.push(mathjs.complex(x[j][0]));
        }
        aux1= [mathjs.complex(M[i][n])]
        for(var j=i+1;j<n;++j){
          aux1.push(mathjs.multiply(M[i][j],-1));
        }
        var sum=mathjs.complex(0);
        for(var j=0;j<aux1.length;++j){
            sum=mathjs.add(sum,mathjs.multiply(aux1[j],aux[j]));
        }
        if(M[i][i]==0){
            flag1=true;
        }else{
            x[i][0]= mathjs.divide(sum,M[i][i]);
        }
        
    }
    return {x,flag1};
}

export default susRegreComplex;