import React from "react";
import Latex from "react-latex"
const HeunDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$f(x,y)$'}</Latex>:</b> The function to evaulate
                    </li>
                    <li>
                        <b><Latex>{'$x$'}</Latex>:</b> The initial condition for x
                    </li>
                    <li>
                        <b><Latex>{'$y$'}</Latex>:</b> The initial condition for y
                    </li>
                    <li>
                        <b><Latex>{'$h$'}</Latex>:</b> Step size
                    </li>
                    <li>
                        <b><Latex>{'$n$'}</Latex>:</b> Number of iterations
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default HeunDescription;