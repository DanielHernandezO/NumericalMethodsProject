const mathjs = require('mathjs')

function tril(A){
	let aux = mathjs.zeros(A.length,A.length).toArray();
	for(let i = 0; i < A.length; i++){
		for(let j = 0; j < A[i].length;j++){
			if(i>=j){
				aux[i][j] = A[i][j];
			}
		}
	} 
	return aux;
}
function triu(A){
	let aux = mathjs.zeros(A.length,A.length).toArray();
	for(let i = 0; i < A.length; i++){
		for(let j = 0; j < A[i].length;j++){
			if(j>=i){
				aux[i][j] = A[i][j];
			}
		}
	} 
	return aux;
}

export default  (A,b,x,iter,tol,w) =>{
    const logs = [];
	const iteration = [];
	let determinante = mathjs.det(A);
	if(determinante === 0){
        logs.push({
            type: 'Error',
            text: 'The determinant is zero, the problem has no unique solution.'
        })
		return {logs, iterations: []};
	}
	let n = b.length;
	let d = mathjs.diag(mathjs.diag(A));
	let p = triu([...A]);
	let o = tril([...A]);
	let l = mathjs.subtract(d,o);
	let u = mathjs.subtract(d,p);
	console.log(u);
	let T = mathjs.multiply(mathjs.inv(mathjs.subtract(d,mathjs.multiply(w,l))),mathjs.add(mathjs.multiply(mathjs.subtract(1,w),d),mathjs.multiply(w,u)));
	console.log(T);
	const re = mathjs.max(mathjs.abs(mathjs.eigs(T).values));
	console.log(re);
	if(re > 1){
        logs.push({
            type: 'Error',
            text: 'Spectral radius greater than 1: the method does not converge.'
        })
		return {logs, iterations: []};
	}
	let C =  mathjs.multiply(mathjs.multiply(w,mathjs.inv(mathjs.subtract(d,mathjs.multiply(w,l)))),b);
	let i = 0;
	let err = tol + 1; 
    iteration.push([i,x[0],x[1],x[2]]);

	while(err > tol && i<iter){
		let xi = mathjs.add(mathjs.multiply(T,x),C);
		err = mathjs.norm(mathjs.subtract(xi,x));
		x = xi;
		i=i+1;
		iteration.push([i,x[0],x[1],x[2],err]);
	}

	if(i>=iter){
		logs.push({ type: 'Error', text: 'The method fails with the maximum number of iterations given' })
	}
	
	
	return {T,C,re,iteration, logs, x};
}



