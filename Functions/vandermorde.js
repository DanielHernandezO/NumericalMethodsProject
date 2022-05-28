const mathjs = require('mathjs')
module.exports = (x,y) =>{
	n = x.length;
	A = mathjs.zeros(n,n).toArray();
	cont  = 0;
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
		cont2 = 2;
		while(cont2 < n){
			A[cont][cont2] = A[cont][1]^(cont2 - 1);
			cont2 = cont2 + 1;
		}
		cont = cont+1;
	}
	AI = mathjs.inv(A);
	R = mathjs.multiply(AI,y);
	console.log(R);
	return R;
}