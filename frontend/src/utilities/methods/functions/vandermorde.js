const mathjs = require('mathjs')
const partialPivoting = require('./partialPivoting.js')


function retornar(a){
    const arreglos = [];
    for (var i = 0; i < a.length; i++) {
        arreglos.push([a[i]]);
    }
    return arreglos;
}

function polinomio(x){
	let pol = "";
	for(let i = 0; i < x.length - 1; i++){
		pol = pol + x[i]+"x^"+(x.length-i-1)+"+";
	}
	pol = pol + x[x.length - 1] + " ";
	return pol;
}

module.exports = (xi,y) =>{
	let n = xi.length;
	let A = mathjs.ones(n,n).toArray();
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n - 1; ++j){
			A[i][j] = mathjs.pow(xi[i],(n-j - 1));
		}
	}
	console.log(A);
	let {x} = partialPivoting(A,retornar(y),n); 
	let poli  = polinomio(x);
	return {A,x,poli};
}