const mathjs = require('mathjs')
module.exports = (f, g, x0, tol, nMax) => {
    for (i=0;i<nMax;i++){
        x1 = mathjs.evaluate(g, {x:x0});

        console.log(i," ",x1);

        if (x1===mathjs.evaluate(f, {x:x1})){
            break;
        }
        if(Math.abs((x1-x0))<=tol){
            break;
        }
    x0=x1;
    }
    
}