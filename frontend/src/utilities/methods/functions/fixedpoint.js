const mathjs = require('mathjs')
export default  (f, g, x0, tol, nMax) => {
    const iterations = [];
    let gx1 = mathjs.evaluate(g, {x:x0});
    let fx1 = mathjs.evaluate(f, {x:x0});
    let error = null;
    iterations.push([0, x0,gx1,fx1,error]);
    error = Math.abs(gx1-x0);
    x0=gx1;
    let logs = [];
    let i =0;
    let x1 = 0;
    
    for (i=0;i<nMax;i++){
        
        gx1 = mathjs.evaluate(g, {x:x0});
        fx1 = mathjs.evaluate(f, {x:x0});
        iterations.push([i + 1 , x0,gx1,fx1,error]);
        error = Math.abs(gx1-x0);
        
        if (gx1===mathjs.evaluate(f, {x:gx1})){
            break;
        }
        if(error<=tol){
            x0=gx1;
            x1 = mathjs.evaluate(g, {x:x0});
            fx1 = mathjs.evaluate(f, {x:x0});
            iterations.push([i + 2, x0,gx1,fx1,error]);
            break;
        }
    x0=gx1;
    }
    
    logs.push({ type: 'Success', text: "Correct Input"})
    return {iterations,logs,x0};
}