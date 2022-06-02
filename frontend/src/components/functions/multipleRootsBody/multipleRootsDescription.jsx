import React from "react";
import Latex from "react-latex";
const MultipleRootsDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$f(x)$'}</Latex>:</b> Function to which we want to find the root. Ej: 'x*e^x-e^x+1'
                    </li>
                    <li>
                        <b><Latex>{"$f'(x)$"}</Latex>:</b> First derivative of the function f(x). Ej: 'e^x*x'
                    </li>
                    <li>
                        <b><Latex>{"$f''(x)$"}</Latex>:</b> Second derivative of the function f(x). Ej: 'e^x*x + e^x'
                    </li>
                    <li>
                        <b><Latex>{"$x_0$"}</Latex>:</b> Initial root approximation
                    </li>
                    <li>
                        <b><Latex>{"$niter$"}</Latex>:</b> Maximum number of iterations
                    </li>
                    <li>
                        <b><Latex>{"$tol$"}</Latex>:</b> Maximum permissible error
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <b><Latex>{"$f(x)$"}</Latex></b> must be continuous.
                    </li>
                    <li>
                        <b><Latex>{"$(f'(x0)^2) - f(x0)*f''(x0)$"}</Latex></b> must be different from 0.
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default MultipleRootsDescription;