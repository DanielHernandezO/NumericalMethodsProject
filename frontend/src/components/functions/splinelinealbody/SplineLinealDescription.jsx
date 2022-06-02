import React from "react";
import Latex from "react-latex"
const SplineLinealDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$X:$'}</Latex></b> First row of the table
                    </li>
                    <li>
                        <b><Latex>{'$Y:$'}</Latex></b> Second row of the table
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                    The determinant can not be 0
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default SplineLinealDescription;