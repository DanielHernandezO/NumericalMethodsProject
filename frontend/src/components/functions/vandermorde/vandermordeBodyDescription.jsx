import React from "react";
import Latex from "react-latex"
const VandermordeBodyDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$x_{1xn}$'}</Latex>:</b> x points Ej: 0;1;1;1;1 
                    </li>
                    <li>
                        <b><Latex>{'$y_{1xn}$'}</Latex>:</b> y points  Ej: 1;1;1;1;1 
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

export default VandermordeBodyDescription;