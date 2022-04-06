const mathjs = require('mathjs')
module.exports = (f, g, x0, tol, nMax) => {
    const iterations = [];
    x1 = mathjs.evaluate(g, {x:x0});

    
    fx1 = mathjs.evaluate(f, {x:x0});
    error = null;
    iterations.push({x0,x1,fx1,error});
    error = Math.abs(x1-x0);
    x0=x1;
    for (i=0;i<nMax;i++){
        
        x1 = mathjs.evaluate(g, {x:x0});
        fx1 = mathjs.evaluate(f, {x:x0});
        iterations.push({x0,x1,fx1,error});
        error = Math.abs(x1-x0);
        
        if (x1===mathjs.evaluate(f, {x:x1})){
            break;
        }
        if(error<=tol){
            x0=x1;
            x1 = mathjs.evaluate(g, {x:x0});
            fx1 = mathjs.evaluate(f, {x:x0});
            iterations.push({x0,x1,fx1,error});
            break;
        }
    x0=x1;
    }
    return {x:x0,iterations};
}