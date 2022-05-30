import React from "react";
import Bisection from "../../../pages/functions/Bisection";

const BisectionDescriptionBody = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b>fx:</b> Function to which we want to find the interval where the root or the root is located. Ej: 'x^2 + 2 -1'
                    </li>
                    <li>
                        <b>Left: </b> Start of the interval to be taken into account
                    </li>
                    <li>
                        <b>Right </b> End of the interval end to be taken into account
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
                    <li>
                        <b>fx</b> must have at least one root between the interval [Left,Right]
                    </li>
                    <li>
                        <b>Right</b> Right must be greater or equal than Left
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