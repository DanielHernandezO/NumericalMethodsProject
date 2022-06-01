const mathjs = require("mathjs")

function Heun(f,x,y,h,n){
    var counter=0
    let matrix = []
    for(var i=0; i<n+2; i++) {
        matrix[i] = new Array(3);
        for(var j=0;j<3;++j){
            matrix[i][j]=0;
        }
    }
    matrix[counter][0] = "iteracion";
    matrix[counter][1] = "x";
    matrix[counter][2] = "y";
    counter+=1;
    while(counter<=n){
        matrix[counter][0] = counter;
        matrix[counter][1] = parseFloat(x).toPrecision(10)
        matrix[counter][2] = parseFloat(y).toPrecision(10)
        var k1 = mathjs.evaluate(f,{x:x,y:y});
        var k2 = mathjs.evaluate(f,{x:x+h,y:y+(k1*h)});
        y = y+((k1*k2)*(h/2));
        x = x+h;
        counter+=1;
    }
    matrix[counter][0] = counter;
    matrix[counter][1] = parseFloat(x).toPrecision(10)
    matrix[counter][2] = parseFloat(y).toPrecision(10)
    return {matrix,counter}
}

export default Heun;