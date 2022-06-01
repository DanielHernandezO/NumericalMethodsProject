import React from "react";
import Latex from "react-latex";
const IncrementalSearchBodyDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$fx$'}</Latex>:</b> Function to which we want to find the interval where the root or the root is located. Ej: 'x^2 + 2 -1'
                    </li>
                    <li>
                        <b><Latex>{'$x_0$'}</Latex>:</b> Initial root approximation. Ej: 0
                    </li>
                    <li>
                        <b><Latex>{'$delta$'}</Latex>: </b> Reason for change of x. Ej: 0.5
                    </li>
                    <li>
                        <b><Latex>{'$niter$'}</Latex>: </b> Maximum number of iterations
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

export default IncrementalSearchBodyDescription;