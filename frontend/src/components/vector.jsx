import React from "react";
import Latex from "react-latex";
const Vector = ({vector}) => {
    let data = '';
    for(let i = 0; i < vector.length; i++){
        data+= vector[i] +'\\\\';
    }
    return (<Latex>{`$\\begin{pmatrix} ${data} \\end{pmatrix}$`}</Latex>)
}

export default Vector;