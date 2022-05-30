const mathjs = require("mathjs");

function bisection(f,left,right,tolerance,niter){
    var fRight = mathjs.evaluate(f,{x:right});
    var fLeft = mathjs.evaluate(f,{x:left});
    let matrix=[];
    for(var i=0; i<niter+2; i++) {
        matrix[i] = new Array(6);
        for(var j=0;j<6;++j){
            matrix[i][j]=0;
        }
    }
    matrix[0][0]="iteration";
    matrix[0][1]="left";
    matrix[0][2]="right";
    matrix[0][3]="mid";
    matrix[0][4]="f(mid)";
    matrix[0][5]="error";
    var counter=0
    let message = {};
    var fXmid
    if(fRight==0){
        message = { type: 'Success', text: right+" is a root"}
    }else if(fLeft==0){
        message = { type: 'Success', text: left+" is a root"}
    }else if(fLeft*fRight<0){
        var xmid = (left+right)/2;
        fXmid = mathjs.evaluate(f,{x:xmid});
        counter = 1;
        var error = tolerance+1;
        while(error>tolerance && fXmid!=0 && counter<niter){
            matrix[counter][0]=counter;
            matrix[counter][1]=left;
            matrix[counter][2]=right;
            matrix[counter][3]=xmid;
            matrix[counter][4]=fXmid;
            matrix[counter][5]=error;
            if(fLeft*fXmid<0){
                right=xmid;
                fRight = fXmid;
            }else{
                left=xmid;
                fLeft=fXmid;
            }
            var xAux= xmid;
            xmid = (right+left)/2;
            fXmid=mathjs.evaluate(f,{x:xmid});
            error = Math.abs(xmid-xAux);
            
            counter=counter+1;
        }
        matrix[counter][0]=counter;
        matrix[counter][1]=left;
        matrix[counter][2]=right;
        matrix[counter][3]=xmid;
        matrix[counter][4]=fXmid;
        matrix[counter][5]=error;
        if(fXmid==0){
            message = { type: 'Success', text: xmid+" is a root"}
        }else if(error<tolerance){
            message = { type: 'Success', text: xmid+" is an approximation with tolerance "+tolerance}
        }else{
            message = { type: 'Success', text: xmid+"The method fails in "+niter+" iterations"}
        }
    }else{
        message = { type: 'Error', text: "bad range"}
    }
    const logs = [message];
    return { matrix,counter, logs};
}

export default bisection;