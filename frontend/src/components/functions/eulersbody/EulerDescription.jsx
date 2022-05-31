import React from "react";
import Latex from "react-latex"
const SplineQuadraticDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$x:$'}</Latex></b> Starting value.
                    </li>
                    <li>
                        <b><Latex>{'$y:$'}</Latex></b> Ending value / limit.
                    </li>
                    <li>
                        <b><Latex>{'$h:$'}</Latex></b> Size of steps.
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        The input must be every element of the table followed by a coma like this : <Latex>{'$1,5,2,3$'}</Latex>
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default SplineQuadraticDescription;