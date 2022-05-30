const mathjs = require("mathjs");

function newton(f,fder,tolerance,x0,niter) {
    var fx = mathjs.evaluate(f,{x:x0});
    var dfx = mathjs.evaluate(fder,{x:x0});
    let matrix=[];
    for(var i=0; i<niter+2; i++) {
        matrix[i] = new Array(5);
        for(var j=0;j<5;++j){
            matrix[i][j]=0;
        }
    }
    matrix[0][0]="iteration";
    matrix[0][1]="xn";
    matrix[0][2]="f(xn)";
    matrix[0][3]="f\'(n)";
    matrix[0][4]="error";
    var counter =1;
    let message = {};
    var error = tolerance+1;
    matrix[counter][0]=counter-1;
    matrix[counter][1]=parseFloat(x0).toPrecision(10);
    matrix[counter][2]=parseFloat(fx).toPrecision(10);
    matrix[counter][3]=parseFloat(dfx).toPrecision(10);
    matrix[counter][4]="";
    while(error>tolerance && fx!=0 && dfx!=0 && counter<niter){
        var x1= x0-(fx/dfx);
        fx=mathjs.evaluate(f,{x:x1});
        dfx=mathjs.evaluate(fder,{x:x1});
        error = Math.abs(x1-x0);
        x0=x1;
        counter=counter+1;
        matrix[counter][0]=counter-1;
        matrix[counter][1]=parseFloat(x0).toPrecision(10);
        matrix[counter][2]=parseFloat(fx).toPrecision(10);
        matrix[counter][3]=parseFloat(dfx).toPrecision(10);
        matrix[counter][4]=parseFloat(error).toPrecision(2);
    }
    if(fx==0){
        message = { type: 'Success', text: x0+" is a root"}
    }else if(error<tolerance){
        message = { type: 'Success', text: x1+" is a root approximation with tolerance "+tolerance}
    }else if(dfx==0){
        message = { type: 'Success', text: x1+" is a posible multiple root"}
    }else{
        message = { type: 'Error', text: "The method fails in "+niter+" iterations"}
    }
    const logs = [message];
    return { matrix,counter, logs};
}
export default newton;