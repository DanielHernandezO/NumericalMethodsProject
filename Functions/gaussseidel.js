const mathjs = require('mathjs')

function tril(A){
	aux = A;
	for(let i = 0; i < A.length; i++){
		for(let j = i + 1; j < A[i].length;++j){
			aux[i][j] = 0;
		}
	} 
	return aux;
}
function triu(A){
	aux = A;
	for(let i = 1; i < A.length; i++){
		for(let j = i - 1; j >= 0;--j){
			aux[i][j] = 0;
		}
	} 
	return aux;
}

module.exports = (A,b,x,iter,tol) =>{
	determinante = mathjs.det(A);
	if(determinante === 0){
		console.log('El determinante es cero, el problema no tiene solución única');
		return;
	}
	n = b.length;
	d = mathjs.diag(mathjs.diag(A));
	p = triu(A);
	l = mathjs.subtract(A,tril(A));
	u = mathjs.subtract(A,triu(A));
	T = mathjs.multiply(mathjs.inv(mathjs.subtract(d,l)),u);
	re = mathjs.max(mathjs.abs(mathjs.eigs(T).values));
	if(re > 1){
		console.log('Radio Espectral mayor que 1');
		console.log('el método no converge');
		return;
	}
	C = mathjs.multiply(mathjs.inv(mathjs.subtract(d,l)),b);
	console.log(T);
	console.log(C);
	console.log(re);
	i = 0;
	err = tol + 1; 
	z = [i,x[0],x[1],x[2],err];
	while(err > tol && i<iter){
		xi = mathjs.add(mathjs.multiply(T,x),C);
		console.log(xi);
		err = mathjs.norm(xi - x);
		x = xi;
	}
	i=i+1;
	z[i][0]=i; 
	z[i][1]=x[0]; 
	z[i][2]=x[1]; 
	z[i][3]=x[2];
	z[i][4]=err;
	console.log(z);
	return T,C,re,z;
}