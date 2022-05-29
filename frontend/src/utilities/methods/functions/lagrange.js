const mathjs = require('mathjs')

module.exports = (x,y) => {
    var newarray= [];
    var coefficients=[];
    for (var m=0; m<x.length; m++) coefficients[m]=0;
        for (var m=0; m<x.length; m++) {
            var newCoefficients=[];
            for (var nc=0; nc<x.length; nc++) newCoefficients[nc]=0;
            if (m>0) {
                newCoefficients[0]=-x[0]/(x[m]-x[0]);
                newCoefficients[1]=1/(x[m]-x[0]);
        } else {
            newCoefficients[0]=-x[1]/(x[m]-x[1]);
            newCoefficients[1]=1/(x[m]-x[1]);
        }
        var startIndex=1; 
        if (m==0) startIndex=2; 
        for (var n=startIndex; n<x.length; n++) {
            if (m==n) continue;
            for (var nc=x.length-1; nc>=1; nc--) {
                newCoefficients[nc]=newCoefficients[nc]*(-x[n]/(x[m]-x[n]))+newCoefficients[nc-1]/(x[m]-x[n]);
            }
            newCoefficients[0]=newCoefficients[0]*(-x[n]/(x[m]-x[n]));
        }
        newarray.push(newCoefficients.reverse());
        // console.log(newarr);
        
        // console.log(newCoefficients.reverse()[1]);
        // console.log(newCoefficients.reverse()[2]);
        // console.log(newCoefficients.reverse()[3], "X");
        for (var nc=0; nc<x.length; nc++) coefficients[nc]+=y[m]*newCoefficients[nc];
    }
    let z = 0;
    let logs = 0;
    for(var i = 0; i < newarray.length; i++) {
        z = newarray.length-1;
        for(var j = 0; j < newarray.length-1; j++) {
            newarray[i][j] = newarray[i][j] + "x^" +z;
            z--;
        }    
    }
    return {newarray,logs};
}