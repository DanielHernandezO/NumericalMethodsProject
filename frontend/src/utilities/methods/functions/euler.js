const mathjs = require('mathjs')


function euler(f, xi, yi, xf, h) {
	xi = parseInt(xi);
	yi = parseInt(yi);
	xf = parseInt(xf);
	

	var newarray = [];
	var n = (xf - xi)/h;
	for (var i = 0; i < n; i++) {
		var y1 = mathjs.evaluate(f, { x: xi , y: yi});
		
		var hy1 = h*y1;
		newarray.push([xi,y1]);
		console.log(newarray);
		
		yi = yi +hy1;
    	
		xi = xi+h;
		
	}
	
	let logs = [{ type: 'Success', text: "Correct Input"}];
	return {newarray,logs}
	
}
export default euler;
