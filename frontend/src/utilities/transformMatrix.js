const transformMatrix = (matrix) => {
    const matrixResult = []
    const matrixDivided = matrix.split(';');
    for(let i = 0; i< matrixDivided.length;i++){
        const rowDivided = matrixDivided[i].split(',');
        const finalRow = [];
        for(let j = 0; j< rowDivided.length;j++){
            finalRow.push(parseFloat(rowDivided[j]));
        }
        matrixResult.push(finalRow);
    }
    return matrixResult;
}

export default transformMatrix;

