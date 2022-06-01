const mathjs = require('mathjs')
module.exports = (x,y) =>{
	const n = x.length;
	let A = mathjs.zeros(n,n).toArray();
	var cont  = 0;
	while(cont < n){
		A[cont][0] = 1;
		cont = cont+1;
	}
	cont = 0;
	while(cont < n){
		A[cont][1] = x[cont];
		cont = cont+1;
	}
	cont = 0;
	while(cont < n){
		var cont2 = 2;
		while(cont2 < n){
			A[cont][cont2] = A[cont][1]^(cont2 - 1);
			cont2 = cont2 + 1;
		}
		cont = cont+1;
	}
	let AI = mathjs.inv(A);
	let R = mathjs.multiply(AI,y);
	return {R};
}