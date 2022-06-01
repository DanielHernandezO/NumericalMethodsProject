const mathjs = require('mathjs')

module.exports = (x,y) => {
    function zeros(dimensions) {
        var array = [];
        for (var i = 0; i < dimensions[0]; ++i) {
            array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
        }
        return array;
    }
    array = zeros([x.length,x.length]);

    var i =0;
    while(y.length > i){
        array[i][0] = y[i];
        i++
    }
    i = 1;
    var w = 0;
    for (i=1;i<x.length;i++){
        var z = i;


        while(y.length > z){
            aux1=(array[z][w]-array[z-1][w])/(x[z]-x[z-i]);
            array[z][i] = aux1;
            z++
        }
        w = w+1;


    }
    var ans = [];
    for (let i = 0; i< x.length; i++) {
      ans.push(array[i][i])

      
    }
    console.log(array);
    return ans;
}