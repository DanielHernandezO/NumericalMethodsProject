import React from "react";

const newtonBodyDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b>fx:</b> Function to evaluate'
                    </li>
                    <li>
                        <b>fder: </b> Derivative of the function
                    </li>
                    <li>
                        <b>x0 </b> Initial root approximation
                    </li>
                    <li>
                        <b>Tolerance: </b> Error tolerance between the real root and the method's answer
                    </li>
                    <li>
                        <b>Niter: </b> Maximum number of iterations
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <b>fx</b> must be continuous.
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