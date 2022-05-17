function matprint(mat) {
    let shape = [mat.length, mat[0].length];
    function col(mat, i) {
        return mat.map(row => row[i]);
    }
    let colMaxes = [];
    for (let i = 0; i < shape[1]; i++) {
        colMaxes.push(Math.max.apply(null, col(mat, i).map(n => n.toString().length)));
    }

    mat.forEach(row => {
        console.log.apply(null, row.map((val, j) => {
            return new Array(colMaxes[j]-val.toString().length+1).join(" ") + val.toString() + "  ";
        }));
    });
}
function sustProg(M){
    n=M.length;
    var x=[];
    for(var i=0;i<n;++i){
        x.push(new Array());
        x[i].push(0);
    }
    x[0][0]=M[0][n]/M[0][0];
    for(var i=1;i<n;++i){
        aux=[1];
        for(var j=0;j<i;++j){
            aux.push(x[j][0]);
        }
        aux1= [M[i][n]]
        for(var j=0;j<i;++j){
          aux1.push(M[i][j]*-1);
        }
        var sum=0;
        for(var j=0;j<aux1.length;++j){
            sum=sum+aux1[j]*aux[j];
        }
        x[i][0]= sum/M[i][i];
    }
    return x;
}

function susRegre(M){
    n=M.length;
    var x=[];
    for(var i=0;i<n;++i){
        x.push(new Array());
        x[i].push(0);
    }
    x[n-1][0]=parseFloat(M[n-1][n]/M[n-1][n-1]).toFixed(4);
    for(var i=n-2;i>=0;--i){
        aux=[1];
        for(var j=i+1;j<n;++j){
            aux.push(x[j][0]);
        }
        aux1= [M[i][n]]
        for(var j=i+1;j<n;++j){
          aux1.push(M[i][j]*-1);
        }
        var sum=0;
        for(var j=0;j<aux1.length;++j){
            sum=sum+aux1[j]*aux[j];
        }
        x[i][0]= parseFloat(sum/M[i][i]).toFixed(4);
    }
    return x;
}
function luDecomposition(mat,B)
{
    var n= mat.length;
    var lower = Array(n).fill(0).map(
           x => Array(n).fill(0));
    var upper = Array(n).fill(0).map(
           x => Array(n).fill(0));
 
    for(var i = 0; i < n; i++){
        for(var k = i; k < n; k++){
            var sum = 0;
            for(var j = 0; j < i; j++)
                sum += (lower[i][j] * upper[j][k]);
            upper[i][k] = parseFloat(mat[i][k] - sum).toFixed(4);
        }
        for(var k = i; k < n; k++){
            if (i == k)
                lower[i][i] = 1;
            else{
                var sum = 0;
                for(var j = 0; j < i; j++)
                    sum += (lower[k][j] * upper[j][i]);
                lower[k][i] = parseFloat((mat[k][i] - sum) /upper[i][i]).toFixed(4);
            }
        }
    }
    console.log("\n L: ")
    matprint(lower);
    console.log("\n U: ")
    matprint(upper);
    for(var i=0;i<n;++i){
        lower[i].push(parseFloat(B[i][0]).toFixed(4));
    }
    var z=sustProg(lower);
    for(var i=0;i<n;++i){
        upper[i].push(parseFloat(z[i][0]).toFixed(4));
    }
    var x= susRegre(upper);
    console.log("\n X: ")
    matprint(x)
}
 
var mat = [ [ 4, -1, 0, 3 ],
            [ 1, 15.5, 3,8],
            [ 0,-1.3, -4,-1.1 ],
            [14,5,-2,30] ];
            var B =[
                [1],
                [1],
                [1],
                [1]];           
luDecomposition(mat,B);