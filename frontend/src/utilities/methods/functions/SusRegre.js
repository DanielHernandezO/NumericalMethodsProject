function susRegre(M){
    var n=M.length;
    var x=[];
    for(var i=0;i<n;++i){
        x.push(new Array());
        x[i].push(0);
    }
    var flag1=false;
    if(M[n-1][n-1]==0){
        flag1=true
    }else{
        x[n-1][0]=parseFloat(M[n-1][n]/M[n-1][n-1]).toPrecision(10);
    }
    var aux,aux1
    for(var i=n-2;i>=0;--i){
        if(flag1==true){
            break;
        }
        aux=[1];
        for(var j=i+1;j<n;++j){
            aux.push(x[j][0]);
        }
        aux1= [M[i][n]]
        for(var j=i+1;j<n;++j){
          aux1.push(M[i][j]*-1);
        }
        var sum=0;
        for(var j=0;j<aux1.length;++j){
            sum=sum+aux1[j]*aux[j];
        }
        if(M[i][i]==0){
            flag1=true;
        }else{
            x[i][0]= parseFloat(sum/M[i][i]).toPrecision(10);
        }
        
    }
    return {x,flag1};
}

export default susRegre;