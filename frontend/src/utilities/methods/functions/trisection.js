
const mathjs = require("mathjs");

function trisection(f,left,right,tolerance,niter){
    var fRight = mathjs.evaluate(f,{x:right});
    var fLeft = mathjs.evaluate(f,{x:left});
    let matrix=[];
    for(var i=0; i<niter+2; i++) {
        matrix[i] = new Array(9);
        for(var j=0;j<9;++j){
            matrix[i][j]=0;
        }
    }
    matrix[0][0]="iteration";
    matrix[0][1]="left";
    matrix[0][2]="right";
    matrix[0][3]="xmid1";
    matrix[0][4]="xmid2";
    matrix[0][5]="f(xmid1)";
    matrix[0][6]="f(xmid2)";
    matrix[0][7]="error1";
    matrix[0][8]="error2";
    var counter=0
    let message = {};
    if(fRight==0){
        message = { type: 'Success', text: right+" is a root"}
    }else if(fLeft==0){
        message = { type: 'Success', text: left+" is a root"}
    }else if(fLeft*fRight<0){
        var xmid1 = left+ (right-left)/3;
        var xmid2 = right- (right-left)/3;
        var fXmid1 = mathjs.evaluate(f,{x:xmid1});
        var fXmid2 = mathjs.evaluate(f,{x:xmid2});
        
        counter = 1;
        var error1 = tolerance+1;
        var error2 = tolerance+1;
        
        while(error1>tolerance  && error2>tolerance && fXmid1!=0 && fXmid2!=0 && counter<niter){
            matrix[counter][0]=counter;
            matrix[counter][1]=parseFloat(left).toPrecision(10);
            matrix[counter][2]=parseFloat(right).toPrecision(10);
            matrix[counter][3]=parseFloat(xmid1).toPrecision(10);
            matrix[counter][4]=parseFloat(xmid2).toPrecision(10);
            matrix[counter][5]=parseFloat(fXmid1).toPrecision(10);
            matrix[counter][6]=parseFloat(fXmid2).toPrecision(10);
            matrix[counter][7]=parseFloat(error1).toPrecision(2);
            matrix[counter][8]=parseFloat(error2).toPrecision(2);
            if(fLeft*fXmid1<0){
                right=xmid1;
                fRight = fXmid1;
            }else if(fXmid1*fXmid2<0){
                left =xmid1;
                fLeft=fXmid1;
                right =xmid2;
                fRight = fXmid2;
            }else{
                left=xmid2;
                fLeft=fXmid2;
            }
            var xAux1= xmid1;
            var xAux2= xmid2;
            xmid1 = left+ (right-left)/3;
            fXmid1 = mathjs.evaluate(f,{x:xmid1});
            xmid2 = right- (right-left)/3;
            fXmid2 = mathjs.evaluate(f,{x:xmid2});
            error1 = Math.abs(xmid1-xAux1);
            error2 = Math.abs(xmid2-xAux2);;
            counter=counter+1;
        }
        matrix[counter][0]=counter;
        matrix[counter][1]=parseFloat(left).toPrecision(10);
        matrix[counter][2]=parseFloat(right).toPrecision(10);
        matrix[counter][3]=parseFloat(xmid1).toPrecision(10);
        matrix[counter][4]=parseFloat(xmid2).toPrecision(10);
        matrix[counter][5]=parseFloat(fXmid1).toPrecision(10);
        matrix[counter][6]=parseFloat(fXmid2).toPrecision(10);
        matrix[counter][7]=parseFloat(error1).toPrecision(2);
        matrix[counter][8]=parseFloat(error2).toPrecision(2);
        
        if(fXmid1==0){
            message = { type: 'Success', text: xmid1+" is a root"}
        }else if(fXmid2==0){
            message = { type: 'Success', text: xmid2+" is a root"}
        }else if(error1<tolerance){
            message = { type: 'Success', text: xmid1+" is an approximation with tolerance "+tolerance}
        }else if(error2<tolerance){
            message = { type: 'Success', text: xmid2+" is an approximation with tolerance "+tolerance}
        }else{
            message = { type: 'Error', text: "The method fails in "+niter+" iterations"}
        }
    }else{
        message = { type: 'Error', text: "bad range"}
    }
    const logs = [message];
    return { matrix,counter, logs};
}

export default trisection;