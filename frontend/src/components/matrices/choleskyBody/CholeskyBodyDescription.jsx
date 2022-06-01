import React from "react";
import Latex from "react-latex"
const CholeskyBodyDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$A_{nxn}$'}</Latex>:</b> Matrix of coefficients Ej: 4,-1,0,3;1,15.5,3,8;0,-1.3,-4,1.1;14,5,-2,30
                    </li>
                    <li>
                        <b><Latex>{'$b_{1xn}$'}</Latex>:</b> Vector of independent terms Ej: 1;1;1;1 
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        The matrix must be quadratic and positive definitive
                    </li> 
                    <li>
                        The elements of the diagonal must be different from 0 and not adjacent to it.
                    </li>   
                    
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default CholeskyBodyDescription;