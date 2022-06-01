const mathjs = require('mathjs')

module.exports = (x,y) => {
    function zeros(dimensions) {
        var array = [];
        for (var i = 0; i < dimensions[0]; ++i) {
            array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
        }
        return array;
    }
    
    let newarray = zeros([x.length,x.length]);
    let logs = [];
    var i =0;
    while(y.length > i){
        newarray[i][0] = y[i];
        i++
    }
    i = 1;
    var w = 0;
    for (i=1;i<x.length;i++){
        var z = i;

    let aux1= 0;
        while(y.length > z){
            aux1=(newarray[z][w]-newarray[z-1][w])/(x[z]-x[z-i]);
            newarray[z][i] = aux1;
            z++
        }
        w = w+1;


    }
    
    var ans = [];
    for (let i = 0; i< x.length; i++) {
      ans.push(newarray[i][i])

    }
    for (let y = 0; y < newarray.length; y++) {
        for (let k = 0; k < newarray[y].length; k++) {
            if (newarray[y][k] == Infinity) {
                logs.push({ type: 'Error', text: "Error found executing method, division by 0"})
                return{newarray,logs};
            }
            
        }
        
    }
    
    logs.push({ type: 'Success', text: "Correct Input"})
    return {newarray,logs};
}