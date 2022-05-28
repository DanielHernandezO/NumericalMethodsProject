function eulersMethod(f, x1, y1, x2, h) {

	var x=x1, y=y1;
	while ((x<x2 && x1<x2) || (x>x2 && x1>x2)) {
		// Print what we have
		console.log("\t" + x + "\t|\t" + y);
 
		// Calculate the next values
		y += h*f(x, y)
		x += h;
	}
 
	return y;
}
 
function cooling(x, y) {
	return -0.07 * (y-20);
}
 
eulersMethod(cooling, 0, 100, 100, 10);