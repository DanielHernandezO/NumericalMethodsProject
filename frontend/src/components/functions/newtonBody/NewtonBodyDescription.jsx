import React from "react";
import Latex from "react-latex";
const newtonBodyDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$fx$'}</Latex>:</b> Function to evaluate'
                    </li>
                    <li>
                        <b><Latex>{'$fder$'}</Latex>:</b> Derivative of the function
                    </li>
                    <li>
                        <b><Latex>{'$x_0$'}</Latex>:</b> Initial root approximation
                    </li>
                    <li>
                        <b><Latex>{'$Tolerance$'}</Latex>:</b> Error tolerance between the real root and the method's answer
                    </li>
                    <li>
                        <b><Latex>{'$Niter$'}</Latex>:</b> Maximum number of iterations
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <b><Latex>{'$fx$'}</Latex></b> must be continuous.
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default newtonBodyDescription;