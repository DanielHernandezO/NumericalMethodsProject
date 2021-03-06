const mathjs = require('mathjs')
module.exports = (f, g, x0, tol, nMax) => {
    const iterations = [];
    gx1 = mathjs.evaluate(g, {x:x0});

    
    fx1 = mathjs.evaluate(f, {x:x0});
    error = null;
    iterations.push({x0,gx1,fx1,error});
    error = Math.abs(gx1-x0);
    x0=gx1;
    for (i=0;i<nMax;i++){
        
        gx1 = mathjs.evaluate(g, {x:x0});
        fx1 = mathjs.evaluate(f, {x:x0});
        iterations.push({x0,gx1,fx1,error});
        error = Math.abs(gx1-x0);
        
        if (gx1===mathjs.evaluate(f, {x:gx1})){
            break;
        }
        if(error<=tol){
            x0=gx1;
            x1 = mathjs.evaluate(g, {x:x0});
            fx1 = mathjs.evaluate(f, {x:x0});
            iterations.push({x0,gx1,fx1,error});
            break;
        }
    x0=gx1;
    }
    return {x:x0,iterations};
}