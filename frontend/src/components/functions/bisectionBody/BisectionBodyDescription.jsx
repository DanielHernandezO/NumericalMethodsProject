import React from "react";
import Latex from "react-latex";

const BisectionDescriptionBody = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$fx$'}</Latex>:</b> Function to which we want to find the interval where the root or the root is located. Ej: 'x^2 + 2 -1'
                    </li>
                    <li>
                        <b><Latex>{'$Left$'}</Latex>:</b> Start of the interval to be taken into account
                    </li>
                    <li>
                        <b><Latex>{'$Right$'}</Latex>:</b> End of the interval end to be taken into account
                    </li>
                    <li>
                        <b><Latex>{'$Tolerance$'}</Latex>:</b> Error tolerance between the real root and the method's answer
                    </li>
                    <li>
                        <b><Latex>{'$Niter$'}</Latex>: </b> Maximum number of iterations
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <b><Latex>{'$fx$'}</Latex></b> must be continuous.
                    </li>
                    <li>
                        <b><Latex>{'$fx$'}</Latex></b> must have at least one root between the interval [Left,Right]
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default BisectionDescriptionBody;