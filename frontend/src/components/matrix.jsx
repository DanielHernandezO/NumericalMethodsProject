import React from "react";
import Latex from "react-latex";
const Matrix = ({matrix}) => {
    let data = '';
    for(let i = 0; i < matrix.length; i++){
        data+= matrix[i].join(' & ')+'\\\\';
    }
    return (<Latex>{`$\\begin{pmatrix} ${data} \\end{pmatrix}$`}</Latex>)
}

export default Matrix;