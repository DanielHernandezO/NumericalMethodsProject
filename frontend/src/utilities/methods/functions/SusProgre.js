function sustProg(M){
    var n=M.length;
    var z=[];
    for(var i=0;i<n;++i){
        z.push(new Array());
        z[i].push(0);
    }
    var flag=false
    if(M[0][0]==0){
        flag=true
    }else{
        z[0][0]=parseFloat(M[0][n]/M[0][0]).toPrecision(10);
    }
    var aux,aux1
    for(var i=1;i<n;++i){
        if(flag==true){
            break
        }
        aux=[1];
        for(var j=0;j<i;++j){
            aux.push(z[j][0]);
        }
        aux1= [M[i][n]]
        for(var j=0;j<i;++j){
          aux1.push(M[i][j]*-1);
        }
        var sum=0;
        for(var j=0;j<aux1.length;++j){
            sum=sum+aux1[j]*aux[j];
        }
        if(M[i][i]==0){
            flag=true
        }else{
            z[i][0]= parseFloat(sum/M[i][i]).toPrecision(10);
        }
    }
    return {z,flag};
}
export default sustProg;