const mathjs = require("mathjs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    var error = tolerance+1;
    matrix[counter][0]=counter;
    matrix[counter][1]=x0;
    matrix[counter][2]=fx;
    matrix[counter][3]=dfx;
    matrix[counter][4]=error;
    while(error>tolerance && fx!=0 && dfx!=0 && counter<niter){
        var x1= x0-(fx/dfx);
        fx=mathjs.evaluate(f,{x:x1});
        dfx=mathjs.evaluate(fder,{x:x1});
        error = Math.abs(x1-x0);
        x0=x1;
        counter=counter+1;
        matrix[counter][0]=counter;
        matrix[counter][1]=x0;
        matrix[counter][2]=fx;
        matrix[counter][3]=dfx;
        matrix[counter][4]=error;
    }
    if(fx==0){
        console.log(x0+" is a root");
    }else if(error<tolerance){
        console.log(x1+" is a root approximation with tolerance "+tolerance)
    }else if(dfx==0){
        console.log(x1+" is a posible multiple root");
    }else{
        console.log("The method fails in "+niter+" iterations");
    }
    console.log("\nResult table: \n");
    console.table(matrix);
}

var questions =["function: ","derivate: ","x0: ","tolerance: ","niter: "];

rl.question(questions[0], function (f) {
    rl.question(questions[1], function (der) {
        rl.question(questions[2], function (x0) {
            rl.question(questions[3], function (t) {
                rl.question(questions[4], function (n) {
                    newton(f,der,parseFloat(t),parseFloat(x0),parseFloat(n));
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
