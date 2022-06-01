import React from "react";
import Latex from "react-latex";
const FixedpointDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$f(x):$'}</Latex></b> Function to which we want to find the root. Ej: <Latex>{'$log((sin(x)^2)+1)-x-1/2$'}</Latex>
                    </li>
                    <li>
                        <b><Latex>{'$g(x):$'}</Latex></b> A function in the form x = g(x). Ej: <Latex>{'$log((sin(x)^2)+1)-1/2$'}</Latex>
                    </li>
                    <li>
                        <b><Latex>{'$x0:$'}</Latex></b> Initial root approximation
                    </li>
                    <li>
                        <b>niter: </b> Maximum number of iterations
                    </li>
                    <li>
                        <b>tol: </b> Maximum permissible error
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <b><Latex>{'$f(x)$'}</Latex></b> must be continuous.
                    </li>
                    <li>
                        <b></b> If  <Latex>{'$g(x)∈[a,b]$'}</Latex>,the function does not leave the rectangle defined by the points [a,b], the function comes from the left of the rectanble and leaves from the right and the function cuts the line y = x there is fixed point.
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default FixedpointDescription;