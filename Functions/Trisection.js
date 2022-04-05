const mathjs = require("mathjs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    
    if(fRight==0){
        console.log(right+" is a root");
    }else if(fLeft==0){
        console.log(left+" is a root");
    }else if(fLeft*fRight<0){
        var xmid1 = left+ (right-left)/3;
        var xmid2 = right- (right-left)/3;
        var fXmid1 = mathjs.evaluate(f,{x:xmid1});
        var fXmid2 = mathjs.evaluate(f,{x:xmid2});
        
        var counter = 1;
        var error1 = tolerance+1;
        var error2 = tolerance+1;
        
        while(error1>tolerance  && error2>tolerance && fXmid1!=0 && fXmid2!=0 && counter<niter){
            matrix[counter][0]=counter;
            matrix[counter][1]=left;
            matrix[counter][2]=right;
            matrix[counter][3]=xmid1;
            matrix[counter][4]=xmid2;
            matrix[counter][5]=fXmid1;
            matrix[counter][6]=fXmid2;
            matrix[counter][7]=error1;
            matrix[counter][8]=error2;
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
        matrix[counter][1]=left;
        matrix[counter][2]=right;
        matrix[counter][3]=xmid1;
        matrix[counter][4]=xmid2;
        matrix[counter][5]=fXmid1;
        matrix[counter][6]=fXmid2;
        matrix[counter][7]=error1;
        matrix[counter][8]=error2;
        
        if(fXmid1==0){
            console.log(xmid1+" is a root");
        }else if(fXmid2==0){
            console.log(xmid2+" is a root");
        }else if(error1<tolerance){
            console.log(xmid1+" is an approximation with tolerance "+tolerance);
        }else if(error2<tolerance){
            console.log(xmid2+" is an approximation with tolerance "+tolerance);
        }else{
            console.log("The method fails in "+niter+" iterations");
        }
    }else{
        console.log("bad range");
    }
    console.log("\nResult table: \n");
    console.table(matrix);
}
var questions =["function: ","left: ","right: ","tolerance: ","niter: "];

rl.question(questions[0], function (f) {
    rl.question(questions[1], function (l) {
        rl.question(questions[2], function (r) {
            rl.question(questions[3], function (t) {
                rl.question(questions[4], function (n) {
                    trisection(f,parseFloat(l),parseFloat(r),t,parseFloat(n));
                    rl.close();
                });
            });
        });
    });
});
  
rl.on('close', function () {
    console.log('\nThe best method ;) !!!');
    process.exit(0);
});
