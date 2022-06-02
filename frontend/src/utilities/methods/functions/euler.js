const mathjs = require('mathjs')

module.exports = (f, xi, xf,yi,h) => {
	var n = (xf - xi)/h;
	const iterations = [];
	for (var i = 0; i < n; i++) {
		var y1 = mathjs.evaluate(f, { x: xi , y: yi});
		var hy1 = h*y1;
		iterations.push([xi,yi]);
		yi = yi +hy1;
    	xi = xi+h;
	}
	return {iterations};
}
 
