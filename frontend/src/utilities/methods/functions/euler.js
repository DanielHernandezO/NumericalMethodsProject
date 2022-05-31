function eulersMethod(x1, y1, h) {
	var newarray = [];
	var x=x1, y=y1;
	function cooling(y) {
		return -0.07 * (y-20);
	}
	let logs = [];
	while ((x<y1 && x1<y1) || (x>y1 && x1>y1)) {
		// Print what we have
		newarray.push([x,y]);
		// Calculate the next values
		y += h*cooling(y);
		x += h;
	}
	logs = [{type:'Success', text: "Correct input"}]
	return {newarray,logs};
}
 

 

export default eulersMethod;