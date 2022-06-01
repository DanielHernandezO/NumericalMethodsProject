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
function eulersMethod(f, x1, y1, x2, h) {
	var arr = [];
	var x=x1, y=y1;
	while ((x<x2 && x1<x2) || (x>x2 && x1>x2)) {
		// Print what we have

		arr.push([x,y]);
		// Calculate the next values
		y += h*f(x, y)
		x += h;
	}
	return arr;
	
}
 
function cooling(x, y) {
	return -0.07 * (y-20);
}
 
console.log(eulersMethod(cooling, 0, 2, 1, 0.1));