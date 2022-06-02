import React from "react";
import Latex from "react-latex"
const TridiagonalBodyDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$a_{1xn}$'}</Latex>:</b> lower diagonal terms Ej: 0;1;1;1;1 
                    </li>
                    <li>
                        <b><Latex>{'$b_{1xn}$'}</Latex>:</b> main diagonal terms  Ej: 1;1;1;1;1 
                    </li>
                    <li>
                        <b><Latex>{'$c_{1xn}$'}</Latex>:</b> upper diagonal terms Ej: 1;1;1;1;0 
                    </li>
                    <li>
                        <b><Latex>{'$d_{1xn}$'}</Latex>:</b> vector of independent terms Ej: 1;1;1;1;1 
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <Latex>{'$b[0]$ should be different to zero'}</Latex> 
                    </li>
                    <li>
                        <Latex>{'$c[n - 1]$ should be different to zero'}</Latex> 
                    </li>
                    <li>
                        <Latex>{'$a[n]$ should be different to zero'}</Latex> 
                    </li>
                    <li>
                        <Latex>{'$b[n]$ should be greater than a[n] * c[n - 1]'}</Latex> 
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default TridiagonalBodyDescription;