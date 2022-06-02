import React from "react";
import Latex from "react-latex"
const GaussseidelBodyDescription = () => {
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
                    <li>
                        <b><Latex>{'$x_{0}$'}</Latex>:</b> initial Vector Ej: 1;1;1;1 
                    </li>
                    <li>
                        <b><Latex>{'$niter$'}</Latex>:</b> Maximum number of iterations
                    </li>
                    <li>
                        <b><Latex>{'$tol$'}</Latex>:</b> Maximum permissible error
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <Latex>{'$det(A) \\not = 0$'}</Latex> 
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default GaussseidelBodyDescription;