const mathjs = require("mathjs");

const incrementalSearch = (f, x0, delta, niter) => {
    let matrix = [];
    for (var i = 0; i < niter + 2; i++) {
        matrix[i] = new Array(6);
        for (var j = 0; j < 6; ++j) {
            matrix[i][j] = 0;
        }
    }
    var counter=0
    matrix[0][0] = "iteration";
    matrix[0][1] = "x0";
    matrix[0][2] = "x1";
    matrix[0][3] = "fx0";
    matrix[0][4] = "fx1";
    matrix[0][5] = "fx0*fx1";
    var fx0 = mathjs.evaluate(f, { x: x0 });
    if (fx0 == 0) {
        console.log(x0 + " is a root");
    } else {
        var x1 = x0 + delta;
        counter = 1;
        var fx1 = mathjs.evaluate(f, { x: x1 });
        while (fx0 * fx1 > 0 && counter < niter) {
            matrix[counter][0] = counter;
            matrix[counter][1] = x0;
            matrix[counter][2] = x1;
            matrix[counter][3] = fx0;
            matrix[counter][4] = fx1;
            matrix[counter][5] = fx0 * fx1;
            x0 = x1;
            fx0 = fx1;
            x1 = x0 + delta;
            fx1 = mathjs.evaluate(f, { x: x1 });
            counter = counter + 1;
        }
        matrix[counter][0] = counter;
        matrix[counter][1] = x0;
        matrix[counter][2] = x1;
        matrix[counter][3] = fx0;
        matrix[counter][4] = fx1;
        matrix[counter][5] = fx0 * fx1;
        let message = {};
        if (fx1 == 0) {
            message = { type: 'Success', text: x1 + " is a root"}
        } else if (fx0 * fx1 < 0) {
            message = { type: 'Success', text: "There is at least one root between " + x0 + " and " + x1}
        } else {
            message = { type: 'Success', text: "The method fails in " + niter + " iterations"}
        }

        const logs = [message];

        return { matrix, counter, logs};
    }
}

export default incrementalSearch;

