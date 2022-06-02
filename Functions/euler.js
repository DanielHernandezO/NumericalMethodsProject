const mathjs = require('mathjs')
// function eulersMethod(x1, y1, h) {
// 	var arr = [];
// 	function cooling(y) {
// 		return -0.07 * (y-20);
// 	}
// 	var x=x1, y=y1;
// 	while ((x<y1 && x1<y1) || (x>y1 && x1>y1)) {
// 		// Print what we have
// 		arr.push([x,y]);
// 		// Calculate the next values
// 		y += h*cooling(y);
// 		x += h;
// 	}
// 	return arr;
// }
 

 

// console.log(eulersMethod(0,5,0.2));
function euler(f, xi, yi, xf, h) {
	var arr = [];
	var n = (xf - xi)/h;
	for (var i = 0; i < n; i++) {
		var y1 = mathjs.evaluate(f, { x: xi , y: yi});
		var hy1 = h*y1;
		arr.push([xi,yi]);
		yi = yi +hy1;
    	xi = xi+h;
	}
	return arr;
	
}
 
function cooling(x, y) {
	return -0.07 * (y-20);
}
console.log(euler('0.1*sqrt(y)+0.4*x^2',2,4,4,0.5));